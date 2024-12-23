const menuBtn = document.querySelector('.menu_btn');
const hamBurger = document.querySelector('.menu_btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu_nav');
const navItem = document.querySelectorAll('.menu_nav_item');
const NavMenuItemsAnchorList = document.querySelectorAll('#nav .menu_nav .menu_nav_item a')

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

//Add Event listener on all nav anchor links
NavMenuItemsAnchorList.forEach((anchoreLink) => {
  anchoreLink.addEventListener('click', handleSectionScroll)
})

//Check if user is in mobile view, if yes then call userScrollEnded function to close hamburger menu
function handleSectionScroll(){
  if(isMobileView(768)){
    // console.debug('Section scroll active in mobile');
  toggleMenu()
    // document.addEventListener('scrollend', userScrollEnded)
  }
}

//Function to check if browsers innerWidth is less than given value(e.g. 768) and return true/false
function isMobileView(value){
  let browserWidth = window.innerWidth
  if(browserWidth < value){
    return true
  }else {
    return false
  }
}

//Function called after scrollend event to close hamburger menu
//Not in use as current scroll and hamburger close experience feels better
function userScrollEnded(){
  console.debug(typeof(window.onscrollend) !== undefined);
  // toggleMenu()
  document.removeEventListener('scrollend', userScrollEnded);
}