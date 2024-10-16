const menuBtn = document.querySelector('.menu_btn');
const hamBurger = document.querySelector('.menu_btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu_nav');
const navItem = document.querySelectorAll('.menu_nav_item');

let showMenu = false;
let isAnimating = false

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(isAnimating) return;
  isAnimating = true
  if (!showMenu) {
    hamBurger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItem.forEach((item) => item.classList.add('open'));

    showMenu = true;
  } else {
    navItem.forEach((item) => item.classList.remove('open'));
    setTimeout(() => {
      hamBurger.classList.remove('open');
      nav.classList.remove('open');
      menuNav.classList.remove('open');
      showMenu = false;
    }, 1000);

  }

  // Reset after transition completes
  setTimeout(() => {
    isAnimating = false;
  }, 1200);  // Duration slightly longer than the animation (0.3s)
}
