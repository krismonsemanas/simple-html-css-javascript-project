/*
 * File: script.js
 * Project: tabs
 * File Created: Thursday, 10th August 2023 5:13:14 pm
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * Github: https://github.com/krismonsemanas
 * -----
 * Last Modified: Thursday, 10th August 2023 7:56:47 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com>)
 * -----
 * Copyright 2023, Kris Dev
 */

const tabs = document.querySelectorAll(".tab-header-title");
const contents = document.querySelectorAll(".tab-content-text");

let active = 0;

const activeTab = () => {
  tabs.forEach((tab, tabIndex) => {
    if (tabIndex === active) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  contents.forEach((content, contentIndex) => {
    if (contentIndex === active) {
      content.classList.remove("hidden");
    } else {
      content.classList.add("hidden");
    }
  });
};

const setTabActive = (index) => {
  active = index;
  tabs[index].classList.add("active");
  activeTab();
};

tabs.forEach((tab, index) =>
  tab.addEventListener("click", () => setTabActive(index))
);

contents.forEach((content, index) => {
  if (index !== active) content.classList.add("hidden");
});
