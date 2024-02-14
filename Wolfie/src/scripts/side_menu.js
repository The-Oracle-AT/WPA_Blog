const arrow_icon = document.getElementById('arrow-icon');
arrow_icon.addEventListener('click', () => {
  
    document.getElementById('sidenav').classList.toggle('responsive');
    document.getElementById('arrow').classList.toggle('open');
  });