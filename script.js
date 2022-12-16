const navline = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu')

navline.addEventListener('click', function() {
  navline.classList.toggle('nav-line-active');
  navmenu.classList.toggle('hidden')
})

window.onscroll = function() {
  const header = document.querySelector('header')
  const fixnav = header.offsetTop;

  if(window.pageYOffset > fixnav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}

