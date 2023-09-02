const debounce = document.getElementById("debounce");
const result = document.getElementById("result");

const withDebounce = () => {
  setTimeout(() => {
    result.innerText = debounce.value;
  }, 500);
};

const withoutDebounce = () => {
  result.innerText = debounce.value;
};

debounce.addEventListener("keyup", () => withoutDebounce());
