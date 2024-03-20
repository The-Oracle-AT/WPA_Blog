// Fetch user data from the database
import { doc, getDoc } from "firebase/firestore";
import { db } from "../client";
import type { User } from "./schema";

export async function fetchUserProgressData(userId: string): Promise<User> {
  const userRef = doc(db, "users", userId);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    console.log("User data:", userDoc.data());
    return userDoc.data() as User;
  }

  throw new Error("User not found");
}