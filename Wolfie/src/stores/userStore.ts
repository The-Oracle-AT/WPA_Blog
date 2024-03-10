import { writable } from "svelte/store";
interface User {
    name: string | undefined;
    email: string | undefined;
    };
    

export let userStore = writable<User>({ name: "Lapain", email: "Emma@learnBetter.co.za" });