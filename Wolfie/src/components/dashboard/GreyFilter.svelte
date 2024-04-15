<script lang="ts">
    import { onMount } from 'svelte';
    import { auth } from '../../firebase/client';
    import { fetchCompletedLessons } from '../../services/api/fetchCompletedLessons';
    import { completedLessonsStore, setCompletedLessonsStore } from '../../stores/coursesStores';
    let completedLessons: string[] = [];
    export let uid: string = '';
    export let currentLessonTitle : string = '';

    onMount(async () => {
        const obj = await fetchCompletedLessons(uid);
        setCompletedLessonsStore(obj);
        console.log("current user," ,auth.currentUser)
        //console.log("obj", obj);
    });
    completedLessonsStore.subscribe((value) => {
        completedLessons = value;
    });

    export let isCompleted = false;
    $: isCompleted = completedLessons.includes(currentLessonTitle);
</script>

<span class:isCompleted class="isCompleted">
    {#if isCompleted}
    <p>Revisit</p>
    {/if}
    <slot class="slot"></slot>
</span>

<style>
    .isCompleted .slot {
        filter: grayscale(30%);
        position: relative;
        top: 2rem;
        
        
    }
    p {
        transform: translate(0rem, -.64rem);
        position: fixed;
        filter: grayscale(0%);
        color: white;
        font-size: x-small;
        background-color: yellowgreen;
        width: fit-content;
        padding-left: .5rem;
        padding-right: .5rem;

        border-top-left-radius: .5rem;
        border-bottom-right-radius: .5rem;
        
    }
</style>