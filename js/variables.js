////////////////////////////////////////////////
//CAPTURA ELEMENTOS DEL DOM
////////////////////////////////////////////////

const formulario = document.getElementById("formulario");

//container de inputs de sección NOMBRE
const nameParent = document.getElementById("inputTextName-container");

//container de inputs de sección NUMERO
const numParent = document.getElementById("inputNumberNum-container");

//container de inputs de sección TIPO
const typeParent = document.getElementById("typeCheckbox-container");

//container de inputs de sección STAT + RANGE
const statParent = document.getElementById("radioStat-container");
const rangeContainer = document.getElementById("rangeContainer");
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

//elementos para print
const cardsParent = document.getElementById("cards-parent");
const templateCardTop = document.querySelector(".cardTop-template").content;
const templateCardBottom = document.querySelector(".cardBottom-template").content;
const fragment = document.createDocumentFragment();

//local storage
let favoritePkmn = JSON.parse(localStorage.getItem("favoritos")) || [];
