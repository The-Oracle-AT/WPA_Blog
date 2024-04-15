import { fetchCompletedLessonsFromServer } from "./fetchDataFromServer";

export async function fetchCompletedLessons(userId: string): Promise<any> {
  const cachedData = localStorage.getItem(`CompletedLessons_${userId}`)

  if(cachedData && cachedData.length !== 0){
    console.log('Accessed Lessons from local', cachedData, cachedData.length)
    return JSON.parse(cachedData)
     
  }
  const completedLessons = await fetchCompletedLessonsFromServer(userId)
  // localStorage.setItem(`CompletedLessons_${userId}`, JSON.stringify(completedLessons))
  
  localStorage.setItem(`CompletedLessons_${userId}`, JSON.stringify(completedLessons))
  return completedLessons;
}

