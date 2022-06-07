////////////////////////////////////////////////
// EVENTOS
////////////////////////////////////////////////

//evento FORMULARIO
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

formulario.addEventListener("click", (e) => {
  let inputContainer = e.target.nextElementSibling;
  /*   if (e.target.tagName === "BUTTON" && e.target != formulario.querySelector("#favorite")) {
    deployInput(inputContainer);
  } */

  e.target === typeBtnTitle && deployInput(inputContainer);
  e.target === statBtnTitle && deployInput(inputContainer);
  e.target === document.querySelector(".statBtn") && deployInput(rangeContainer);
});

//evento sección NOMBRE
/* nameParent.addEventListener("keypress", (e) => {
  e.keyCode === 13 && e.preventDefault();
  let value = e.target.value;
  if (e.keyCode === 13 && pokemonNames.includes(value)) {
    let res = e.target.tagName === "INPUT" && POKEDEX.findPokemon("nombre", value);
    printPkmn(res);
  }
  if (e.keyCode === 13 && !pokemonNames.includes(value)) {
    Swal.fire({
      title: "¡Lo sentimos! Este Pokemon aún no se encuentra en nuestra base de datos.",
      focusConfirm: false,
      confirmButtonText: "Ok!",
      confirmButtonAriaLabel: "Ok!",
    });
  }
}); */

submitName.addEventListener("click", () => {
  let value = inputName.value;
  pokemonNames.includes(value) && printPkmn(POKEDEX.findPokemon("nombre", value));
  if (!pokemonNames.includes(value)) {
    Swal.fire({
      title: "¡Lo sentimos! Este Pokemon aún no se encuentra en nuestra base de datos.",
      focusConfirm: false,
      confirmButtonText: "Ok!",
      confirmButtonAriaLabel: "Ok!",
    });
  }
});

//evento sección NÚMERO
/* numParent.addEventListener("keypress", (e) => {
  e.keyCode === 13 && e.preventDefault();
  let numValue = Number(e.target.value);
  if (e.keyCode === 13 && numValue <= 151) {
    let res = e.target.tagName === "INPUT" && POKEDEX.findPokemon("numero", numValue);
    printPkmn(res);
  }
  if (numValue > 151) {
    Swal.fire({
      title: "¡Lo sentimos! Este Pokemon aún no se encuentra en nuestra base de datos.",
      focusConfirm: false,
      confirmButtonText: "Ok!",
      confirmButtonAriaLabel: "Ok!",
    });
  }
}); */

submitNum.addEventListener("click", () => {
  let value = Number(inputNum.value);
  console.log(value);
  value <= 151 && printPkmn(POKEDEX.findPokemon("numero", value));
  if (value > 151) {
    Swal.fire({
      title: "¡Lo sentimos! Este Pokemon aún no se encuentra en nuestra base de datos.",
      focusConfirm: false,
      confirmButtonText: "Ok!",
      confirmButtonAriaLabel: "Ok!",
    });
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
  e.target === formulario.querySelector("#favorite") &&
    localStorage.length > 0 &&
    printPkmnList(favoritePkmn);

  if (e.target === formulario.querySelector("#favorite") && localStorage.length === 0) {
    Swal.fire({
      title: "No has agregado ningún pokemon a tu lista de favoritos.",
      html:
        `<i class="fa-heart fa-regular alertHeart"></i>` +
        `<i class="fa-heart fa-solid alertHeartSolid"></i>`,
      focusConfirm: false,
      confirmButtonText: "Ok!",
      confirmButtonAriaLabel: "Ok!",
    });
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
    }
  }
});
