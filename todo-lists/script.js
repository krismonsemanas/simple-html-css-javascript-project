const todoContainer = document.getElementById("todoContainer");
const addTodo = document.getElementById("addTodo");
const todoInput = document.getElementById("todoInput");

const handleRemoveTodo = () => {
  const removes = todoContainer.querySelectorAll("li .remove");

  removes.forEach((remove) => {
    remove.addEventListener("click", () => {
      remove.parentNode.remove();
    });
  });
};

const handleChangeTodo = () => {
  const checkboxs = todoContainer.querySelectorAll("li .todo-item input");

  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("input", (event) => {
      const parent = checkbox.parentNode.parentNode; // get li element from current checkbox
      const remove = parent.querySelector(".remove");
      if (event.currentTarget.checked) {
        checkbox.setAttribute("checked", "checked");
        remove.style.display = "none";
      } else {
        checkbox.removeAttribute("checked");
        remove.style.display = "block";
      }
    });
  });
};

const createToDoList = (title) => {
  todoContainer.innerHTML += `
    <li>
        <div class="todo-item">
            <input type="checkbox" name="todo" />
            <label for="">${title}</label>
        </div>
        <button class="remove">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </li>
    `;
  handleRemoveTodo();
  handleChangeTodo();
};

addTodo.addEventListener("click", () => {
  if (todoInput.value === "") {
    alert("please insert a todo");
    todoInput.focus();
    return;
  }
  createToDoList(todoInput.value);
  todoInput.value = "";
});
