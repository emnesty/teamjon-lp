AOS.init({
  duration: 800,
  once: true,
})

var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  spaceBetween: 32,
  pagination: {
    el: ".s-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
