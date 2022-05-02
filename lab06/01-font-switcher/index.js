const makeBigger = () => {
   var divcontent = document.getElementsByClassName("content")[0];
   var fontsize = parseFloat(window.getComputedStyle(divcontent, null).getPropertyValue('font-size'));
   divcontent.style.fontSize = (fontsize + 2) + "px";

   var header1 = document.getElementsByTagName("h1")[0];
   var fontsize = parseFloat(window.getComputedStyle(header1, null).getPropertyValue('font-size'));
   header1.style.fontSize = (fontsize + 2) + "px";   
};

const makeSmaller = () => {
   var divcontent = document.getElementsByClassName("content")[0];
   var fontsize = parseFloat(window.getComputedStyle(divcontent, null).getPropertyValue('font-size'));
   divcontent.style.fontSize = (fontsize - 2) + "px";

   var header1 = document.getElementsByTagName("h1")[0];
   var fontsize = parseFloat(window.getComputedStyle(header1, null).getPropertyValue('font-size'));
   header1.style.fontSize = (fontsize - 2) + "px";   
};

/* https://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html for font size*/

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

