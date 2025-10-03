import { useState, useEffect } from 'react';

interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: string;
}

interface CourseProgress {
  [courseId: string]: {
    lessons: LessonProgress[];
    progress: number;
    lastAccessedAt: string;
  };
}

export const useCourseProgress = (courseId: string) => {
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [courseProgress, setCourseProgress] = useState<number>(0);

  useEffect(() => {
    loadProgress();
  }, [courseId]);

  const loadProgress = () => {
    const stored = localStorage.getItem('courseProgress');
    if (stored) {
      try {
        const data: CourseProgress = JSON.parse(stored);
        const courseData = data[courseId];
        if (courseData) {
          setProgress(courseData.lessons);
          setCourseProgress(courseData.progress);
        }
      } catch (error) {
        console.error('Error loading course progress:', error);
      }
    }
  };

  const markLessonComplete = (lessonId: string, totalLessons: number) => {
    const stored = localStorage.getItem('courseProgress');
    let allProgress: CourseProgress = stored ? JSON.parse(stored) : {};

    if (!allProgress[courseId]) {
      allProgress[courseId] = {
        lessons: [],
        progress: 0,
        lastAccessedAt: new Date().toISOString()
      };
    }

    const existingLesson = allProgress[courseId].lessons.find(l => l.lessonId === lessonId);
    if (!existingLesson) {
      allProgress[courseId].lessons.push({
        lessonId,
        completed: true,
        completedAt: new Date().toISOString()
      });
    } else {
      existingLesson.completed = true;
      existingLesson.completedAt = new Date().toISOString();
    }

    const completedCount = allProgress[courseId].lessons.filter(l => l.completed).length;
    allProgress[courseId].progress = Math.round((completedCount / totalLessons) * 100);
    allProgress[courseId].lastAccessedAt = new Date().toISOString();

    localStorage.setItem('courseProgress', JSON.stringify(allProgress));
    setProgress(allProgress[courseId].lessons);
    setCourseProgress(allProgress[courseId].progress);
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return progress.some(l => l.lessonId === lessonId && l.completed);
  };

  return {
    progress: courseProgress,
    isLessonCompleted,
    markLessonComplete
  };
};
