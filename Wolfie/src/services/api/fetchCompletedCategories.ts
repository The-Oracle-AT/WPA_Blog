import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";

export async function fetchCompletedCategories(userId: string): Promise<any> {
    const querySnapshot = await getDocs(collection(db, "users", userId, "CompletedCategories"));
    const completedCatetories = querySnapshot.docs.map((doc) => doc.id);
    return completedCatetories;
}