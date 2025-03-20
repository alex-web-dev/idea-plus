const $tablesModels = document.querySelectorAll(".table-models");
$tablesModels.forEach(($tableModels) => {
  const $moreBtn = $tableModels.querySelector(".table-models__more");
  $moreBtn?.addEventListener("click", () => $tableModels.classList.remove("table-models--limited"));

  const $lessBtn = $tableModels.querySelector(".table-models__less");
  $lessBtn?.addEventListener("click", () => $tableModels.classList.add("table-models--limited"));
});
