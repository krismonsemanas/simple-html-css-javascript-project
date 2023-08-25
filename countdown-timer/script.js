const add = document.getElementById("add");
const date = document.getElementById("date");
const countdown = document.getElementById("countdown");

const dateFromStorage = localStorage.getItem("dates");
const dates = !dateFromStorage ? [] : [...JSON.parse(dateFromStorage)];

const countDownContainer = (index) => {
  countdown.innerHTML += `
  <div class="card">
  <div class="countdown-container">
    <div class="time" id="day-${index}">
      <h2></h2>
      <span>Days</span>
    </div>
    <div class="time" id="hour-${index}">
      <h2></h2>
      <span>Hours</span>
    </div>
    <div class="time" id="minute-${index}">
      <h2></h2>
      <span>Minutes</span>
    </div>
    <div class="time" id="second-${index}">
      <h2></h2>
      <span>Seconds</span>
    </div>
  </div>
  <button class="delete" onclick="onDelete(${index})" >Delete</button>
</div>
  `;
};

const generateCountDownContainer = () => {
  if (dates.length === 0) return false;

  dates.forEach((date, index) => {
    countDownContainer(index);
  });
};

const countdownTimer = () => {
  if (dates.length === 0) return false;

  dates.forEach((date, index) => {
    setInterval(() => {
      const now = new Date().getTime();
      const diff = new Date(date).getTime() - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdown.querySelector(`#day-${index} h2`).innerHTML = days;
      countdown.querySelector(`#hour-${index} h2`).innerHTML = hours;
      countdown.querySelector(`#minute-${index} h2`).innerHTML = minutes;
      countdown.querySelector(`#second-${index} h2`).innerHTML = seconds;
    }, 1000);
  });
};

const handleAddDate = () => {
  const now = new Date().getTime();
  if (date.value === "") {
    alert("please input date");
    date.focus();
    return;
  } else if (now > new Date(date.value).getTime()) {
    alert("please input a date greater then the current date");
    date.focus();
    return;
  }

  dates.push(date.value);
  const index = dates.length === 0 ? 0 : dates.length - 1;
  const dateObject = new Object(dates);
  localStorage.setItem("dates", JSON.stringify(dateObject));

  countDownContainer(index);
};

const onDelete = (index) => {
  dates.splice(index, 1);
  if (dates.length === 0)
    localStorage.setItem("dates", JSON.stringify(new Object()));
  else localStorage.setItem("dates", JSON.stringify(new Object(dates)));
  countdown.querySelectorAll(".card")[index].remove();
  window.location.reload();
};

add.addEventListener("click", () => {
  handleAddDate();
  countdownTimer();
});

generateCountDownContainer();
countdownTimer();
