import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";

export async function fetchCompletedLessons(userId: string): Promise<any> {
  const querySnapshot = await getDocs(collection(db, "users", userId, "CompletedLessons"));
  const completedLessons = querySnapshot.docs.map((doc) => doc.id);
  console.log("Completed lessons:", completedLessons);

  return completedLessons;
}

