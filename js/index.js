const d = document;
const hamburger = d.querySelector('.hamburger');
const navMenu = d.querySelector('.nav-menu');
const main = d.querySelector('main');

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

var screenWidth = screen.width;
console.log(screenWidth);
if (screenWidth < 767) {
  var noSwiperInResponsive = document.getElementById('noSwiperInResponsive');
  noSwiperInResponsive.classList.remove('swiper-slide');
}
