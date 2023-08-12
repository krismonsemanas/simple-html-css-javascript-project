const dropdown = document.getElementById("dropdown");
const trigger = document.getElementById("trigger");
const dropdownItem = document.getElementById("dropdown-item");
const icon = document.getElementById("icon");

dropdown.addEventListener("mouseleave", () => {
  dropdownItem.classList.remove("block");
  dropdownItem.classList.add("hidden");
  icon.classList.replace("bi-chevron-up", "bi-chevron-down");
});

trigger.addEventListener("mouseenter", () => {
  dropdownItem.classList.remove("hidden");
  dropdownItem.classList.add("block");
  icon.classList.replace("bi-chevron-down", "bi-chevron-up");
});

dropdownItem.addEventListener("mouseenter", (e) =>
  e.stopImmediatePropagation()
);
