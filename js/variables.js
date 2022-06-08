////////////////////////////////////////////////
//CAPTURA ELEMENTOS DEL DOM
////////////////////////////////////////////////

const formulario = document.getElementById("formulario");

//container de inputs de sección NOMBRE
const datalistParent = document.getElementById("nombres");
const inputName = document.getElementById("inputName");
const submitName = document.getElementById("submitName");

//container de inputs de sección NUMERO
const inputNum = document.getElementById("inputNum");
const submitNum = document.getElementById("submitNum");

//container de inputs de sección TIPO
const typeParent = document.getElementById("typeCheckbox-container");
const typeBtnTitle = document.getElementById("typeBtnTitle");
const arrowTypeTitle = document.getElementById("arrowTypeTitle");

//container de inputs de sección STAT + RANGE
const statParent = document.getElementById("radioStat-container");
const statBtnTitle = document.getElementById("statBtnTitle");
const arrowStatTitle = document.getElementById("arrowStatTitle");

const rangeContainer = document.getElementById("rangeContainer");
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

const minRangeSelector = document.getElementById("minRange-selector");
const maxRangeSelector = document.getElementById("maxRange-selector");

const minRangeValue = document.getElementById("rangeValue-min");
const maxRangeValue = document.getElementById("rangeValue-max");

const minProgressBar = document.getElementById("progressBar-min");
const maxProgressBar = document.getElementById("progressBar-max");

//Botón favoritos
const favoriteBtn = document.getElementById("favorite");

//elementos para print
const cardsParent = document.getElementById("cards-parent");
const templateCardTop = document.querySelector(".cardTop-template").content;
const fragment = document.createDocumentFragment();

//local storage
let favoritePkmn = JSON.parse(localStorage.getItem("favoritos")) || [];

//Intro animada
introRed = document.querySelector(".intro-red");
introWhite = document.querySelector(".intro-white");

//BBDD Nombres Pokemon para validación
let pokemonNames = [];
