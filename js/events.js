////////////////////////////////////////////////
// EVENTOS
////////////////////////////////////////////////

//evento FORMULARIO
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

formulario.addEventListener("click", (e) => {
  let inputContainer = e.target.nextElementSibling;
  if (e.target.tagName === "BUTTON" && e.target != formulario.querySelector("#favorite")) {
    deployInput(inputContainer);
  }
  //e.target === document.querySelector(".statBtn") && deployInput(rangeContainer);
});

//evento sección NOMBRE
nameParent.addEventListener("keypress", (e) => {
  e.keyCode === 13 && e.preventDefault();
  if (e.keyCode === 13) {
    let value = e.target.value;
    let res = e.target.tagName === "INPUT" && POKEDEX.findPokemon("nombre", value);
    printPkmn(res);
  }
});

//evento sección NÚMERO
numParent.addEventListener("keypress", (e) => {
  e.keyCode === 13 && e.preventDefault();
  if (e.keyCode === 13) {
    let numValue = Number(e.target.value);
    let res = e.target.tagName === "INPUT" && POKEDEX.findPokemon("numero", numValue);
    printPkmn(res);
  }
});

//evento sección TIPO
typeParent.addEventListener("change", () => {
  let res = POKEDEX.filterByType(getTypeChecked());
  printPkmnList(res);
});

//evento sección STAT ++ RANGE
let radioStatValue = statParent.childNodes.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    radioStatValue = e.target.value;
  });
});

rangeContainer.addEventListener("input", (e) => {
  let value1 = minRange.value;
  let value2 = maxRange.value;
  let res =
    e.target.tagName === "INPUT" && POKEDEX.sortStatRangeWithValue(radioStatValue, "menor", value1, value2);
  printPkmnList(res);
});

// evento MIS FAVORITOS
formulario.addEventListener("click", (e) => {
  e.target === formulario.querySelector("#favorite") && printPkmnList(favoritePkmn);
});

// evento DEPLOY STAT
cardsParent.addEventListener("click", (e) => {
  let cardStat = e.target.parentElement.nextElementSibling;
  if (e.target.nodeName === "BUTTON") {
    deployCardStat(cardStat, e.target);
  }
});

// evento HOVER
/* cardsParent.addEventListener("mouseover", (e) => {
  let cardArrow = e.target;
  e.target.nodeName === "BUTTON" && mouseOver(cardArrow);
}); */

// evento CHECKBOX-CORAZÓN de las cards renderizadas
cardsParent.addEventListener("change", (e) => {
  if (e.target.nodeName === "INPUT") {
    let heart = e.target.previousElementSibling;
    let heartCheckbox = e.target;
    let namePkmn = e.target.parentElement.parentElement.querySelector(".card-title").textContent;
    console.log(namePkmn);
    heart.classList.toggle("fa-solid");
    heart.classList.toggle("fa-regular");
    if (heartCheckbox.checked) {
      addLocalStorage(namePkmn);
      heartCheckbox.setAttribute("data-check", "fa-solid");
    } else {
      deleteLocalStorage(namePkmn);
      heartCheckbox.setAttribute("data-check", "fa-regular");
    }
  }
});
