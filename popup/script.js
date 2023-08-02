/*
 * File: script.js
 * Project: popup
 * File Created: Tuesday, 1st August 2023 8:28:16 am
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * Github: https://github.com/krismonsemanas
 * -----
 * Last Modified: Tuesday, 1st August 2023 8:28:22 am
 * Modified By: Emon Krismon (emonkrismon98@gmail.com>)
 * -----
 * Copyright 2023, Kris Dev
 */

const popup = document.getElementById("popup");

const openPopUp = () => {
  popup.classList.replace("hidden", "flex");
};

const closePopUp = () => {
  popup.classList.replace("flex", "hidden");
};

const onConfirm = () => alert("Your confirm this action");
