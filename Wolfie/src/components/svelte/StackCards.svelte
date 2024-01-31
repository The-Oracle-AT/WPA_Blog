<script lang="ts">
  export let items: Array<{ title: string; link:string; description: string; }>;
</script>

<div class="stack-container">
  {#each items as item (item.title)}
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="item">
      <div class="card">
        <span>{item.title}</span>
        <p>{item.description}</p>
    </div>
    </a>
  {/each}
</div>