import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Trophy, BookOpen, ArrowRight, RotateCcw, Award, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { getRandomQuestions, QuizQuestion } from "@/data/quiz-data";
import QuizRegistration, { UserRegistration } from "@/components/QuizRegistration";

const Quiz = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState<UserRegistration | null>(null);
  const [quizQuestions] = useState<QuizQuestion[]>(() => getRandomQuestions(10));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleRegistrationComplete = (userInfo: UserRegistration) => {
    setUserData(userInfo);
    setIsRegistered(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(false);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = { ...answers, [currentQuestion]: selectedAnswer };
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion === totalQuestions - 1) {
      // Quiz completed - calculate score
      const correctAnswers = Object.entries(answers).filter(([questionIndex, answer]) => {
        return quizQuestions[parseInt(questionIndex)].correctAnswer === answer;
      }).length;
      
      setScore(correctAnswers);
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizCompleted(false);
    setScore(0);
    setIsRegistered(false);
    setUserData(null);
  };

  const getScorePercentage = () => {
    return Math.round((score / totalQuestions) * 100);
  };

  const isPassing = () => {
    return getScorePercentage() >= 80;
  };

  const getScoreColor = () => {
    const percentage = getScorePercentage();
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-primary";
    return "text-destructive";
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 80) return "Excellent Work!";
    if (percentage >= 60) return "Good Progress!";
    return "Keep Learning!";
  };

  const getCourseRecommendations = () => {
    const percentage = getScorePercentage();
    if (percentage >= 80) {
      return {
        category: "Advanced",
        courses: ["Advanced Trading Strategies", "Options Trading Fundamentals"]
      };
    } else if (percentage >= 60) {
      return {
        category: "Intermediate", 
        courses: ["Risk Management Strategies", "Chart Pattern Recognition"]
      };
    } else {
      return {
        category: "Beginner",
        courses: ["Forex Trading Fundamentals", "MT5 Platform Mastery"]
      };
    }
  };

  if (!isRegistered) {
    return <QuizRegistration onRegistrationComplete={handleRegistrationComplete} />;
  }

  if (quizCompleted) {
    const recommendations = getCourseRecommendations();
    const percentage = getScorePercentage();
    
    return (
      <div className="min-h-screen bg-secondary/20 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-background border-0 shadow-finance-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-accent-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">Quiz Complete!</CardTitle>
                <p className="text-muted-foreground">Here are your results:</p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="mb-8">
                  <div className={cn("text-6xl font-bold mb-2", getScoreColor())}>
                    {score}/{totalQuestions}
                  </div>
                  <div className={cn("text-2xl font-semibold mb-2", getScoreColor())}>
                    {percentage}%
                  </div>
                  <p className={cn("text-xl font-semibold mb-4", getScoreColor())}>
                    {getScoreMessage()}
                  </p>
                </div>

                {/* Certificate Message */}
                {isPassing() && (
                  <div className="mb-8 p-6 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="h-6 w-6 text-success" />
                      <span className="font-semibold text-lg text-success">
                        Congratulations! 🎉
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-left">
                      <p className="text-foreground text-lg">
                        Your score is <strong>{percentage}%</strong> and you have successfully earned a certificate for <strong>Financial Literacy Assessment</strong>.
                      </p>
                      <p className="text-muted-foreground">
                        Please check your registered email to receive your certificate.
                      </p>
                    </div>
                  </div>
                )}

                {/* Course Recommendations */}
                <div className="bg-gradient-card rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Recommended Learning Path: {recommendations.category}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Based on your results, we recommend starting with {recommendations.category.toLowerCase()} level courses.
                  </p>
                  
                  <div className="grid gap-3">
                    <h4 className="font-medium text-foreground">Suggested Courses:</h4>
                    {recommendations.courses.map((courseName) => (
                      <div key={courseName} className="flex items-center justify-between p-3 bg-background rounded-lg">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <span className="font-medium">{courseName}</span>
                        </div>
                        <Badge variant="secondary">{recommendations.category}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {isPassing() ? (
                    <Button 
                      asChild 
                      size="lg" 
                      variant="gradient-cta"
                      className="flex-1"
                    >
                      <Link to="/courses/getting-started-financial-markets">
                        Take me to the next course
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <Link to="/courses">
                        Browse {recommendations.category} Courses
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={resetQuiz}
                    className={isPassing() ? "flex-1" : ""}
                  >
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const hasAnswered = selectedAnswer !== null;

  return (
    <div className="min-h-screen bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Financial Literacy Quiz
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Test your trading knowledge and get personalized course recommendations.
            </p>
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            
            <Progress value={progress} className="w-full h-2" />
          </div>

          {/* Question Card */}
          <Card className="bg-background border-0 shadow-finance-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {question.category}
                </Badge>
              </div>
              <CardTitle className="text-xl md:text-2xl leading-relaxed text-foreground">
                {question.question}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <RadioGroup
                value={selectedAnswer || ""}
                onValueChange={handleAnswerSelect}
                className="space-y-3"
              >
                {question.options.map((choice, index) => {
                  const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <RadioGroupItem 
                        value={optionLetter} 
                        id={`choice-${index}`}
                        disabled={showExplanation}
                      />
                      <Label 
                        htmlFor={`choice-${index}`}
                        className={cn(
                          "flex-1 p-4 rounded-lg border cursor-pointer transition-all",
                          selectedAnswer === optionLetter 
                            ? "border-primary bg-primary-lighter" 
                            : "border-border hover:border-primary/50",
                          showExplanation && selectedAnswer === optionLetter && isCorrect && "border-success bg-success-light",
                          showExplanation && selectedAnswer === optionLetter && !isCorrect && "border-destructive bg-destructive/10",
                          showExplanation && optionLetter === question.correctAnswer && selectedAnswer !== optionLetter && "border-success bg-success-light"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{optionLetter}. {choice}</span>
                          {showExplanation && (
                            <>
                              {optionLetter === question.correctAnswer && (
                                <CheckCircle className="h-5 w-5 text-success" />
                              )}
                              {selectedAnswer === optionLetter && selectedAnswer !== question.correctAnswer && (
                                <XCircle className="h-5 w-5 text-destructive" />
                              )}
                            </>
                          )}
                        </div>
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>

              {/* Explanation */}
              {showExplanation && (
                <div className={cn(
                  "mt-6 p-4 rounded-lg border-l-4",
                  isCorrect 
                    ? "bg-success-light border-l-success" 
                    : "bg-destructive/10 border-l-destructive"
                )}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <span className={cn(
                      "font-semibold",
                      isCorrect ? "text-success" : "text-destructive"
                    )}>
                      {isCorrect ? "Correct!" : `Incorrect - The correct answer is ${question.correctAnswer}`}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    The correct answer helps you understand key financial concepts that are essential for successful trading.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between mt-8">
                <div className="text-sm text-muted-foreground">
                  Progress: {Object.keys(answers).length}/{totalQuestions} answered
                </div>
                
                <div className="flex gap-3">
                  {!showExplanation && (
                  <Button 
                    onClick={submitAnswer}
                    disabled={!hasAnswered}
                    variant="gradient"
                  >
                    Submit Answer
                  </Button>
                  )}
                  
                  {showExplanation && (
                  <Button 
                    onClick={nextQuestion}
                    variant="gradient"
                  >
                    {currentQuestion === totalQuestions - 1 ? "See Results" : "Next Question"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;