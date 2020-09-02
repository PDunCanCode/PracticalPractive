const dateEl = document.getElementById("date-picker");
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//Set Date Min with todays date

const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

//Populate the Countdown
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    //populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    //Hide / Show Countdown
    inputContainer.hidden = true;
    countdownEl.hidden = false;
  }, second);
}

function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.ercElement[1].value;
  //Get the number version of date, updateDom
  if (countdownDate === "") {
    alert("Please select a date for the countdown.");
  } else {
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
}

//Reset all Values
function reset() {
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countdownActive);
  //Reset Values
  countdownTitle = "";
  countdownDate = "";
}
//Event Listeners

countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
