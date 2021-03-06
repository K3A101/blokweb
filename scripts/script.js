// JavaScript Document
console.log("Hallo");


// // Een sidebar maken door het button boekenkaft te  klikken
// // Variabele voor de side menu
// // Met de queryselector ga ik de boekenkaft en de samenvatting van het boek selecteren.
var sideButton = document.querySelector(".main-first-page section:nth-of-type(2) a ");
var sideMenu = document.querySelector(".side-menu");

// Variabele voor de knop die de samnevatting zichtbaar gaat maken. 
// Met de queryselector ga ik de button en de samenvatting van het boek selecteren.
var samenvattingButton = document.querySelector(".main-second-page section:nth-of-type(3) button");
var samenvattingContent = document.querySelector(".main-second-page section:nth-of-type(3) article p");

console.log(sideButton, sideMenu, samenvattingButton, samenvattingContent);

// ------------------------------------------------------------------------------------------------------------------

// Function - Op de nav.sidemenu wordt de class toegevoegd op de nav
function sideMenuZichtbaar() {
   sideMenu.classList.toggle("menu-zichtbaar");
}

// Function - Op de article wordt de class toegevoegd.
function toonSamenvatting() {
   samenvattingContent.classList.toggle("samenvatting-zichtbaar");
}
// ----------------------------------------------------------------------------------------------------------------

// als de variabele sidebutton is gevonden op het pagina dan dan maak je de button zichtbaar.
if (sideButton) {
   sideButton.addEventListener("click", sideMenuZichtbaar);
}

// Met eeen button kun je  de samenvatting zichtbaar maken.
if (samenvattingButton) {
   samenvattingButton.addEventListener("click", toonSamenvatting);
}