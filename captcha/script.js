const generate = document.getElementById("generate");

const captcha = () => {
  const result = document.getElementById("result");

  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  let captcha = "";

  for (let index = 0; index <= 5; index++) {
    captcha += characters.charAt(Math.random() * characters.length);
  }

  result.innerText = captcha;
};

generate.addEventListener("click", () => captcha());

captcha();
