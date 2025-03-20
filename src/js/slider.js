import Swiper from "swiper";
import { Navigation, Pagination, Controller } from "swiper/modules";

const $sliders = document.querySelectorAll(".slider");
$sliders.forEach(($slider) => {
  const $swiper = $slider.querySelector(".slider__main");
  const $prev = $slider.querySelector(".slider__btn-prev");
  const $next = $slider.querySelector(".slider__btn-next");
  const $pagination = $slider.querySelector(".slider__pagination");

  new Swiper($swiper, {
    modules: [Navigation, Pagination, Controller],
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
  });
});
