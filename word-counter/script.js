/*
 * File: script.js
 * Project: word-counter
 * File Created: Wednesday, 2nd August 2023 4:28:17 pm
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * Github: https://github.com/krismonsemanas
 * -----
 * Last Modified: Wednesday, 2nd August 2023 4:45:50 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com>)
 * -----
 * Copyright 2023, Kris Dev
 */

const word = document.getElementById("word");
const result = document.getElementById("result");

word.addEventListener("input", () => {
  const value = word.value;

  result.innerText = `Word : ${
    value.split(" ").filter((item) => item !== "").length
  }`;
});
