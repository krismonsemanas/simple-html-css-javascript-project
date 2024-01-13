/*
 * File: script.js
 * Project: expanding-card
 * File Created: Saturday, 13th January 2024 11:36:01 am
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * -----
 * Last Modified: Saturday, 13th January 2024 1:58:46 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com)
 * -----
 * Copyright 2024 Kris Dev
 */

const cards = document.querySelectorAll(".card");

const handleCardClick = (index) => {
  cards.forEach(
    (card, idx) => idx !== index && card.classList.remove("expand")
  );
  cards[index].classList.add("expand");
};

cards.forEach((card, index) =>
  card.addEventListener("click", () => handleCardClick(index))
);
