import { createElem } from "./helpers";

const $filters = document.querySelector(".filters");
if ($filters) {
  const $selectedList = $filters.querySelector(".filters__selected-list");
  const $allCheckboxes = $filters.querySelectorAll(".filter-item__checkbox .filter-checkbox__input");

  const $items = $filters.querySelectorAll(".filters__item");
  $items.forEach(($item) => {
    const $itemCheckboxes = $item.querySelectorAll(".filter-item__checkbox .filter-checkbox__input");
    $itemCheckboxes.forEach(($checkbox) => {
      const label = $checkbox.dataset.label;

      $checkbox.addEventListener("change", () => {
        if ($checkbox.checked) {
          $selectedList.append(createSelected($filters, label));
        } else {
          const $selectedItem = $selectedList.querySelector(`.filter-selected[data-label="${label}"]`);
          $selectedItem?.remove();
        }

        itemCountHandler($item);

        filtersSelectedHandler($filters);
      });
    });
  });

  const $selectedReset = $filters.querySelector(".filters__selected-reset");
  $selectedReset?.addEventListener("click", () => {
    $allCheckboxes.forEach(($checkbox) => {
      $checkbox.checked = false;
    });

    const $selectedItems = $filters.querySelectorAll(".filters__selected-item");
    $selectedItems.forEach(($item) => $item.remove());

    $items.forEach(($item) => itemCountHandler($item));

    $filters.classList.remove("filters--active");
  });
}

function createSelected($filters, text = "") {
  const $items = $filters.querySelectorAll(".filters__item");

  const $selected = createElem("div", "filter-selected filters__selected-item");
  $selected.dataset.label = text;

  const $text = createElem("span", "text text--grey filter-selected__text", {
    innerText: text,
  });
  const $btn = createElem("button", "icon filter-selected__btn", {
    innerHTML: '<img src="img/icons/close-grey.svg" alt="">',
  });
  $btn.addEventListener("click", () => {
    $selected.remove();

    const $selectedCheckboxInput = $filters.querySelector(`.filter-checkbox__input[data-label="${text}"]`);
    $selectedCheckboxInput.checked = false;

    $items.forEach(($item) => itemCountHandler($item));

    filtersSelectedHandler($filters);
  });

  $selected.append($text);
  $selected.append($btn);

  return $selected;
}

function itemCountHandler($item) {
  const $itemCount = $item.querySelector(".filter-item__count");
  const $checkboxes = $item.querySelectorAll(".filter-checkbox__input");
  const checkedCount = Array.from($checkboxes).reduce((count, checkbox) => {
    return count + (checkbox.checked ? 1 : 0);
  }, 0);

  $itemCount.innerText = checkedCount !== 0 ? `(${checkedCount})` : "";

  checkedCount > 0 ? $item.classList.add("filter-item--selected") : $item.classList.remove("filter-item--selected");
}

function filtersSelectedHandler($filters) {
  const $allCheckboxes = $filters.querySelectorAll(".filter-item__checkbox .filter-checkbox__input");
  const checkedCount = Array.from($allCheckboxes).reduce((count, checkbox) => {
    return count + (checkbox.checked ? 1 : 0);
  }, 0);

  checkedCount > 0 ? $filters.classList.add("filters--active") : $filters.classList.remove("filters--active");
}
