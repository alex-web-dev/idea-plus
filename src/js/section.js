const $labels = document.querySelectorAll(".section__label");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const $label = entry.target.querySelector(".section__label");
      if (entry.isIntersecting) {
        $label.classList.add("section__label--active");
      } else {
        $label.classList.remove("section__label--active");
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "-200px 0px -320px 0px",
  }
);

const $sections = document.querySelectorAll(".section");

$sections.forEach(($section) => {
  observer.observe($section);
});
