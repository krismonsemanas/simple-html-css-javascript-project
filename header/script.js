const dropdowns = document.querySelectorAll(".dropdown");

const toggleDropdown = (index) => {
  dropdowns.forEach((dropdown, idx) => {
    const target = dropdown.querySelector("ul");

    if (idx === index) {
      target.classList.toggle("hidden");
    } else {
      target.classList.add("hidden");
    }
  });
};

dropdowns.forEach((dropdown, index) => {
  const trigger = dropdown.querySelector(".trigger");

  trigger.addEventListener("click", () => toggleDropdown(index));
});
