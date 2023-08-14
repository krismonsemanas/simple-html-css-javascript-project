const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const hidden = accordion.ariaHidden;

    const icon = accordion.querySelector(".header i");

    if (hidden === "true")
      icon.classList.replace("bi-chevron-down", "bi-chevron-up");
    else icon.classList.replace("bi-chevron-up", "bi-chevron-down");

    accordion.setAttribute("aria-hidden", hidden === "true" ? "false" : "true");

    accordion.classList.toggle("active");
  });
});
