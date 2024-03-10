<!-- LessonTracker.svelte -->
<script lang="ts">
    import { updateUserProgress } from '../firebase/database/progressTracker';
    import type { Category, Lesson, User } from '../firebase/database/schema';

    export let userId:string;
    export let user: User;
    export let lesson: Lesson;
    export let category: Category;
  
    async function handleUpdateProgress() {
      try {
        await updateUserProgress(userId, lesson.id, user, lesson, category);
        console.log('Lesson progress updated');
      } catch (error) {
        console.error('Error updating lesson progress:', error);
      }
    }
</script>
<button on:click={handleUpdateProgress}>Update Lesson Progress</button>