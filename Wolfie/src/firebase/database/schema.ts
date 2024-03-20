export interface User {
    id: string;
    email: string;
    username: string;
    points: number;
    rank: string;
    badges: string[];

  }
  
export interface Lesson {
    id: string;
    title: string;
    category: string;
    points: number;
  }
  
export interface Category {
    id: string;
    name: string;
    totalCompletedLessons: number;
  }
  
export interface Progress {
    id: string;
    userId: string;
    lessonId: string;
    completed: boolean;
  }