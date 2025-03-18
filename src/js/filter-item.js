const $filterItems = document.querySelectorAll(".filter-item");
$filterItems.forEach(($filterItem) => {
  const $btn = $filterItem.querySelector(".filter-item__btn");
  $btn.addEventListener("click", (e) => filterItemBtnHandler($btn, $filterItem, e));
});

window.addEventListener("click", (e) => {
  const $activeFilterItem = document.querySelector(".filter-item--active");
  const isInner = e.target.closest(".filter-item") && !e.target.classList.contains("filter-item");

  if (!$activeFilterItem || isInner) return;

  close($activeFilterItem);
});

function filterItemBtnHandler($btn, $filterItem, e) {
  e.stopPropagation();

  const isActive = $filterItem.classList.contains("filter-item--active");

  document.querySelectorAll(".filter-item--active").forEach(($activeFilterItem) => close($activeFilterItem));

  if (!isActive) {
    open($filterItem);
  }
}

export function open($filterItem) {
  if (!$filterItem) return;

  const $btn = $filterItem.querySelector(".filter-item__btn");
  $filterItem.classList.add("filter-item--active");
  $btn.classList.add("filter-item__btn--active");
}

export function close($filterItem) {
  if (!$filterItem) return;

  const $btn = $filterItem.querySelector(".filter-item__btn");
  $filterItem.classList.remove("filter-item--active");
  $btn.classList.remove("filter-item__btn--active");
}
