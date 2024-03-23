import { writable } from "svelte/store";
export let globalState = writable({ theme: "dark", language: "en" });