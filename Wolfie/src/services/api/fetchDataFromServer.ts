import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";

export async function fetchCompletedCategoriesFromServer(userId: string): Promise<any> {

    // Fetch data from firebase
    const querySnapshot = await getDocs(collection(db, "users", userId, "CompletedCategories"));
    const completedCategories = querySnapshot.docs.map((doc) => doc.id);
    console.log(`Server response, completed Categories: ${completedCategories}`)
    return completedCategories;
}

export async function fetchCompletedLessonsFromServer(userId: string): Promise<any> {
    const querySnapshot = await getDocs(collection(db, "users", userId, "CompletedLessons"));
    const completedLessons = querySnapshot.docs.map((doc) => doc.id);
    console.log("Server response. Completed lessons:", completedLessons);
    return completedLessons;
  }

export async function synchronizeData(userId: string): Promise<void>{
    // Lessons
    const serverDataLessons = await fetchCompletedLessonsFromServer(userId)
    const localDataLessons = localStorage.getItem(`CompletedLessons_${userId}`)

    let localData1: string[] = []

    if(localDataLessons) {
        localData1= JSON.parse(localDataLessons)

        if(JSON.stringify(serverDataLessons) !== JSON.stringify(localData1)) {
            localStorage.setItem(`CompletedLessons_${userId}`, JSON.stringify(serverDataLessons))
        }
    }
    
    // Categories
    const serverDataCategories = await fetchCompletedCategoriesFromServer(userId)
    const localDataCategories = localStorage.getItem(`CompletedCategories_${userId}`)

    let localData2: string[] = []

    if(localDataCategories){
        localData2 = JSON.parse(localDataCategories)

        if(JSON.stringify(serverDataCategories) !== JSON.stringify(localData2)) {
            localStorage.setItem(`CompletedCategories_${userId}`, JSON.stringify(serverDataCategories))
        }
    }
    console.log('Data synchorized')

}
