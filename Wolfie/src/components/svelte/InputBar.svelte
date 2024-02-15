<script>
    export let text = "";
  
    $: console.log(text);
  </script>
  <label>
    {text}
    <input type="text" bind:value={text} />
</label>