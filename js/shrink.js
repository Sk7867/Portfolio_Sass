const navigation = document.getElementById('nav');
const navigation_link = document.getElementById('menu_nav_link');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navigation_link.style.padding = '0.6rem 0';
  } else {
    navigation_link.style.padding = '1.5rem 0';
  }
}
