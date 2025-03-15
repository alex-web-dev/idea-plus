import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const $sliders = document.querySelectorAll(".small-slider");
$sliders.forEach(($slider) => {
  const $swiper = $slider.querySelector(".small-slider__main");
  const $prev = $slider.querySelector(".small-slider__controls .slider-controls__btn-prev");
  const $next = $slider.querySelector(".small-slider__controls .slider-controls__btn-next");
  const $pagination = $slider.querySelector(".small-slider__controls .slider-controls__pagination");

  new Swiper($swiper, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    speed: 500,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    pagination: {
      el: $pagination,
      clickable: true,
    },
  });
});
