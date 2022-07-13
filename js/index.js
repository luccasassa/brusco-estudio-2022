const d = document;
const hamburger = d.querySelector(".hamburger");
const navMenu = d.querySelector(".nav-menu");
const main = d.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

d.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

main.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});

window.addEventListener('scroll', function(e) {
  /*
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
  */
 window.scrollY({
  scrollY: 2000,
   behavior: 'smooth'
});
});

/*
*/
