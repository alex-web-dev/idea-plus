import Swiper from "swiper";
import { Controller } from "swiper/modules";

const $worksInfo = document.querySelectorAll(".work-info");
$worksInfo.forEach(($workInfo) => {
  const $infoSlider = $workInfo.querySelector(".work-info__slider");
  const $sectionWork = $workInfo.closest(".section--works");
  const imagesSwiper = $sectionWork?.querySelector(".section__slider--works .slider__main").swiper;

  const infoSwiper = new Swiper($infoSlider, {
    modules: [Controller],
    slidesPerView: 1,
    speed: 500,
  });

  infoSwiper.controller.control = imagesSwiper;
  imagesSwiper.controller.control = infoSwiper;

  const $slides = $workInfo.querySelectorAll(".work-info__slide");
  $slides.forEach(($slide) => {
    const $images = $slide.querySelectorAll(".work-info__img-box");

    $images.forEach(($image) => {
      $image.addEventListener("mouseenter", () => {
        $images.forEach(($img) => $img.classList.remove("work-info__img-box--active"));
        $image.classList.add("work-info__img-box--active");
      });

      $image.addEventListener("click", () => {
        $images.forEach(($img) => $img.classList.remove("work-info__img-box--active"));
        $image.classList.add("work-info__img-box--active");
      });
    });
  });
});
