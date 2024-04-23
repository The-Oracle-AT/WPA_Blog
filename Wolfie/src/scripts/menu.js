document.addEventListener('astro:page-load', () => {
  document.getElementById('hamburger-icon').addEventListener('click', () => {
    document.getElementById('topnav').classList.toggle('responsive');
    document.getElementById('hamburger').classList.toggle('open');
  });
});