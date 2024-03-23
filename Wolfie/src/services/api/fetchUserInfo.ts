import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../firebase/server";

export async function fetchUserInfo(userId: string): Promise<any>{
    const db = getFirestore(app);
    const usersRef = db.collection("users");
    const userSnapshot = await usersRef.doc(userId).get();
    return userSnapshot


}