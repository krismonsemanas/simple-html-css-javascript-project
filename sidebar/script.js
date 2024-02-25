const dropdowns = document.querySelectorAll(".dropdown");

const toggleDropdown = (index) => {
  dropdowns.forEach((dropdown, idx) => {
    if (index === idx) {
      dropdown.classList.toggle("is-open");
    } else {
      dropdown.classList.remove("is-open");
    }
  });
};

dropdowns.forEach((dropdown, index) => {
  const trigger = dropdown.querySelector(".trigger");
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDropdown(index);
  });
});
