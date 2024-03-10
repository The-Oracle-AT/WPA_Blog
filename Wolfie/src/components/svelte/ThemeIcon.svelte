<script>
    let isDark = false;
    console.log('isDark', isDark);
  
    const switchTheme = () => {
      isDark = !isDark;
      if (isDark) {
        document.body.classList.toggle('dark-theme', isDark);
      } else {
        document.body.classList.toggle('light-theme', !isDark);
      }
      
      
    };
  </script>
  
  <button on:click={switchTheme}>
    Switch to {isDark ? 'light' : 'dark'} theme
  </button>