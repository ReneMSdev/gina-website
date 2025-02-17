document.addEventListener('DOMContentLoaded', function () {
  const navIcon = document.getElementById('nav-icon3')
  const navbarNav = document.getElementById('navbarNav')

  navIcon.addEventListener('click', function () {
    navIcon.classList.toggle('open') // Animate hamburger
    navbarNav.classList.toggle('show') // Show/hide Bootstrap menu
  })
})
