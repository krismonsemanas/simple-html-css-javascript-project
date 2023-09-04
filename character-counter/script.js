const text = document.getElementById("text");
const character = document.getElementById("character");
const word = document.getElementById("word");

const countCharacter = (string) => (character.innerText = string.length);

const countWord = (string) =>
  (word.innerText = string.split(" ").filter((char) => char !== "").length);

text.addEventListener("input", (event) => {
  const value = event.target.value;

  countCharacter(value);
  countWord(value);
});
