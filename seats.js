const container = document.getElementById("seat-container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("seatsCount");
const total = document.getElementById("price");
const movieSelect = document.getElementById("movie");
const movieTitle = document.getElementById("choosenMovie");
const cinemaSelect = document.getElementById("cinemaPlace");
const choosenCinema = document.getElementById("cinema");
const chooseDate = document.getElementById("chooseDate");
const choosenDate = document.getElementById("date");
const chooseSeatsBtn = document.getElementById("chooseSeatsBtn");
const movieTime = document.getElementById("hour");
const showcase = document.getElementById("showcase");
var ticketPrice = 16;

window.onbeforeunload = function (e){
  localStorage.removeItem("selectedSeats");
}
//Save selected movie index, price, place, title, date, seats
function setMovieData(
  movieIndex,
  moviePrice,
  cinemaPlace,
  movieTitle,
  movieDate,
  movieTime
) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
  localStorage.setItem("selectedCinemaPlace", cinemaPlace);
  localStorage.setItem("selectedMovieTitle", movieTitle);
  localStorage.setItem("selectedMovieDate", movieDate);
  localStorage.setItem("movieTime", movieTime);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = ticketPrice * selectedSeatsCount;
  choosenCinema.innerText = cinemaSelect.value;
  movieTitle.innerText = movieSelect.value;
  choosenDate.innerText = chooseDate.value;
  if (movieSelect.value == "Batman") {
    movieTime.innerText = "16:30";
  } else if (movieSelect.value == "Uncharted") {
    movieTime.innerText = "19:00";
  } else if (movieSelect.value == "Nasze Magiczne Encanto") {
    movieTime.innerText = "14:00";
  } else {
  }

  cinemaSelect.addEventListener("change", (e) => {
    setMovieData(e.target.selectedIndex, e.target.value);
  });
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    console.log(selectedMovieIndex);
  }
}
console.log(populateUI());
// Movie select event
movieSelect.addEventListener("change", (e) => {
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});
cinemaSelect.addEventListener("change", (e) => {
  setMovieData(e.target.selectedIndex, e.target.value);
  if (cinemaSelect.value === "Kraków") {
    ticketPrice = 18;
    document.getElementById("bigHall").style.display = "block";
    document.getElementById("smallHall").style.display = "none";
  } else {
    ticketPrice = 16;
    document.getElementById("smallHall").style.display = "block";
    document.getElementById("bigHall").style.display = "none";
  }
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");
    document.getElementById("submitBtn").addEventListener("click", () => {
      document.getElementById("summary").style.display = "block";
      container.style.display = "none";
      showcase.style.display = "none";
    });
  }
  updateSelectedCount();
});
document.getElementById("finishBtn").addEventListener("click", function () {
  alert("Za chwilę zostaniesz wylogowany i przekierowany do strony głównej");
  document.getElementById("finishBtn").disabled = true;
  setTimeout(function () {
    window.location = "/";
    localStorage.clear();
  }, 5000);
});

document.getElementById("logoTitle").addEventListener("click", function () {
  localStorage.removeItem("selectedSeats");
  localStorage.removeItem("selectedCinemaPlace");
  localStorage.removeItem("selectedMovieIndex");
  localStorage.removeItem("selectedMovieDate");
}); 

// Initial count and total set
updateSelectedCount();
