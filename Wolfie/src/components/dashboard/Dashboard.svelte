<script>
    import Card from "../svelte/Card.svelte";

</script>

<div class="dashboard">
    <div class="dashboard-content">
        <div class="progress">
            <Card title="Progress">
                <p>Progress content goes here</p>
            </Card>
        </div>
        <div class="achievements">
            <Card title="Achievements">
                <p>Goals content goes here</p>
            </Card>
        </div>
        <div class="tasks">
            <Card title="Tasks">
                <p>Tasks content goes here</p>
            </Card>
        </div>
        <div class="calendar">
            <Card title="Calendar">
                <p>Calendar content goes here</p>
            </Card>
        </div>
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