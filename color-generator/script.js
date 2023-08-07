/*
 * File: script.js
 * Project: color-generator
 * File Created: Monday, 7th August 2023 6:10:05 pm
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * Github: https://github.com/krismonsemanas
 * -----
 * Last Modified: Monday, 7th August 2023 6:54:00 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com>)
 * -----
 * Copyright 2023, Kris Dev
 */

const btn = document.getElementById("btn");
const result = document.getElementById("result");
const maxColor = 0xffffff;

btn.addEventListener("click", () => {
  const color = Math.floor(Math.random() * maxColor).toString(16);
  document.body.style.backgroundColor = `#${color}`;
  result.innerText = `#${color}`;
  result.style.color = `#${color}`;
});
