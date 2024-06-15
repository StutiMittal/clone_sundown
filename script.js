const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function page3display() {
  var elemC = document.querySelector("#elem-container");
  var f = document.querySelector("#fixedimage");
  elemC.addEventListener("mouseenter", function () {
    f.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    f.style.display = "none";
  });
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      f.style.backgroundImage = `url(${image})`;
    });
  });
}
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}
function menuu() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#fullscr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;

      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}
page3display();
swiperAnimation();
menuu();

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}
loaderAnimation();
