/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
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
        location.href = '/TwojeKino/home';
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
/* 3 */
/***/ (() => {

// document.getElementById('logoutBtn').addEventListener('click', function(){
//     window.location = '';
//     console.log('Zosta??e?? wylogowany')
// })

/***/ })
/******/ 	]);
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
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _logout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logout__WEBPACK_IMPORTED_MODULE_2__);



var encantoMovie = {
  name: "Nasze Magiczne Encanto",
  type: "Familijny",
  length: "110 minut",
  premiere: "26.11.2021",
  description: "???Nasze magiczne Encanto??? opowiada histori?? niezwyk??ej rodziny Madrigal. Ich pe??en magii dom znajduje si?? w t??tni??cym ??yciem mie??cie - w cudownym i urokliwym miejscu zwanym Encanto, ukrytym w g??rach Kolumbii. Magia Encanto sprawi??a, ??e ka??de dziecko w rodzinie posiada wyj??tkow?? moc uzdrawiania, z wyj??tkiem Mirabel. Kiedy magia otaczaj??ca Encanto jest w niebezpiecze??stwie, Mirabel odkrywa, ??e to w??a??nie ona, jako jedyna zwyczajna osoba w tej wyj??tkowej rodzinie, mo??e by?? jej ostatni?? nadziej??.",
  hour: "14:00"
};
var batmanMovie = {
  name: "Batman",
  type: "Science-Fiction",
  length: "176 minut",
  premiere: "04.03.2022",
  description: "Dwa lata pod postaci?? Batmana (Robert Pattinson) i strach w sercach kryminalist??w sprawi??y, ??e Bruce Wayne ujrza?? najmroczniejsze oblicze Gotham City. Maj??c u boku jedynie garstk?? zaufanych sojusznik??w ??? w tym Alfreda Pennywortha (Andy Serkis) i porucznika Jamesa Gordona (Jeffrey Wright) ??? i wyst??puj??c przeciwko sitwie skorumpowanych urz??dnik??w oraz osobisto??ci, samotny m??ciciel sta?? si?? w mniemaniu obywateli miasta jedynym obro??c?? sprawiedliwo??ci. Nieznany zab??jca w sadystyczny i wyrachowany spos??b n??ka elit?? Gotham. Najwi??kszy Detektyw ??wiata, kieruj??c si?? zaszyfrowanymi wiadomo??ciami, trafia do p??????wiatka. Tam w trakcie swojego ??ledztwa spotyka takie postacie jak Selina Kyle, zwana Kobiet??-Kot (Zo?? Kravitz), Oswald Cobblepot, czyli Pingwin (Colin Farrell), Carmine Falcone (John Turturro) i Edward Nashton, tudzie?? Cz??owiek-Zagadka (Paul Dano). Wreszcie dowody zaczynaj?? si?? konkretyzowa??, a zamiary sprawcy staj?? si?? jasne. Batman zostaje zmuszony do szukania nowych sprzymierze??c??w, ??eby zdemaskowa?? winowajc?? i po??o??y?? kres nadu??ywaniu w??adzy i korupcji, od dawna n??kaj??cych Gotham City."
};
var unchartedMovie = {
  name: "Uncharted",
  type: "Przygodowy",
  length: "115 minut",
  premiere: "18.02.2022",
  description: "To ekranizacja bardzo popularnej gry. W roli Nathana Drake'a zobaczymy Toma Hollanda (Spider-Man: Daleko od domu). W filmie zagraj?? r??wnie?? Mark Wahlberg oraz Antonio Banderas. Ruben Fleischer (Venom) wyre??yseruje film na podstawie scenariusza napisanego przez Matta Holloway'a i Arta Marcuma (Iron Man, Morbius)."
};
document.getElementById("batmanTitle").innerHTML = batmanMovie.name;
document.getElementById("unchartedTitle").innerHTML = unchartedMovie.name;
document.getElementById("encantoTitle").innerHTML = encantoMovie.name;
})();

/******/ })()
;
//# sourceMappingURL=cf77ed3614dcc5045afc.bundle.js.map