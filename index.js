import style from "./css/index.scss"

import "./login";
import "./logout";

const encantoMovie = {
    name: "Nasze Magiczne Encanto",
    type: "Familijny",
    length: "110 minut",
    premiere: "26.11.2021",
    description: "„Nasze magiczne Encanto” opowiada historię niezwykłej rodziny Madrigal. Ich pełen magii dom znajduje się w tętniącym życiem mieście - w cudownym i urokliwym miejscu zwanym Encanto, ukrytym w górach Kolumbii. Magia Encanto sprawiła, że każde dziecko w rodzinie posiada wyjątkową moc uzdrawiania, z wyjątkiem Mirabel. Kiedy magia otaczająca Encanto jest w niebezpieczeństwie, Mirabel odkrywa, że to właśnie ona, jako jedyna zwyczajna osoba w tej wyjątkowej rodzinie, może być jej ostatnią nadzieją.",
    hour: "14:00"
};
const batmanMovie = {
    name: "Batman",
    type: "Science-Fiction",
    length: "176 minut",
    premiere: "04.03.2022",
    description: "Dwa lata pod postacią Batmana (Robert Pattinson) i strach w sercach kryminalistów sprawiły, że Bruce Wayne ujrzał najmroczniejsze oblicze Gotham City. Mając u boku jedynie garstkę zaufanych sojuszników — w tym Alfreda Pennywortha (Andy Serkis) i porucznika Jamesa Gordona (Jeffrey Wright) — i występując przeciwko sitwie skorumpowanych urzędników oraz osobistości, samotny mściciel stał się w mniemaniu obywateli miasta jedynym obrońcą sprawiedliwości. Nieznany zabójca w sadystyczny i wyrachowany sposób nęka elitę Gotham. Największy Detektyw Świata, kierując się zaszyfrowanymi wiadomościami, trafia do półświatka. Tam w trakcie swojego śledztwa spotyka takie postacie jak Selina Kyle, zwana Kobietą-Kot (Zoë Kravitz), Oswald Cobblepot, czyli Pingwin (Colin Farrell), Carmine Falcone (John Turturro) i Edward Nashton, tudzież Człowiek-Zagadka (Paul Dano). Wreszcie dowody zaczynają się konkretyzować, a zamiary sprawcy stają się jasne. Batman zostaje zmuszony do szukania nowych sprzymierzeńców, żeby zdemaskować winowajcę i położyć kres nadużywaniu władzy i korupcji, od dawna nękających Gotham City.",
};

const unchartedMovie = {
    name: "Uncharted",
    type: "Przygodowy",
    length: "115 minut",
    premiere: "18.02.2022",
    description: "To ekranizacja bardzo popularnej gry. W roli Nathana Drake'a zobaczymy Toma Hollanda (Spider-Man: Daleko od domu). W filmie zagrają również Mark Wahlberg oraz Antonio Banderas. Ruben Fleischer (Venom) wyreżyseruje film na podstawie scenariusza napisanego przez Matta Holloway'a i Arta Marcuma (Iron Man, Morbius).",
};


document.getElementById("batmanTitle").innerHTML = batmanMovie.name;
document.getElementById("unchartedTitle").innerHTML = unchartedMovie.name;
document.getElementById("encantoTitle").innerHTML = encantoMovie.name;

    
