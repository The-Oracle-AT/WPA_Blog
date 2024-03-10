<script>
    export let title = "Title";
    export let content = "Content";
    export let border = "1px solid #000";
    export let backgroundColor = "#fff";
    
    $: console.log(title);
    $: console.log(content);
</script>

<div class="card" style="--borderSettings: {border}; --backgroundSettings: {backgroundColor} ">
    <p>{title}</p>
    <slot></slot>
</div>

<style>
    .card {
        border: var(--borderSettings);
        background: var(--backgroundSettings);
        padding: 1rem;
        margin: 1rem;
        border-radius: 1rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>