// JavaScript Document
console.log("Hallo");

// Een sidebar maken door het button huidige reads te klikken

var sideButton = document.querySelector(".main-first-page section:nth-of-type(2) a ");
var sideMenu = document.querySelector(".side-menu");

console.log(sideButton, sideMenu);


function sideMenuZichtbaar() {
   sideMenu.classList.toggle("menu-zichtbaar");
}


if (sideButton) {
   sideButton.addEventListener("click", sideMenuZichtbaar);
}







// Met eeen button kun je  de samenvatting zichtbaar maken.



var samenvattingButton = document.querySelector(".main-second-page section:nth-of-type(3) button");
var samenvattingContent = document.querySelector(".main-second-page section:nth-of-type(3) article p");
console.log(samenvattingButton, samenvattingContent);




function toonSamenvatting() {

   samenvattingContent.classList.toggle("samenvatting-zichtbaar");
}

if (samenvattingButton) {
   samenvattingButton.addEventListener("click", toonSamenvatting);
}