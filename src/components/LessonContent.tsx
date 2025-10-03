import { X, CheckCircle2, BookOpen, Lightbulb, FileText, ChevronLeft, ChevronRight, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { Lesson } from "@/types/course";
import { useEnrollment } from "@/hooks/useEnrollment";
import { toast } from "sonner";
import { CourseQuiz } from "@/components/CourseQuiz";
import { course1QuizQuestions } from "@/data/course1-quiz";
import { course2QuizQuestions } from "@/data/course2-quiz";
import { course3QuizQuestions } from "@/data/course3-quiz";

interface LessonContentProps {
  lesson: Lesson;
  allLessons: Lesson[];
  currentIndex: number;
  isCompleted: boolean;
  onClose: () => void;
  onComplete: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const LessonContent = ({
  lesson,
  allLessons,
  currentIndex,
  isCompleted,
  onClose,
  onComplete,
  onNavigate
}: LessonContentProps) => {
  const { isEnrolled } = useEnrollment();
  const isFirstLesson = currentIndex === 0;
  // First lesson is free preview, all others require enrollment
  const canAccess = isFirstLesson || isEnrolled;
  const isNextLessonQuiz = currentIndex < allLessons.length - 1 && allLessons[currentIndex + 1]?.isAssessment;

  const handleComplete = () => {
    onComplete();
    toast.success("Lesson marked as complete!");
  };

  // Get quiz questions based on course
  const getQuizQuestions = () => {
    if (lesson.courseId === "course-1") return course1QuizQuestions;
    if (lesson.courseId === "course-2") return course2QuizQuestions;
    if (lesson.courseId === "course-3") return course3QuizQuestions;
    return [];
  };

  // If this is a quiz lesson, render the CourseQuiz component
  if (lesson.type === "quiz" && lesson.isAssessment) {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
        <div className="container max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold break-words">{lesson.title}</h2>
          </div>
          <CourseQuiz
            questions={getQuizQuestions()}
            courseTitle={lesson.title}
            courseId={lesson.courseId}
            onComplete={handleComplete}
          />
        </div>
      </div>
    );
  }

  // Enhanced content parser
  const parseContent = (content: string) => {
    const elements: JSX.Element[] = [];
    
    // First, handle multi-line [EXAMPLE]...[/EXAMPLE] and [NOTE]...[/NOTE] blocks
    const processedContent = content.replace(
      /\[(EXAMPLE|NOTE)\]([\s\S]*?)\[\/\1\]/g,
      (match, type, innerContent) => {
        // Return a marker that we'll process later
        return `[${type}]${innerContent.trim()}`;
      }
    );
    
    const blocks = processedContent.split('\n\n');
    
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i].trim();
      
      // Table detection: [TABLE: title]
      if (block.startsWith('[TABLE:')) {
        const match = block.match(/\[TABLE:\s*(.+?)\]/);
        if (match && i + 1 < blocks.length) {
          const title = match[1];
          const tableData = blocks[i + 1];
          const lines = tableData.split('\n').filter(l => l.trim());
          
          if (lines.length >= 2) {
            const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);
            const rows = lines.slice(1).map(line => 
              line.split('|').map(cell => cell.trim()).filter(Boolean)
            );
            
            elements.push(
              <ComparisonTable
                key={i}
                title={title}
                headers={headers}
                rows={rows}
              />
            );
            i++; // Skip the next block since it's the table data
            continue;
          }
        }
      }
      
      // Example/Note boxes: [EXAMPLE] or [NOTE] (now handles multi-line content)
      if (block.startsWith('[EXAMPLE]') || block.startsWith('[NOTE]')) {
        const type = block.startsWith('[EXAMPLE]') ? 'example' : 'note';
        const innerContent = block.replace(/\[(EXAMPLE|NOTE)\]\s*/, '').trim();
        
        // Split by newlines and parse each line
        const lines = innerContent.split('\n').map(line => line.trim()).filter(Boolean);
        
        elements.push(
          <Card key={i} className={type === 'example' ? 'bg-primary/5 border-primary/20' : 'bg-accent/5 border-accent/20'}>
            <CardContent className="p-3 sm:p-4">
              <div className="flex gap-2 sm:gap-3">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-2 text-sm sm:text-base">
                  {lines.map((line, idx) => (
                    <p key={idx}>{parseParagraph(line)}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );
        continue;
      }
      
      // Headings
      if (block.startsWith('# ')) {
        elements.push(
          <h3 key={i} className="text-xl font-bold mt-6 mb-3">
            {block.substring(2)}
          </h3>
        );
        continue;
      }
      
      if (block.startsWith('## ')) {
        elements.push(
          <h4 key={i} className="text-lg font-semibold mt-4 mb-2">
            {block.substring(3)}
          </h4>
        );
        continue;
      }
      
      if (block.startsWith('### ')) {
        elements.push(
          <h5 key={i} className="text-base font-semibold mt-3 mb-2">
            {block.substring(4)}
          </h5>
        );
        continue;
      }
      
      // Bullet lists with nesting support
      if (block.startsWith('- ') || block.includes('\n- ')) {
        const listItems = parseNestedList(block);
        elements.push(
          <div key={i} className="my-4">
            {listItems}
          </div>
        );
        continue;
      }
      
      // Regular paragraphs with bold support
      if (block.trim()) {
        elements.push(
          <p key={i} className="mb-4 leading-relaxed">
            {parseParagraph(block)}
          </p>
        );
      }
    }
    
    return elements;
  };

  // Parse paragraph with bold text and image support
  const parseParagraph = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    let keyCounter = 0;
    
    // First check if this is an image line
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/;
    const imageMatch = text.match(imageRegex);
    
    if (imageMatch) {
      const [fullMatch, altText, imageSrc] = imageMatch;
      const beforeImage = text.substring(0, imageMatch.index);
      const afterImage = text.substring((imageMatch.index || 0) + fullMatch.length);
      
      if (beforeImage) parts.push(beforeImage);
      
      parts.push(
        <img
          key={`img-${keyCounter++}`}
          src={imageSrc}
          alt={altText}
          className="w-full h-auto max-w-full mx-auto my-3 sm:my-4 md:my-6 rounded-lg shadow-md object-contain"
        />
      );
      
      if (afterImage) parts.push(afterImage);
      return parts;
    }
    
    // Otherwise parse bold text
    const boldRegex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;
    
    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={`bold-${keyCounter++}`} className="font-semibold text-foreground">
          {match[1]}
        </strong>
      );
      lastIndex = boldRegex.lastIndex;
    }
    
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : [text];
  };

  // Parse nested bullet lists
  const parseNestedList = (text: string): JSX.Element => {
    const lines = text.split('\n');
    const items: JSX.Element[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const indent = line.match(/^\s*/)?.[0].length || 0;
      const content = line.replace(/^[\s-]*/, '').trim();
      
      if (!content) continue;
      
      const paddingLeft = indent > 0 ? `${indent * 0.75}rem` : '1rem';
      
      items.push(
        <li key={i} style={{ paddingLeft }} className="mb-2 text-sm sm:text-base">
          {parseParagraph(content)}
        </li>
      );
    }
    
    return <ul className="list-disc space-y-1">{items}</ul>;
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="container max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto">
            <Button variant="ghost" size="icon" onClick={onClose} className="mt-1">
              <X className="h-5 w-5" />
            </Button>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold break-words">{lesson.title}</h2>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <Badge variant="secondary" className="gap-1 text-xs">
                  <Clock className="h-3 w-3" />
                  {lesson.duration} min
                </Badge>
                {isCompleted && (
                  <Badge variant="default" className="gap-1 text-xs">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </Badge>
                )}
                {isFirstLesson && (
                  <Badge variant="outline" className="text-xs">Free Lesson</Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {!canAccess ? (
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Enroll to Unlock This Lesson</h3>
              <p className="text-muted-foreground mb-4">
                This lesson is part of the full course. Enroll now to get access to all lessons and content.
              </p>
              <Button onClick={onClose}>Return to Course Overview</Button>
            </CardContent>
          </Card>
        ) : (
          <ScrollArea className="h-[calc(100vh-140px)] sm:h-[calc(100vh-180px)] md:h-[calc(100vh-200px)]">
            <div className="space-y-4 sm:space-y-6 pr-2 sm:pr-4">
              {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Learning Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {lesson.learningObjectives.map((objective, index) => (
                        <li key={index} className="flex gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {lesson.content && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Lesson Content
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="prose prose-sm sm:prose md:prose-lg prose-slate dark:prose-invert max-w-none prose-img:max-w-full prose-img:h-auto">
                      {parseContent(lesson.content)}
                    </div>
                  </CardContent>
                </Card>
              )}

              {lesson.keyTerms && Object.keys(lesson.keyTerms).length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Key Terms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(lesson.keyTerms).map(([term, definition], index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-primary mb-1">{term}</h4>
                          <p className="text-muted-foreground">{definition}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {lesson.examples && lesson.examples.length > 0 && (
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Examples
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {lesson.examples.map((example, index) => (
                        <div key={index} className="p-4 bg-background rounded-lg border">
                          <p className="leading-relaxed">{example}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Separator />

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between items-stretch sm:items-center pt-4">
                <Button
                  variant="outline"
                  onClick={() => onNavigate('prev')}
                  disabled={currentIndex === 0}
                  className="w-full sm:w-auto"
                  size="lg"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Previous Lesson</span>
                  <span className="sm:hidden">Previous</span>
                </Button>

                {!isCompleted && (
                  <Button onClick={handleComplete} className="gap-2 w-full sm:w-auto" size="lg">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Mark as Complete</span>
                    <span className="sm:hidden">Complete</span>
                  </Button>
                )}

                <Button
                  variant="outline"
                  onClick={() => onNavigate('next')}
                  disabled={currentIndex === allLessons.length - 1}
                  className="w-full sm:w-auto"
                  size="lg"
                >
                  <span className="hidden sm:inline">{isNextLessonQuiz ? 'Take the Quiz' : 'Next Lesson'}</span>
                  <span className="sm:hidden">{isNextLessonQuiz ? 'Quiz' : 'Next'}</span>
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};
