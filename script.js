window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar-scroll");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const mySwiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    loop: true,
    draggable: true,
    snapOnRelease: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  effect: "slide",

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
  },
});
