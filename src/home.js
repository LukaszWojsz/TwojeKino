import style from "./css/index.scss"
import "./seats"

var choosen = false;
var dateChoosen = false;
var loggedIn = true;

let showcase = document.getElementById('showcase');
let seatContainer = document.getElementById('seat-container');
let firstColumn = document.getElementById('firstColumn');
const cinemaSelect = document.getElementById("cinemaPlace");
const chooseDate = document.getElementById('chooseDate');
const movieSelect = document.getElementById('movie');
let username = localStorage.getItem("setUsername");

let encantoMovie = {
    name: "Nasze Magiczne Encanto",
    type: "Familijny",
    length: "110 minut",
    premiere: "26.11.2021",
    description: "„Nasze magiczne Encanto” opowiada historię niezwykłej rodziny Madrigal. Ich pełen magii dom znajduje się w tętniącym życiem mieście - w cudownym i urokliwym miejscu zwanym Encanto, ukrytym w górach Kolumbii. Magia Encanto sprawiła, że każde dziecko w rodzinie posiada wyjątkową moc uzdrawiania, z wyjątkiem Mirabel. Kiedy magia otaczająca Encanto jest w niebezpieczeństwie, Mirabel odkrywa, że to właśnie ona, jako jedyna zwyczajna osoba w tej wyjątkowej rodzinie, może być jej ostatnią nadzieją.",
    hour: "14:00"
};

let batmanMovie = {
    name: "Batman",
    type: "Science-Fiction",
    length: "176 minut",
    premiere: "04.03.2022",
    description: "Dwa lata pod postacią Batmana (Robert Pattinson) i strach w sercach kryminalistów sprawiły, że Bruce Wayne ujrzał najmroczniejsze oblicze Gotham City. Mając u boku jedynie garstkę zaufanych sojuszników — w tym Alfreda Pennywortha (Andy Serkis) i porucznika Jamesa Gordona (Jeffrey Wright) — i występując przeciwko sitwie skorumpowanych urzędników oraz osobistości, samotny mściciel stał się w mniemaniu obywateli miasta jedynym obrońcą sprawiedliwości. Nieznany zabójca w sadystyczny i wyrachowany sposób nęka elitę Gotham. Największy Detektyw Świata, kierując się zaszyfrowanymi wiadomościami, trafia do półświatka. Tam w trakcie swojego śledztwa spotyka takie postacie jak Selina Kyle, zwana Kobietą-Kot (Zoë Kravitz), Oswald Cobblepot, czyli Pingwin (Colin Farrell), Carmine Falcone (John Turturro) i Edward Nashton, tudzież Człowiek-Zagadka (Paul Dano). Wreszcie dowody zaczynają się konkretyzować, a zamiary sprawcy stają się jasne. Batman zostaje zmuszony do szukania nowych sprzymierzeńców, żeby zdemaskować winowajcę i położyć kres nadużywaniu władzy i korupcji, od dawna nękających Gotham City.",
    hour: "19:00"
};

let unchartedMovie = {
    name: "Uncharted",
    type: "Przygodowy",
    length: "115 minut",
    premiere: "18.02.2022",
    description: "To ekranizacja bardzo popularnej gry. W roli Nathana Drake'a zobaczymy Toma Hollanda (Spider-Man: Daleko od domu). W filmie zagrają również Mark Wahlberg oraz Antonio Banderas. Ruben Fleischer (Venom) wyreżyseruje film na podstawie scenariusza napisanego przez Matta Holloway'a i Arta Marcuma (Iron Man, Morbius).",
    hour: "16:00"
};

// loggedIn = false;

document.getElementById('logOutTxt').innerHTML = 'Profil';
var loggedAs = document.getElementById('loggedAsUser');


window.onload = load;
function load() {
    localStorage.removeItem('selectedMovieIndex');
    if(username == null){
        window.location = 'TwojeKino/'
    }
};
document.getElementById("logoutBtn").addEventListener('click', function(){
    loggedIn = false;
    console.log(loggedIn);
    if(loggedIn == false){
        window.location = 'TwojeKino/';
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
document.getElementById("unchartedTitle").innerHTML = unchartedMovie.name;

// Set min date
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("chooseDate")[0].setAttribute('min', today);
console.log(today);


var loggedAs = document.getElementById('loggedAsUser');
loggedAs.innerHTML = "Witaj " + username + "!";

console.log(username);

// Set date select true or false
chooseDate.addEventListener('change', function(){
    if(chooseDate.value !== ''){
      dateChoosen = true;
    }else{
      dateChoosen = false;
    }
    console.log(dateChoosen);
  });

  cinemaSelect.addEventListener("change", () => {
    if(cinemaSelect.value === 'Kraków'){
        choosen = true;
        console.log(choosen);
        
    }else if(cinemaSelect.value === ''){
        choosen = false;
        console.log(choosen);
    }else{
        choosen = true;
        console.log(choosen);
    };
});


document.getElementById('chooseSeatsBtn').addEventListener('click', function() {
    if(choosen === true && dateChoosen === true){
        showcase.style.display = "flex", showcase.style.animation = "fadeIn 0.5s";
        seatContainer.style.display = "block", seatContainer.style.animation = "fadeIn 0.5s";
        firstColumn.style.animation = "fadeOut 3s", firstColumn.style.display = "none"
        seatContainer.scrollIntoView();
        if(movieSelect.value == 'Uncharted'){
        document.getElementById('batman').style.display = 'none';
        document.getElementById('encanto').style.display = 'none';
        }else if(movieSelect.value == 'Batman'){
        document.getElementById('uncharted').style.display = 'none';
        document.getElementById('encanto').style.display = 'none';
        }else if(movieSelect.value == 'Nasze Magiczne Encanto'){
        document.getElementById('batman').style.display = 'none';
        document.getElementById('uncharted').style.display = 'none';
        }
    } else{};
    
});

document.getElementById('batmanMovie').addEventListener('click', function(){
    movieSelect.value = "Batman";
    firstColumn.scrollIntoView();
});
document.getElementById('unchartedMovie').addEventListener('click', function(){
    movieSelect.value = "Uncharted";
    firstColumn.scrollIntoView();
});
document.getElementById('encantoMovie').addEventListener('click', function(){
    movieSelect.value = "Nasze Magiczne Encanto";
    firstColumn.scrollIntoView();
});







