/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

var loggedIn = false;
var displayed = false;
var users = [{
  // Object @ 0 index
  username: "admin",
  password: "admin1"
}, {
  // Object @ 1 index
  username: "bula",
  password: "bula1"
}];
document.getElementById('buyBtn1').addEventListener('click', function () {
  // document.getElementById('login-container').style.display = 'block';
  document.getElementById('mustBeLogged').style.display = 'block';
  document.getElementById('mustBeLogged').scrollIntoView();
  setTimeout(function () {
    document.getElementById('mustBeLogged').style.display = "none";
    document.getElementById('navbar').scrollIntoView();
  }, 5000);
  console.log('hello');
  this.addEventListener('');
});
document.getElementById('buyBtn2').addEventListener('click', function () {
  // document.getElementById('login-container').style.display = 'block';
  document.getElementById('mustBeLogged').style.display = 'block';
  document.getElementById('mustBeLogged').scrollIntoView();
  setTimeout(function () {
    document.getElementById('mustBeLogged').style.display = "none";
    document.getElementById('navbar').scrollIntoView();
  }, 5000);
  console.log('hello');
});
document.getElementById('buyBtn3').addEventListener('click', function () {
  // document.getElementById('login-container').style.display = 'block';
  document.getElementById('mustBeLogged').style.display = 'block';
  document.getElementById('mustBeLogged').scrollIntoView();
  setTimeout(function () {
    document.getElementById('mustBeLogged').style.display = "none";
    document.getElementById('navbar').scrollIntoView();
  }, 5000);
  console.log('hello');
}); // function saveUser(){
// 		localStorage.setItem = username;
// 	}

document.getElementById('loginBtn').addEventListener('click', function () {
  var username = document.getElementById('userName').value;
  var password = document.getElementById('userPassword').value;
  localStorage.setItem("setUsername", username);

  for (var i = 0; i < users.length; i++) {
    // check is user input matches username and password of a current index of the objPeople array
    if (username == users[i].username && password == users[i].password) {
      loggedIn = true;
      console.log(username + " is logged in!!!");
      console.log(loggedIn);

      if (loggedIn == true) {
        window.location = 'home.html';
      } // stop the function if this is found to be true


      return;
    } else if (userName != users[i].name || userPassword != users[i].password) {
      if (loggedIn == false) {
        document.getElementById('wrongLog').style.display = "block";
        setTimeout(function () {
          document.getElementById('wrongLog').style.display = "none";
        }, 3000);
      }
    } else {}

    console.log("incorrect username or password");
  }
});

/***/ }),

/***/ "./src/logout.js":
/*!***********************!*\
  !*** ./src/logout.js ***!
  \***********************/
/***/ (() => {

// document.getElementById('logoutBtn').addEventListener('click', function(){
//     window.location = '';
//     console.log('Zostałeś wylogowany')
// })

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/login.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout */ "./src/logout.js");
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logout__WEBPACK_IMPORTED_MODULE_2__);



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
  description: "Dwa lata pod postacią Batmana (Robert Pattinson) i strach w sercach kryminalistów sprawiły, że Bruce Wayne ujrzał najmroczniejsze oblicze Gotham City. Mając u boku jedynie garstkę zaufanych sojuszników — w tym Alfreda Pennywortha (Andy Serkis) i porucznika Jamesa Gordona (Jeffrey Wright) — i występując przeciwko sitwie skorumpowanych urzędników oraz osobistości, samotny mściciel stał się w mniemaniu obywateli miasta jedynym obrońcą sprawiedliwości. Nieznany zabójca w sadystyczny i wyrachowany sposób nęka elitę Gotham. Największy Detektyw Świata, kierując się zaszyfrowanymi wiadomościami, trafia do półświatka. Tam w trakcie swojego śledztwa spotyka takie postacie jak Selina Kyle, zwana Kobietą-Kot (Zoë Kravitz), Oswald Cobblepot, czyli Pingwin (Colin Farrell), Carmine Falcone (John Turturro) i Edward Nashton, tudzież Człowiek-Zagadka (Paul Dano). Wreszcie dowody zaczynają się konkretyzować, a zamiary sprawcy stają się jasne. Batman zostaje zmuszony do szukania nowych sprzymierzeńców, żeby zdemaskować winowajcę i położyć kres nadużywaniu władzy i korupcji, od dawna nękających Gotham City."
};
var unchartedMovie = {
  name: "Uncharted",
  type: "Przygodowy",
  length: "115 minut",
  premiere: "18.02.2022",
  description: "To ekranizacja bardzo popularnej gry. W roli Nathana Drake'a zobaczymy Toma Hollanda (Spider-Man: Daleko od domu). W filmie zagrają również Mark Wahlberg oraz Antonio Banderas. Ruben Fleischer (Venom) wyreżyseruje film na podstawie scenariusza napisanego przez Matta Holloway'a i Arta Marcuma (Iron Man, Morbius)."
};
document.getElementById("batmanTitle").innerHTML = batmanMovie.name;
document.getElementById("unchartedTitle").innerHTML = unchartedMovie.name;
document.getElementById("encantoTitle").innerHTML = encantoMovie.name;
})();

/******/ })()
;
//# sourceMappingURL=b5941159167a3334a223.bundle.js.map