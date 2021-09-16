// JavaScript Document
console.log("Hallo");
// Met eeen button kun je  de samenvatting zichtbaar maken.

var samenvattingButton = document.querySelector(".main-second-page section:nth-of-type(3) button");
var samenvattingContent = document.querySelector(".main-second-page section:nth-of-type(3) article p");
console.log(samenvattingButton, samenvattingContent);

  
function toonSamenvatting() {
  
   samenvattingContent.classList.toggle("samenvatting-zichtbaar");
}


samenvattingButton.addEventListener("click", toonSamenvatting);