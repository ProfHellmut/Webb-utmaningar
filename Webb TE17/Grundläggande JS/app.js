// Var och let
// const, konstant värde, går ej att ändra

// var/let kan ändra sina värden närsom
var tal1 = 10;
let text1 = 'Halloj';

// Vi kan även deklarera först och tilldela sen
var tal2;   // Deklaration av variabeln tal2
tal2 = 40;  // Tilldelning av värde till tal2

// console.log(tal2);  // tal2 är 40
// tal2 = 10;
// console.log(tal2);  // tal2 är 10
// tal2 = tal2 + 10;   // tal2 får värdet av tal2 + 10 (20)
// console.log(tal2);
// tal2 += 10;         // Samma effekt som raden innan
// console.log(tal2);  // tal2 är 30
// tal2 -= 20;
// console.log(tal2);  // tal2 är 10
// tal2 *= 10;
// console.log(tal2);  // tal2 är 100
// tal2 /= 10;
// console.log(tal2);  // tal2 är 10

let text = "Hej";
let djur = '"Katt"';

// console.log(text + " " + djur);

// "!" kallas not-operator. Den ger det motsatta värdet
// av det den sätter sig framför
let sant = !true;
let falskt = tal2 < 1; // Villkor till värden

// console.log(!sant);
// console.log(falskt);

// IF-statements
// Vi använder if-statements när vi vill kolla upp ett
// värde i en variabel och utföra nånting om det är sant
// eller falskt
if (tal2 > 5) {
    console.log("Korrekt");
} else if(tal2 < 5) {
    console.log("mindre än 5");
} else {
    console.log("anropas om inget ovan är sant");
}

// Metod/funktion
function minFunktion() {
    console.log("Körs från minFunktion");
}

minFunktion(); // Vi anropar "minFunktion"

talFunktion(10);

// Funktion som kräver indata (tal)
// Skriver ut summan av tal + tal
function talFunktion(tal) {
    let summa = tal + tal;
    console.log(summa);
}

// Anropar metoden och skickar med "5" som indata
talFunktion(5);


// Att binda komponenter till variabler
// Hämtar element med id "rubrik" från html och
// binder denna till const-variabeln rubrikTxt
const rubrikTxt = document.querySelector('#rubrik');
const knappBtn = document.querySelector('#knapp');

// Lägga till event lyssnare
// Lägger till en event-listener till knappBtn som lyssnar
// efter ett "click/knapptryck", anropar "egenFunktion"
// vid händelsen
knappBtn.addEventListener('click', egenFunktion);

// Toggle funktion, om text är "Rubrik", byt till "Joel Olsson"
function egenFunktion() {
    if (rubrikTxt.textContent === "Rubrik") { // Om "Rubrik"
        rubrikTxt.textContent = "Joel Olsson";// Byt text
        rubrikTxt.style.color = "Red";  // ändra färg till röd
    } else if (rubrikTxt.textContent === "Joel Olsson"){ // om joel
        rubrikTxt.textContent = "Rubrik"; // byt text
        rubrikTxt.style.color = "blue"; // ändra färg till blå
    }
}