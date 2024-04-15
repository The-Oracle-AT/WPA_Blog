export function appendItemToLocalStorage(key: string, newItem: string): void {
    const existingCacheString = localStorage.getItem(key)
    let existingCache: any[] = [];
    if(existingCacheString){
      existingCache = JSON.parse(existingCacheString)
    }
    existingCache.push(newItem)
    const cacheUpdate = JSON.stringify(existingCache);
    localStorage.setItem(key, cacheUpdate)
    console.log("Updated cache")
}