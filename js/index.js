const d = document;
const hamburger = d.querySelector('.hamburger');
const navMenu = d.querySelector('.nav-menu');
const main = d.querySelector('main');
const load = d.querySelector('.loader-wrapper');
const body = d.querySelector('body');

/* LOADER */

window.setTimeout(() => {
  body.classList.remove('preload');
  load.style.display = 'none';
}, 100);

/* HAMBURGER MENU */

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

d.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

main.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
});

/* MANUAL SWIPER-SLIDE */

var screenWidth = screen.width;
console.log(screenWidth);
if (screenWidth < 767) {
  var noSwiperInResponsive = document.getElementById('noSwiperInResponsive');
  noSwiperInResponsive.classList.remove('swiper-slide');
}
