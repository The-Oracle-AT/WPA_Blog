import { doc, getDoc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { appendItemToLocalStorage } from "../../services/api/appendItemToLocalStorage";
import { db } from "../client";
import type { Category, Lesson, User } from "./schema";

const blogPostId = 'Concentration'; // Replace with the title of your blog post

// Function to update user's progress
export async function updateUserProgress(userId: string, lessonId: string, user: User, lesson: Lesson, category: Category ): Promise<void> {
    // Check if the user already completed this lesson
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    const lessonProgressRef = doc(db, 'users', userId, 'CompletedLessons', lessonId);
    const lessonProgressDoc = await getDoc(lessonProgressRef);

    const categoryProgressRef = doc(db, 'users', userId, 'CompletedCategories', lesson.category);
    const categoryProgressDoc = await getDoc(categoryProgressRef);

    const categoryRef = doc(db, 'categories', lesson.category);
    const categoryDoc = await getDoc(categoryRef);

    const lessonRef = doc(db, 'lessons', lessonId);
    const lessonDoc = await getDoc(lessonRef);

    if (!userDoc.exists()) {
        // Todo; Check if user is logged in usng isLoggedIn function in astro render page
        // If not logged in, return
        // if logged in, create a new user document
        await setDoc(doc(db, 'users', userId), {
          points: 10,
          username: 'user.username',
          email: 'user.email',
          rank: 'Beginner',
          badges: ["Enrolled"]
        });
        await setDoc(categoryProgressRef, {
          completedLessonCount: 1,
        });
        await setDoc(lessonProgressRef, {
          timestamp: serverTimestamp(),
        });

        return;
    }
    // If user already completed lesson, return
    if (lessonProgressDoc.exists()) {
        return;
    }

    // If lesson not completed, create a new lesson document
    await setDoc(lessonProgressRef, {
      timestamp: serverTimestamp(),
    });
    // update user's points with lesson points and add 1 t lesson count
    await updateDoc(userRef, {
      points: increment(10),
    }); 
    // if category is completed, add 1 to category count
    if (categoryProgressDoc.exists()) {
      await updateDoc(categoryProgressRef, {
        completedLessonCount: increment(1),
      });
    } else {
      await setDoc(categoryProgressRef, {
        completedLessonCount: 1,
      });
    }

    // Append added lesson to local storage
    appendItemToLocalStorage(`CompletedLessons_${userId}`, lesson.title)
    // update user's points with lesson points and add 1 t lesson count


  }
