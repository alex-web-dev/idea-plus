import { moveElem } from "./helpers";

moveSlider();
window.addEventListener("resize", moveSlider);

function moveSlider() {
  moveElem({
    element: ".article__aside-slider",
    from: ".article__aside-content",
    to: ".article__mobile-slider",
    width: 1241,
  });
}
