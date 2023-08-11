let active = 0;

const boxs = document.querySelectorAll(".box");

const onDrag = () => console.log("dragging");

const onDragStart = (event) => event.classList.add("dragging");

const onDragEnd = (event) => event.classList.remove("dragging");

const onDragOver = (event) => event.preventDefault();

const onDragEnter = (event) => event.classList.add("bg", "dragging");

const onDragLeave = (event) => event.classList.remove("bg", "dragging");

const onDrop = (index) => {
  active = index;
  render();
};

const render = () => {
  boxs.forEach((box, index) => {
    if (index === active) {
      box.classList.add("bg");
      box.classList.remove("dragging");
      box.addEventListener("drag", onDrag);
      box.addEventListener("dragstart", onDragStart);
      box.addEventListener("dragend", onDragEnd);
    } else {
      box.classList.remove("bg");
      box.addEventListener("dragover", onDragOver, false);
      box.addEventListener("dragenter", onDragEnter);
      box.addEventListener("dragleave", onDragLeave);
      box.addEventListener("drop", () => onDrop(index));
    }
  });
};

render();
