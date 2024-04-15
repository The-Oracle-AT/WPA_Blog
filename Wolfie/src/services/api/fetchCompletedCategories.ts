import { fetchCompletedCategoriesFromServer } from "./fetchDataFromServer";

export async function fetchCompletedCategories(userId: string): Promise<any> {
    //Try fetching from local storage first
    let data;
    const cachedData = localStorage.getItem(`CompletedCategories_${userId}`);
    if(cachedData && cachedData.length !== 0 ){
        console.log(`Accessed from categories local storage: ${cachedData}`)
        return JSON.parse(cachedData)
    }
    const completedCategories = await fetchCompletedCategoriesFromServer(userId)

    // store in local storage
    localStorage.setItem(`CompletedCategories_${userId}`, JSON.stringify(completedCategories))
    return completedCategories;
}