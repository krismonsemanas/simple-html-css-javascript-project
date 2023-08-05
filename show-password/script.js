/*
 * File: script.js
 * Project: show-password
 * File Created: Saturday, 5th August 2023 2:11:28 pm
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * Github: https://github.com/krismonsemanas
 * -----
 * Last Modified: Saturday, 5th August 2023 2:11:54 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com>)
 * -----
 * Copyright 2023, Kris Dev
 */

const password = document.getElementById("password");
const addon = document.getElementById("addon");

addon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    addon.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    password.type = "password";
    addon.classList.replace("bi-eye-slash", "bi-eye");
  }
});
