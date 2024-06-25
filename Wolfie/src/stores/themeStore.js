// src/stores/themeStore.js
import { writable } from 'svelte/store';

export const theme = writable('light'); // Default theme is light


// Function to toggle the theme
export const toggleTheme = () => {
    theme.update(current => (current === 'light' ? 'dark' : 'light'));
};
