const $timetables = document.querySelectorAll(".timetable");

$timetables.forEach(($timetable) => {
  const todayIndex = new Date().getDay();
  const $items = $timetable.querySelectorAll(".timetable__item");

  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  if ($items[adjustedIndex]) {
    $items[adjustedIndex].classList.add("timetable__item--active");
  }
});
