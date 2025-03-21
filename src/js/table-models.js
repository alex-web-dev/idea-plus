const TRANSITION_DELAY = 500;

document.querySelectorAll(".table-models").forEach(($tableModels) => {
  const $common = $tableModels.querySelector(".table-models__common");
  const $moreBtn = $tableModels.querySelector(".table-models__more");
  const $lessBtn = $tableModels.querySelector(".table-models__less");

  $moreBtn?.addEventListener("click", () => {
    const fullHeight = $common.scrollHeight + "px";
    $common.style.maxHeight = fullHeight;
    $tableModels.classList.remove("table-models--shadow");

    setTimeout(() => {
      $tableModels.classList.remove("table-models--limited");
      $common.style.maxHeight = "none";
    }, TRANSITION_DELAY);
  });

  $lessBtn?.addEventListener("click", () => {
    $common.style.maxHeight = $common.scrollHeight + "px";
    $tableModels.classList.add("table-models--shadow");

    requestAnimationFrame(() => ($common.style.maxHeight = "655px"));

    setTimeout(() => {
      $tableModels.classList.add("table-models--limited");
    }, TRANSITION_DELAY);
  });
});
