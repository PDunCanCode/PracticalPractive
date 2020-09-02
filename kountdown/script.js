const dateEl = document.getElementById("date-picker");
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");

//Set Date Min with todays date

const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);
