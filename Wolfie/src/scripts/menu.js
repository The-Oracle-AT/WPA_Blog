
document.getElementById('hamburger-icon').addEventListener('click', () => {
  console.log('Clicked hamburger icon')
  document.getElementById('topnav').classList.toggle('responsive');
  document.getElementById('hamburger').classList.toggle('open');
});