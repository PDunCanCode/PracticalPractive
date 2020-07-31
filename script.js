const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUi()

let ticketPrice = +movieSelect.Value;

//Save Movie Info

funtion setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorgae.setItem('selectedMoviePrice', moviePrice);
}


function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row.seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//get Daata from Local Storage and populate the UI

function populateUi() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
}

// Movie Select Event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIdex, e.target.value);
  updateSelectedCount();
});

//Seat Click Event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupid")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
