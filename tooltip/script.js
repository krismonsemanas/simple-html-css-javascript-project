/*
 * File: script.js
 * Project: tooltip
 * File Created: Tuesday, 8th August 2023 8:05:09 pm
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * Github: https://github.com/krismonsemanas
 * -----
 * Last Modified: Tuesday, 8th August 2023 10:00:44 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com>)
 * -----
 * Copyright 2023, Kris Dev
 */

const trigger = document.getElementById("trigger");
const content = document.getElementById("content");

trigger.addEventListener("mouseenter", () => {
  content.classList.replace("hidden", "block");
});

trigger.addEventListener("mouseleave", () => {
  content.classList.replace("block", "hidden");
});
