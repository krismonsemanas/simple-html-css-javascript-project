const slider = document.getElementById("slider");
const box = document.getElementById("box");

slider.addEventListener("input", () => {
  box.style.width = `${slider.value}%`;
});
