const dateEl = document.getElementById("date-picker");
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");

let countdownTitle = "";
let countdownDate = "";

//Set Date Min with todays date

const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.ercElement[1].value;
}

//Event Listeners

countdownForm.addEventListener("submit", updateCountdown);
