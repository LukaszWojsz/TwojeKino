/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5:
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var container = document.getElementById("seat-container");
var seats = document.querySelectorAll(".row .seat:not(.sold)");
var count = document.getElementById("seatsCount");
var total = document.getElementById("price");
var movieSelect = document.getElementById("movie");
var movieTitle = document.getElementById("choosenMovie");
var cinemaSelect = document.getElementById("cinemaPlace");
var choosenCinema = document.getElementById("cinema");
var chooseDate = document.getElementById("chooseDate");
var choosenDate = document.getElementById("date");
var chooseSeatsBtn = document.getElementById("chooseSeatsBtn");
var movieTime = document.getElementById("hour");
var showcase = document.getElementById("showcase");
var ticketPrice = 16;

window.onbeforeunload = function (e) {
  localStorage.removeItem("selectedSeats");
}; //Save selected movie index, price, place, title, date, seats


function setMovieData(movieIndex, moviePrice, cinemaPlace, movieTitle, movieDate, movieTime) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
  localStorage.setItem("selectedCinemaPlace", cinemaPlace);
  localStorage.setItem("selectedMovieTitle", movieTitle);
  localStorage.setItem("selectedMovieDate", movieDate);
  localStorage.setItem("movieTime", movieTime);
} // Update total and count


function updateSelectedCount() {
  var selectedSeats = document.querySelectorAll(".row .seat.selected");

  var seatsIndex = _toConsumableArray(selectedSeats).map(function (seat) {
    return _toConsumableArray(seats).indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  var selectedSeatsCount = selectedSeats.length;
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
  } else {}

  cinemaSelect.addEventListener("change", function (e) {
    setMovieData(e.target.selectedIndex, e.target.value);
  });
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
} // Get data from localstorage and populate UI


function populateUI() {
  var selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }

  var selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    console.log(selectedMovieIndex);
  }
}

console.log(populateUI()); // Movie select event

movieSelect.addEventListener("change", function (e) {
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});
cinemaSelect.addEventListener("change", function (e) {
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
}); // Seat click event

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
    e.target.classList.toggle("selected");
    document.getElementById("submitBtn").addEventListener("click", function () {
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
    location.href = "/TwojeKino/";
    localStorage.clear();
  }, 5000);
});
document.getElementById("logoTitle").addEventListener("click", function () {
  localStorage.removeItem("selectedSeats");
  localStorage.removeItem("selectedCinemaPlace");
  localStorage.removeItem("selectedMovieIndex");
  localStorage.removeItem("selectedMovieDate");
}); // Initial count and total set

updateSelectedCount();

/***/ }),

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _seats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _seats__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_seats__WEBPACK_IMPORTED_MODULE_1__);


var choosen = false;
var dateChoosen = false;
var loggedIn = true;
var showcase = document.getElementById('showcase');
var seatContainer = document.getElementById('seat-container');
var firstColumn = document.getElementById('firstColumn');
var cinemaSelect = document.getElementById("cinemaPlace");
var chooseDate = document.getElementById('chooseDate');
var movieSelect = document.getElementById('movie');
var username = localStorage.getItem("setUsername");
var encantoMovie = {
  name: "Nasze Magiczne Encanto",
  type: "Familijny",
  length: "110 minut",
  premiere: "26.11.2021",
  description: "„Nasze magiczne Encanto” opowiada historię niezwykłej rodziny Madrigal. Ich pełen magii dom znajduje się w tętniącym życiem mieście - w cudownym i urokliwym miejscu zwanym Encanto, ukrytym w górach Kolumbii. Magia Encanto sprawiła, że każde dziecko w rodzinie posiada wyjątkową moc uzdrawiania, z wyjątkiem Mirabel. Kiedy magia otaczająca Encanto jest w niebezpieczeństwie, Mirabel odkrywa, że to właśnie ona, jako jedyna zwyczajna osoba w tej wyjątkowej rodzinie, może być jej ostatnią nadzieją.",
  hour: "14:00"
};
var batmanMovie = {
  name: "Batman",
  type: "Science-Fiction",
  length: "176 minut",
  premiere: "04.03.2022",
  description: "Dwa lata pod postacią Batmana (Robert Pattinson) i strach w sercach kryminalistów sprawiły, że Bruce Wayne ujrzał najmroczniejsze oblicze Gotham City. Mając u boku jedynie garstkę zaufanych sojuszników — w tym Alfreda Pennywortha (Andy Serkis) i porucznika Jamesa Gordona (Jeffrey Wright) — i występując przeciwko sitwie skorumpowanych urzędników oraz osobistości, samotny mściciel stał się w mniemaniu obywateli miasta jedynym obrońcą sprawiedliwości. Nieznany zabójca w sadystyczny i wyrachowany sposób nęka elitę Gotham. Największy Detektyw Świata, kierując się zaszyfrowanymi wiadomościami, trafia do półświatka. Tam w trakcie swojego śledztwa spotyka takie postacie jak Selina Kyle, zwana Kobietą-Kot (Zoë Kravitz), Oswald Cobblepot, czyli Pingwin (Colin Farrell), Carmine Falcone (John Turturro) i Edward Nashton, tudzież Człowiek-Zagadka (Paul Dano). Wreszcie dowody zaczynają się konkretyzować, a zamiary sprawcy stają się jasne. Batman zostaje zmuszony do szukania nowych sprzymierzeńców, żeby zdemaskować winowajcę i położyć kres nadużywaniu władzy i korupcji, od dawna nękających Gotham City.",
  hour: "19:00"
};
var unchartedMovie = {
  name: "Uncharted",
  type: "Przygodowy",
  length: "115 minut",
  premiere: "18.02.2022",
  description: "To ekranizacja bardzo popularnej gry. W roli Nathana Drake'a zobaczymy Toma Hollanda (Spider-Man: Daleko od domu). W filmie zagrają również Mark Wahlberg oraz Antonio Banderas. Ruben Fleischer (Venom) wyreżyseruje film na podstawie scenariusza napisanego przez Matta Holloway'a i Arta Marcuma (Iron Man, Morbius).",
  hour: "16:00"
}; // loggedIn = false;

document.getElementById('logOutTxt').innerHTML = 'Profil';
var loggedAs = document.getElementById('loggedAsUser');
window.onload = load;

function load() {
  localStorage.removeItem('selectedMovieIndex');

  if (username == null) {
    location.href = '/TwojeKino/';
  }
}

;
document.getElementById("logoutBtn").addEventListener('click', function () {
  loggedIn = false;
  console.log(loggedIn);

  if (loggedIn == false) {
    location.href = '/TwojeKino/';
    localStorage.clear();
  }
});
document.getElementById('encantoCategory').innerHTML = "Kategoria: " + encantoMovie.type;
document.getElementById('encantoLength').innerHTML = "Długość: " + encantoMovie.length;
document.getElementById('encantoPremiere').innerHTML = "Data premiery: " + encantoMovie.premiere;
document.getElementById('batmanCategory').innerHTML = "Kategoria: " + batmanMovie.type;
document.getElementById('batmanLength').innerHTML = "Długość: " + batmanMovie.length;
document.getElementById('batmanPremiere').innerHTML = "Data premiery: " + batmanMovie.premiere;
document.getElementById('unchartedCategory').innerHTML = "Kategoria: " + unchartedMovie.type;
document.getElementById('unchartedLength').innerHTML = "Długość: " + unchartedMovie.length;
document.getElementById('unchartedPremiere').innerHTML = "Data premiery: " + unchartedMovie.premiere;
document.getElementById("encantoTitle").innerHTML = encantoMovie.name;
document.getElementById("batmanTitle").innerHTML = batmanMovie.name;
document.getElementById("unchartedTitle").innerHTML = unchartedMovie.name; // Set min date

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("chooseDate")[0].setAttribute('min', today);
console.log(today);
var loggedAs = document.getElementById('loggedAsUser');
loggedAs.innerHTML = "Witaj " + username + "!";
console.log(username); // Set date select true or false

chooseDate.addEventListener('change', function () {
  if (chooseDate.value !== '') {
    dateChoosen = true;
  } else {
    dateChoosen = false;
  }

  console.log(dateChoosen);
});
cinemaSelect.addEventListener("change", function () {
  if (cinemaSelect.value === 'Kraków') {
    choosen = true;
    console.log(choosen);
  } else if (cinemaSelect.value === '') {
    choosen = false;
    console.log(choosen);
  } else {
    choosen = true;
    console.log(choosen);
  }

  ;
});
document.getElementById('chooseSeatsBtn').addEventListener('click', function () {
  if (choosen === true && dateChoosen === true) {
    showcase.style.display = "flex", showcase.style.animation = "fadeIn 0.5s";
    seatContainer.style.display = "block", seatContainer.style.animation = "fadeIn 0.5s";
    firstColumn.style.animation = "fadeOut 3s", firstColumn.style.display = "none";
    seatContainer.scrollIntoView();

    if (movieSelect.value == 'Uncharted') {
      document.getElementById('batman').style.display = 'none';
      document.getElementById('encanto').style.display = 'none';
    } else if (movieSelect.value == 'Batman') {
      document.getElementById('uncharted').style.display = 'none';
      document.getElementById('encanto').style.display = 'none';
    } else if (movieSelect.value == 'Nasze Magiczne Encanto') {
      document.getElementById('batman').style.display = 'none';
      document.getElementById('uncharted').style.display = 'none';
    }
  } else {}

  ;
});
document.getElementById('batmanMovie').addEventListener('click', function () {
  movieSelect.value = "Batman";
  firstColumn.scrollIntoView();
});
document.getElementById('unchartedMovie').addEventListener('click', function () {
  movieSelect.value = "Uncharted";
  firstColumn.scrollIntoView();
});
document.getElementById('encantoMovie').addEventListener('click', function () {
  movieSelect.value = "Nasze Magiczne Encanto";
  firstColumn.scrollIntoView();
});
})();

/******/ })()
;
//# sourceMappingURL=4bcc22c9640942facb87.bundle.js.map