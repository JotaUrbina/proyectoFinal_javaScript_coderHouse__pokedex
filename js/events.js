////////////////////////////////////////////////
// EVENTOS
////////////////////////////////////////////////

//evento FORMULARIO
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

formulario.addEventListener("click", (e) => {
  let inputContainer = e.target.nextElementSibling;
  e.target === typeBtnTitle && deployInput(inputContainer);
  e.target === typeBtnTitle && rotateArrowTitle(inputContainer, arrowTypeTitle);
  e.target === statBtnTitle && deployInput(inputContainer);
  e.target === statBtnTitle && rotateArrowTitle(inputContainer, arrowStatTitle);
  e.target === document.querySelector(".statBtn") && deployInput(rangeContainer);
});

//evento sección NOMBRE
submitName.addEventListener("click", () => {
  let value = inputName.value.toLowerCase();
  pokemonNames.includes(value) && printPkmn(POKEDEX.findPokemon("nombre", value));
  !pokemonNames.includes(value) && notFoundAlert();
});

inputName.addEventListener("keypress", (e) => {
  let value = inputName.value.toLowerCase();
  if (e.keyCode === 13) {
    pokemonNames.includes(value) && printPkmn(POKEDEX.findPokemon("nombre", value));
    !pokemonNames.includes(value) && notFoundAlert();
  }
});

//evento sección NÚMERO
submitNum.addEventListener("click", () => {
  let value = Number(inputNum.value);
  console.log(value);
  value > 0 && value <= 151 && printPkmn(POKEDEX.findPokemon("numero", value));
  value > 151 && notFoundAlert();
  (value === 0 || value > 898) && notExistAlert();
});

inputNum.addEventListener("keypress", (e) => {
  let value = Number(inputNum.value);
  if (e.keyCode === 13) {
    value > 0 && value <= 151 && printPkmn(POKEDEX.findPokemon("numero", value));
    value > 151 && notFoundAlert();
    (value === 0 || value > 898) && notExistAlert();
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
    console.log(radioStatValue);
  });
});

rangeContainer.addEventListener("input", (e) => {
  let value1 = minRange.value;
  let value2 = maxRange.value;
  console.log(value1, value2);
  if (e.target.tagName === "INPUT") {
    let res = POKEDEX.sortStatRangeWithValue(radioStatValue, "menor", value1, value2);
    printPkmnList(res);
  }
});

minRange.oninput = function () {
  minRangeValue.innerText = this.value;
  minRangeSelector.style.left = (this.value * 100) / 256 + "%";
  minProgressBar.style.width = (this.value * 100) / 256 + "%";
};

maxRange.oninput = function () {
  maxRangeValue.innerText = this.value;
  maxRangeSelector.style.left = (this.value * 100) / 256 + "%";
  maxProgressBar.style.width = (this.value * 100) / 256 + "%";
};

// evento MIS FAVORITOS
formulario.addEventListener("click", (e) => {
  e.target === favoriteBtn && localStorage.length > 0 && printPkmnList(favoritePkmn);
  if (e.target === favoriteBtn && localStorage.length === 0) {
    notFavoriteAlert();
    animationClickHeartAlert();
  }
});

// evento DEPLOY STAT
cardsParent.addEventListener("click", (e) => {
  let cardStat = e.target.parentElement.nextElementSibling;
  if (e.target.nodeName === "BUTTON") {
    deployCardStat(cardStat, e.target);
  }
});

// evento CHECKBOX-CORAZÓN de las cards renderizadas
cardsParent.addEventListener("change", (e) => {
  if (e.target.nodeName === "INPUT") {
    let heart = e.target.previousElementSibling;
    let heartCheckbox = e.target;
    let namePkmn = e.target.parentElement.parentElement.querySelector(".card-title").textContent;
    heart.classList.toggle("fa-solid");
    heart.classList.toggle("fa-regular");
    if (heartCheckbox.checked) {
      addLocalStorage(namePkmn);
      heartCheckbox.setAttribute("data-check", "fa-solid");
    } else {
      deleteLocalStorage(namePkmn);
      heartCheckbox.setAttribute("data-check", "fa-regular");
      printPkmnList(favoritePkmn);
    }
  }
});
