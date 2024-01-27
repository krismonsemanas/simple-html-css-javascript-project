const togglePassword = document.querySelectorAll(".togglePassword");
const password = document.getElementById("password");
const length = document.getElementById("length");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const validations = {
  length: 8,
  lowercase: new RegExp("[a-z]"),
  uppercase: new RegExp("[A-Z]"),
  number: new RegExp("[0-9]"),
  symbol: new RegExp("[-+_!@#$%^&*.,?]"),
};

const successValidation = {};

const checkLength = (value) => {
  if (value.length >= validations["length"]) {
    length.classList.add("valid");
    successValidation.length = true;
  } else {
    length.classList.remove("valid");
    delete successValidation["length"];
  }
};

const checkLowercase = (value) => {
  if (validations["lowercase"].test(value)) {
    lowercase.classList.add("valid");
    successValidation.lowercase = true;
  } else {
    lowercase.classList.remove("valid");
    delete successValidation["lowercase"];
  }
};

const checkUppercase = (value) => {
  if (validations["uppercase"].test(value)) {
    uppercase.classList.add("valid");
    successValidation.uppercase = true;
  } else {
    uppercase.classList.remove("valid");
    delete successValidation["uppercase"];
  }
};

const checkNumber = (value) => {
  if (validations["number"].test(value)) {
    number.classList.add("valid");
    successValidation.number = true;
  } else {
    number.classList.remove("valid");
    delete successValidation["number"];
  }
};

const checkSymbol = (value) => {
  if (validations["symbol"].test(value)) {
    symbol.classList.add("valid");
    successValidation.symbol = true;
  } else {
    symbol.classList.remove("valid");
    delete successValidation["symbol"];
  }
};

const valid = () => {
  if (
    Object.keys(successValidation).length === Object.keys(validations).length
  ) {
    password.classList.remove("is-invalid");
    return password.classList.add("is-valid");
  } else {
    password.classList.add("is-invalid");
    return password.classList.remove("is-valid");
  }
};

password.addEventListener("blur", (event) => {
  const { value } = event.currentTarget;
  if (value === "") {
    return password.classList.add("is-invalid");
  } else {
    checkLength(value);
    checkLength(value);
    checkLowercase(value);
    checkUppercase(value);
    checkNumber(value);
    checkSymbol(value);
  }
  valid();
});

password.addEventListener("input", (event) => {
  const { value } = event.currentTarget;
  checkLength(value);
  checkLowercase(value);
  checkUppercase(value);
  checkNumber(value);
  checkSymbol(value);
  valid();
});

const handleTogglePassword = (index) => {
  togglePassword.forEach((toggle, toggleIndex) => {
    if (toggleIndex === index) {
      toggle.classList.add("hidden");
    } else {
      toggle.classList.remove("hidden");
    }
  });
  const type = password.getAttribute("type");
  password.setAttribute("type", type === "password" ? "text" : "password");
};

togglePassword.forEach((toggle, index) =>
  toggle.addEventListener("click", () => handleTogglePassword(index))
);
