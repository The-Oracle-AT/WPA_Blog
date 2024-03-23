import { writable } from "svelte/store";
const completedLessonsStore = writable(["lesson1", "lesson2", "lesson3"]);
const completedCategoriesStore = writable(["category1", "category2", "category3"]);
const favouriteCoursesStore = writable(["fav1", "fav2", "fav3"]);

// completed lessons store functions
function setCompletedLessonsStore(lessons:string[]) {
    completedLessonsStore.set(lessons);
}

function updateCompletedLessonsStore(lessonId:string) {
    completedLessonsStore.update((lessons) => {
        lessons.push(lessonId);
        return lessons;
    });

}

// completed categories store functions
function setCompletedCategoriesStore(categories:string[]) {
    completedCategoriesStore.set(categories);
}
function updateCompletedCategoriesStore(uid:string , categoryId:string) {
    completedCategoriesStore.update((categories) => {
        categories.push(categoryId);
        return categories;
    });
}
// favourites store functions
function updateFavouriteCoursesStore(courseId:string) {
    favouriteCoursesStore.update((courses) => {
        courses.push(courseId);
        return courses;
    });
}
function removeFavouriteCoursesStore(courseId:string) {
    favouriteCoursesStore.update((courses) => {
        return courses.filter((course) => course !== courseId);
    });
}
export {
    completedCategoriesStore, completedLessonsStore, favouriteCoursesStore, removeFavouriteCoursesStore, setCompletedCategoriesStore, setCompletedLessonsStore, updateCompletedCategoriesStore, updateCompletedLessonsStore, updateFavouriteCoursesStore
};

