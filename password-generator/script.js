const copy = document.getElementById("copy");
const result = document.getElementById("result");
const helptext = document.getElementById("helptext");
const generate = document.getElementById("generate");

const lengthInput = document.getElementById("lengthInput");
const uppercaseInput = document.getElementById("uppercaseInput");
const numberInput = document.getElementById("numberInput");
const symbolInput = document.getElementById("symbolInput");

lengthInput.addEventListener(
  "input",
  (e) => (helptext.innerText = `(${e.target.value})`)
);

const generatePassword = () => {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = characters.toUpperCase();
  const symbol = "!@#$%^&*()_+/{}";
  const number = "1234567890";

  if (uppercaseInput.checked) {
    characters += uppercase;
  }
  if (symbolInput.checked) {
    characters += symbol;
  }
  if (numberInput.checked) {
    characters += number;
  }

  let password = "";

  for (let index = 0; index < lengthInput.value; index++) {
    password += characters.charAt(Math.random() * characters.length);
  }

  result.innerText = password;
};

generate.addEventListener("click", () => generatePassword());

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.innerText);
});

generatePassword();
