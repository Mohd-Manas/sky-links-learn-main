import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UnifiedEnrollmentForm } from "@/components/UnifiedEnrollmentForm";
import { LessonContent } from "@/components/LessonContent";
import { useEnrollment } from "@/hooks/useEnrollment";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { courses } from "@/data/courses";
import { course1Lessons } from "@/data/course1-lessons";
import { course2Lessons } from "@/data/course2-lessons";
import { course3Lessons } from "@/data/course3-lessons";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  FileText, 
  Award, 
  Target,
  CheckCircle,
  Circle,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);
  const { isEnrolled } = useEnrollment();
  const { progress, isLessonCompleted, markLessonComplete } = useCourseProgress(course?.id || '');
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<typeof course1Lessons[0] | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const detailedLessons = 
    course?.id === '1' ? course1Lessons :
    course?.id === '2' ? course2Lessons :
    course?.id === '3' ? course3Lessons :
    [];
  
  const handleLessonClick = (lessonId: string, index: number) => {
    const lesson = detailedLessons.find(l => l.id === lessonId);
    if (lesson) {
      setSelectedLesson(lesson);
      setCurrentLessonIndex(index);
    }
  };

  const handleLessonComplete = () => {
    if (selectedLesson) {
      markLessonComplete(selectedLesson.id, detailedLessons.length);
    }
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' ? currentLessonIndex - 1 : currentLessonIndex + 1;
    if (newIndex >= 0 && newIndex < detailedLessons.length) {
      setSelectedLesson(detailedLessons[newIndex]);
      setCurrentLessonIndex(newIndex);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course not found</h1>
          <Button asChild variant="outline">
            <Link to="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const lessons = course.lessons || [];
  const completedLessons = lessons.filter(l => l.completed).length;
  const progressPercentage = lessons.length > 0 ? (completedLessons / lessons.length) * 100 : 0;

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return "bg-success text-success-foreground";
    if (difficulty <= 3) return "bg-primary text-primary-foreground";
    return "bg-accent text-accent-foreground";
  };

  const getDifficultyText = (difficulty: number) => {
    if (difficulty === 1) return "Very Easy";
    if (difficulty === 2) return "Easy";
    if (difficulty === 3) return "Medium";
    if (difficulty === 4) return "Hard";
    return "Very Hard";
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video": return FileText;
      case "article": return BookOpen;
      case "quiz": return Award;
      default: return BookOpen;
    }
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case "video": return "bg-primary/10 text-primary";
      case "article": return "bg-success/10 text-success";
      case "quiz": return "bg-accent/20 text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const isLessonAccessible = (lessonIndex: number) => {
    // First lesson is always free as a preview
    if (lessonIndex === 0) return true;
    // All other lessons require enrollment
    return isEnrolled;
  };

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <Card className="bg-background border-0 shadow-finance-md">
              <CardContent className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{course.category}</Badge>
                    {course.featured && (
                      <Badge variant="outline" className="border-accent text-accent">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {course.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {course.summary}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{Math.round(course.duration / 60)} hours total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessonsCount} lessons</span>
                  </div>
                </div>

                {/* Progress */}
                {isEnrolled && progressPercentage > 0 && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-foreground">Your Progress</span>
                      <span className="text-muted-foreground">
                        {completedLessons}/{lessons.length} lessons completed
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                )}

              </CardContent>
            </Card>

            {/* Course Outcomes */}
            <Card className="bg-background border-0 shadow-finance-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Curriculum */}
            <Card className="bg-background border-0 shadow-finance-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Course Curriculum
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {lessons.length} lessons • {Math.round(course.duration / 60)} hours total length
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lessons.map((lesson, index) => {
                    const IconComponent = getLessonIcon(lesson.type);
                    const accessible = isLessonAccessible(index);
                    
                    return (
                      <div
                        key={lesson.id}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-lg border border-border transition-colors",
                          accessible ? "hover:bg-card-hover cursor-pointer" : "opacity-60"
                        )}
                        onClick={() => accessible && detailedLessons.length > 0 && handleLessonClick(`c${course.id}-l${index + 1}`, index)}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className={cn("p-1.5 rounded", getLessonTypeColor(lesson.type))}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-foreground">{lesson.title}</h4>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{lesson.duration} min</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {!accessible && (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          )}
                          {accessible && lesson.completed && (
                            <CheckCircle className="h-5 w-5 text-success" />
                          )}
                          {accessible && !lesson.completed && (
                            <Circle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Stats */}
            <Card className="bg-background border-0 shadow-finance-sm">
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Skill Level:</span>
                  <span className="font-medium">{course.category}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Students:</span>
                  <span className="font-medium">{course.students.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{Math.round(course.duration / 60)}h {course.duration % 60}m</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lessons:</span>
                  <span className="font-medium">{course.lessonsCount}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Courses */}
            <Card className="bg-background border-0 shadow-finance-sm">
              <CardHeader>
                <CardTitle>Related Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses
                  .filter(c => c.id !== course.id && c.category === course.category)
                  .slice(0, 3)
                  .map((relatedCourse) => (
                    <Link 
                      key={relatedCourse.id}
                      to={`/courses/${relatedCourse.slug}`}
                      className="block p-3 rounded-lg border border-border hover:bg-card-hover transition-colors"
                    >
                      <h4 className="font-medium text-foreground mb-1 line-clamp-2">
                        {relatedCourse.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span>{relatedCourse.rating}</span>
                        <span>•</span>
                        <span>{Math.round(relatedCourse.duration / 60)}h</span>
                      </div>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <UnifiedEnrollmentForm
        isOpen={showEnrollmentForm}
        onClose={() => setShowEnrollmentForm(false)}
        title={course.title}
        type="course"
      />

      {selectedLesson && (
        <LessonContent
          lesson={selectedLesson}
          allLessons={detailedLessons}
          currentIndex={currentLessonIndex}
          isCompleted={isLessonCompleted(selectedLesson.id)}
          onClose={() => setSelectedLesson(null)}
          onComplete={handleLessonComplete}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
};

export default CourseDetail;
