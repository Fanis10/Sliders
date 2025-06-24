function slider() {
  var swiper = new Swiper('.slider .mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
      navigation: {
          nextEl: ".slider .swiper-button-next",
          prevEl: ".slider .swiper-button-prev",
      },
      pagination: {
          el: ".slider .swiper-pagination",
          clickable: true,
      },
  })
}

slider();
