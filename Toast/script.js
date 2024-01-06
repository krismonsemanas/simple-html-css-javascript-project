/*
 * File: script.js
 * Project: Toast
 * File Created: Saturday, 6th January 2024 1:37:12 pm
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * -----
 * Last Modified: Saturday, 6th January 2024 1:37:15 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com)
 * -----
 * Copyright 2024 Kris Dev
 */

const buttons = [
  {
    class: "bg-primary",
    label: "Primary",
  },
  {
    class: "bg-info",
    label: "Info",
  },
  {
    class: "bg-success",
    label: "Success",
  },
  {
    class: "bg-warning",
    label: "Warning",
  },
  {
    class: "bg-danger",
    label: "Danger",
  },
];

const buttonGroup = document.getElementById("buttonGroup");
const toastContainer = document.getElementById("toastContainer");
let toastIndex = 0;

const showToast = (index) => {
  toastIndex += toastIndex;
  const toast = buttons[index];
  toastContainer.innerHTML += `<div id="toast-${toastIndex}" class="toast">
        <div class="toast-bg ${toast.class}"></div>
        <span class="message">${toast.label} toast message</span>
        <span id="heading" class="${toast.class.replace("bg", "text")}">${
    toast.label
  }</span>
      </div>`;

  setTimeout(
    () => toastContainer.querySelector(`#toast-${toastIndex}`).remove(),
    5000
  );
};

buttons.map(
  (button, index) =>
    (buttonGroup.innerHTML += `<button onclick="showToast(${index})" class="btn ${button.class}">${button.label}</button>`)
);
