export type CourseCategory = 'Beginner' | 'Intermediate' | 'Advanced';
export type CourseTopic = 'MT5' | 'Fundamental' | 'Technical' | 'Risk Management' | 'Psychology';
export type LessonType = 'video' | 'article' | 'quiz';

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  type: LessonType;
  duration: number; // in minutes
  videoUrl?: string;
  transcript?: string;
  content?: string; // Full lesson content
  learningObjectives?: string[]; // Key takeaways
  keyTerms?: Record<string, string>; // Important definitions
  examples?: string[]; // Practical examples
  resources: string[];
  order: number;
  isAssessment: boolean;
  completed?: boolean;
}

export interface SimplifiedLesson {
  id: string;
  title: string;
  type: LessonType;
  duration: number;
  completed: boolean;
  isFree?: boolean; // Mark the first lesson as free
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CourseCategory;
  topics: CourseTopic[];
  summary: string;
  outcomes: string[];
  duration: number; // total minutes
  lessonsCount: number;
  thumbnail: string;
  featured: boolean;
  instructor: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  rating: number;
  students: number;
  progress?: number; // 0-100
  lessons?: SimplifiedLesson[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  topicTag: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  recommendationMapping: Record<string, { category: CourseCategory; courseSlugs: string[] }>;
}

export interface Webinar {
  id: string;
  title: string;
  dateTime: string; // ISO format
  timezone: string;
  speakers: string[];
  description: string;
  registerUrl?: string;
  replayUrl?: string;
  tags: string[];
  thumbnail: string;
  isUpcoming: boolean;
}