const body = document.getElementById('html_body')
const themeButton = document.getElementById('theme_button')


themeButton.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
})