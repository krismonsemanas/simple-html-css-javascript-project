const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
const weigthInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const score = document.getElementById("score");
const category = document.getElementById("category");

const categoryBmi = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi >= 18.5 && bmi < 24.9) return "Normal";
  if (bmi >= 25 && bmi < 29.9) return "Overweight";
  return "Obese";
};

const calculateBmi = () => {
  if (weigthInput.value == "" || heightInput.value == "")
    return alert("input can't empty");

  const weight = parseFloat(weigthInput.value);
  const height = parseFloat(heightInput.value) / 100; // convert cm to m

  const bmi = weight / (height * height);

  score.innerText = bmi.toFixed(2);
  category.innerText = categoryBmi(bmi);

  result.style.display = "flex";
};

calculate.addEventListener("click", () => calculateBmi());
