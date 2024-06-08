<script>
    export let date;
  </script>
  
  <time datetime={date.toISOString()}>
    {date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}
  </time>
  