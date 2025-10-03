import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizQuestion } from '@/data/quiz-data';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, Trophy, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { courses } from '@/data/courses';

interface CourseQuizProps {
  questions: QuizQuestion[];
  courseTitle: string;
  courseId: string;
  onComplete: () => void;
}

export const CourseQuiz = ({ questions, courseTitle, courseId, onComplete }: CourseQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    
    setIsAnswerSubmitted(true);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      onComplete();
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setIsAnswerSubmitted(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setQuizCompleted(false);
  };

  const getScoreFeedback = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
      return {
        title: 'Excellent Understanding! 🎉',
        message: 'You have demonstrated a strong grasp of the course material.',
        color: 'text-green-600'
      };
    } else if (percentage >= 50) {
      return {
        title: 'Good Foundation 👍',
        message: 'You have a solid understanding, but some review would be beneficial.',
        color: 'text-yellow-600'
      };
    } else {
      return {
        title: 'Additional Study Recommended 📚',
        message: 'Consider revisiting the course lessons before progressing.',
        color: 'text-red-600'
      };
    }
  };

  const getNextCourse = () => {
    // Extract numeric ID from courseId format (e.g., "course-1" -> "1")
    const numericId = courseId.replace('course-', '');
    const currentCourseIndex = courses.findIndex(c => c.id === numericId);
    if (currentCourseIndex !== -1 && currentCourseIndex < courses.length - 1) {
      return courses[currentCourseIndex + 1];
    }
    return null;
  };

  const isPassing = (score / questions.length) * 100 >= 80;

  if (quizCompleted) {
    const feedback = getScoreFeedback();
    const percentage = Math.round((score / questions.length) * 100);
    const nextCourse = getNextCourse();

    return (
      <div className="max-w-3xl mx-auto p-3 sm:p-4 md:p-6">
        <Card>
          <CardHeader className="text-center p-4 sm:p-6">
            <div className="flex justify-center mb-3 sm:mb-4">
              <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl">
              {isPassing ? "Congratulations! 🎉" : "Quiz Complete!"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            {isPassing ? (
              <>
                <div className="p-4 sm:p-6 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-success flex-shrink-0" />
                    <span className="font-semibold text-lg text-success">
                      Congratulations! 🎉
                    </span>
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <p className="text-foreground">
                      Your score is <strong>{percentage}%</strong> and you have successfully earned a certificate for <strong>{courseTitle}</strong>.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Please check your registered email to receive your certificate.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {nextCourse ? (
                    <Button asChild variant="gradient-cta" size="lg" className="flex-1">
                      <Link to={`/courses/${nextCourse.slug}`}>
                        Take me to the next course
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="gradient-cta" size="lg" className="flex-1">
                      <Link to="/courses">
                        Browse All Courses
                      </Link>
                    </Button>
                  )}
                  <Button onClick={handleRetakeQuiz} variant="outline" size="lg" className="flex-1">
                    Retake Quiz
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {score} / {questions.length}
                  </div>
                  <div className="text-lg sm:text-xl text-muted-foreground">
                    {percentage}% Correct
                  </div>
                </div>

                <div className={`text-center space-y-2 ${feedback.color}`}>
                  <h3 className="text-xl sm:text-2xl font-bold">{feedback.title}</h3>
                  <p className="text-base sm:text-lg">{feedback.message}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-center text-sm sm:text-base">Score Breakdown</h4>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">{score}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Correct</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-red-600">{questions.length - score}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Incorrect</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold">{questions.length}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button onClick={handleRetakeQuiz} variant="outline" size="lg" className="flex-1">
                    Retake Quiz
                  </Button>
                  <Button onClick={onComplete} variant="default" size="lg" className="flex-1">
                    Continue Learning
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base">
              {currentQuestionIndex + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{currentQuestion.category}</div>
              <CardTitle className="text-base sm:text-lg md:text-xl break-words">{currentQuestion.question}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          <RadioGroup
            value={selectedAnswer}
            onValueChange={setSelectedAnswer}
            disabled={isAnswerSubmitted}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrectOption = option === currentQuestion.correctAnswer;
              
              let borderColor = 'border-border';
              let bgColor = 'bg-card';
              
              if (isAnswerSubmitted) {
                if (isCorrectOption) {
                  borderColor = 'border-green-500';
                  bgColor = 'bg-green-50 dark:bg-green-950';
                } else if (isSelected && !isCorrect) {
                  borderColor = 'border-red-500';
                  bgColor = 'bg-red-50 dark:bg-red-950';
                }
              }

              return (
                <div
                  key={index}
                  className={`flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border-2 transition-all ${borderColor} ${bgColor}`}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} className="mt-0.5" />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer font-normal text-sm sm:text-base break-words"
                  >
                    {option}
                  </Label>
                  {isAnswerSubmitted && isCorrectOption && (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                </div>
              );
            })}
          </RadioGroup>

          {isAnswerSubmitted && (
            <div className={`p-3 sm:p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800' : 'bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800'}`}>
              <div className="flex items-start gap-2">
                <div className="font-semibold text-sm sm:text-base">
                  {isCorrect ? '✓ Correct!' : 'Explanation:'}
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm break-words">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            {!isAnswerSubmitted ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="flex-1"
                size="lg"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="flex-1" size="lg">
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
