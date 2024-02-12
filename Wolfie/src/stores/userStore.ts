import { writable } from "svelte/store";
interface User {
    name: string | undefined;
    email: string | undefined;
    UID: string | undefined;
};

export const userStore = writable({} as User);