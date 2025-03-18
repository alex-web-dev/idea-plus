const $labels = document.querySelectorAll(".section-label");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const $label = entry.target.querySelector(".section-label");
      if (entry.isIntersecting) {
        $label.classList.add("section-label--active");
      } else {
        $label.classList.remove("section-label--active");
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "-80px 0px -320px 0px",
  }
);

const $sections = document.querySelectorAll(".section, .article__section");

$sections.forEach(($section) => {
  observer.observe($section);
});
