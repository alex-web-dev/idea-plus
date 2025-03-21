import Swiper from "swiper";
import { Navigation, Pagination, Controller, Thumbs } from "swiper/modules";

const $sliders = document.querySelectorAll(".slider");
$sliders.forEach(($slider) => {
  const $swiper = $slider.querySelector(".slider__main");
  const $prev = $slider.querySelector(".slider__btn-prev");
  const $next = $slider.querySelector(".slider__btn-next");
  const $pagination = $slider.querySelector(".slider__pagination");

  const $section = $slider.closest(".section");
  const $thumbsSlider = $section?.querySelector(".slider-thumbs__main");
  let thumbsSwiper = null;

  if ($thumbsSlider) {
    thumbsSwiper = new Swiper($thumbsSlider, {
      modules: [Thumbs],
      slidesPerView: 3,
      spaceBetween: 8,
      speed: 500,
    });
  }

  new Swiper($swiper, {
    modules: [Navigation, Pagination, Controller, Thumbs],
    slidesPerView: 1,
    spaceBetween: 1,
    speed: 500,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    pagination: {
      el: $pagination,
      clickable: true,
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
});
