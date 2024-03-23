<script lang="ts">
    import { onMount } from "svelte";
    import { fetchUserProgressData } from "../../firebase/database/fetchUserProgressData";
    import { fetchCompletedLessons } from "../../services/api/fetchCompletedLessons";
    import { completedLessonsStore } from "../../stores/coursesStores";
    import Card from "../svelte/Card.svelte";
        
    interface User {
        id: string;
        email: string;
        username: string;
        points: number;
        rank: string;
        badges: string[];

  }
    

    export let uid: string;
    let progressData: User = {
        id: "",
        email: "",
        username: "",
        points: 0,
        rank: "",
        badges: []
    }; 
    let completedLessons:any[] = [];
    let completedCategories:any[] = [];

    onMount(async () => {
        progressData = await fetchUserProgressData(uid);
        completedLessons = await fetchCompletedLessons(uid);
        completedLessonsStore.update((entries) => entries = completedLessons);
    });
    completedLessonsStore.subscribe((value) => {
        completedCategories = value;
    });
    

</script>

<div class="dashboard">
    <div class="dashboard-content">
        { completedLessons }
        { completedCategories }
        <div class="progress">
            <Card title="Progress">
                <p>Completed lessons indicator</p>
                <p>In progess lessons</p>
            </Card>
        </div>
        <div class="points">
            <Card title="points">
                <span>{progressData.points }</span>
            </Card>
        </div>
        <div class="tasks">
            <Card title="Points">
                <p>Weekly points graph</p>
            </Card>
        </div>
        <!-- <div class="calendar">
            <Card title="Calendar">
                <p>Calendar content goes here</p>
            </Card>
        </div> -->
    </div>

</div>


<style lang="scss">
    .dashboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        :h1 {
            align-self: flex-start;
        }
    }

    @media (min-width: 768px) {
        .dashboard {
            padding: 2rem;
        }
        .dashboard-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
    }
    }

    



</style>