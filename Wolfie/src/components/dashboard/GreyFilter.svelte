<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchCompletedLessons } from '../../services/api/fetchCompletedLessons';
    import { completedLessonsStore, setCompletedLessonsStore } from '../../stores/coursesStores';
    let completedLessons: string[] = [];
    
    export let uid: string = '';
    export let currentLessonTitle : string = '';

    onMount(async () => {
        const obj = await fetchCompletedLessons(uid);
        setCompletedLessonsStore(obj);
        console.log("obj", obj);
    });
    completedLessonsStore.subscribe((value) => {
        completedLessons = value;
    });

    export let isCompleted = false;
    $: isCompleted = completedLessons.includes(currentLessonTitle);
</script>

<span class:isCompleted class="isCompleted">
    <slot></slot>
</span>

<style>
    .isCompleted {
        filter: grayscale(100%);
    }
</style>