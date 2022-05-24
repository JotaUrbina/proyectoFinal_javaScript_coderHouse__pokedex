////////////////////////////////////////////////
// DECLARACIÓN FUNCIONES PARA EL DOM
////////////////////////////////////////////////

const getTypeChecked = () => {
  let checkedValue = [];
  let inputElements = document.querySelectorAll("#typeCheckbox-container input");
  for (let i = 0; inputElements[i]; ++i) {
    inputElements[i].checked && checkedValue.push(inputElements[i].value);
  }
  return checkedValue;
};

const getCardElements = (pokemon) => {
  templateCardTop.querySelector(".card-title").textContent = pokemon.nombre;
  templateCardTop.querySelector(".card-txt-1").textContent = pokemon.tipo1;
  templateCardTop.querySelector(".card-txt-2").textContent = pokemon.tipo2;
  templateCardBottom.querySelector(".stat-ps").textContent = pokemon.ps;
  templateCardBottom.querySelector(".stat-speed").textContent = pokemon.speed;
  templateCardBottom.querySelector(".stat-atq").textContent = pokemon.atq;
  templateCardBottom.querySelector(".stat-def").textContent = pokemon.def;
  templateCardBottom.querySelector(".stat-atqEsp").textContent = pokemon.atqEsp;
  templateCardBottom.querySelector(".stat-defEsp").textContent = pokemon.defEsp;
};

const printPkmnList = (pokemons) => {
  cardsParent.innerHTML = "";
  pokemons.forEach((pokemon) => {
    getCardElements(pokemon);
    const cloneTop = templateCardTop.cloneNode(true);
    const cloneBottom = templateCardBottom.cloneNode(true);
    validateTipo2(pokemon, cloneTop);
    printBgCard(pokemon, cloneTop.firstElementChild);
    addRegularHeartToCards(cloneTop);
    addSolidHeartCardsInLS(cloneTop, pokemon);
    fragment.append(cloneTop, cloneBottom);
  });
  cardsParent.appendChild(fragment);
};

const printPkmn = (pokemon) => {
  cardsParent.innerHTML = "";
  getCardElements(pokemon);
  const cloneTop = templateCardTop.cloneNode(true);
  const cloneBottom = templateCardBottom.cloneNode(true);
  validateTipo2(pokemon, cloneTop);
  printBgCard(pokemon, cloneTop.firstElementChild);
  addRegularHeartToCards(cloneTop);
  addSolidHeartCardsInLS(cloneTop, pokemon);
  fragment.append(cloneTop, cloneBottom);
  cardsParent.appendChild(fragment);
};

const addRegularHeartToCards = (cloneTop) => {
  let heartCheckbox = cloneTop.querySelector(".heart-checkbox");
  let heart = cloneTop.querySelector(".fa-heart");
  heartCheckbox.setAttribute("data-check", "fa-regular");
  heart.classList.add("fa-regular");
};

const addSolidHeartCardsInLS = (cloneTop, pokemon) => {
  let heart = cloneTop.querySelector(".fa-heart");
  let heartCheckbox = cloneTop.querySelector(".heart-checkbox");
  let pokeCheck = favoritePkmn.filter((pokeFil) => pokeFil.nombre === pokemon.nombre)[0];
  if (pokeCheck) {
    heartCheckbox.setAttribute("checked", "");
    heartCheckbox.setAttribute("data-check", "fa-solid");
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid");
  }
};

const printBgCard = (pokemon, card) => {
  switch (pokemon.tipo1) {
    case "fuego":
      card.classList.add("bg-fuego");
      break;
    case "planta":
      card.classList.add("bg-planta");
      break;
    case "agua":
      card.classList.add("bg-agua");
      break;
    case "electrico":
      card.classList.add("bg-electrico");
      break;
    case "lucha":
      card.classList.add("bg-lucha");
      break;
    case "psiquico":
      card.classList.add("bg-psiquico");
      break;
    default:
      card.classList.add("bg-notColor");
  }
};

function validateTipo2(pokemon, cloneTop) {
  let type2Elem = cloneTop.querySelector(".card-txt-2");
  pokemon.tipo2.length === 0 && type2Elem.classList.add("hidden");
}

////////////////////////////////////////////////
// DECLARACIÓN FUNCIONES PARA LOCAL STORAGE
////////////////////////////////////////////////

const addLocalStorage = (namePkmn) => {
  let objPkmn = POKEDEX.findPokemon("nombre", namePkmn);
  let objPkmnFav = favoritePkmn.filter((pokemon) => pokemon.nombre === namePkmn)[0];
  favoritePkmn.length ? !objPkmnFav && favoritePkmn.push(objPkmn) : favoritePkmn.push(objPkmn);
  favoritePkmnString = JSON.stringify(favoritePkmn);
  localStorage.setItem("favoritos", favoritePkmnString);
};

const deleteLocalStorage = (namePkmn) => {
  let objPkmnFav = favoritePkmn.filter((pokemon) => pokemon.nombre === namePkmn)[0];
  let index = favoritePkmn.indexOf(objPkmnFav);
  favoritePkmn.splice(index, 1);
  favoritePkmnString = JSON.stringify(favoritePkmn);
  localStorage.setItem("favoritos", favoritePkmnString);
};
