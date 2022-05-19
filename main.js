class Pokemon {
  constructor(nombre, numero, tipo1, tipo2, region, ps, atq, def, atqEsp, defEsp, speed) {
    this.nombre = nombre;
    this.numero = numero;
    this.tipo1 = tipo1;
    this.tipo2 = tipo2;
    this.region = region;
    this.ps = ps;
    this.atq = atq;
    this.def = def;
    this.atqEsp = atqEsp;
    this.defEsp = defEsp;
    this.speed = speed;
  }
}

class Pokedex {
  constructor() {
    this.lista = [];
  }
  pushPokemon(pokemon) {
    return this.lista.push(pokemon);
  }
  deletePokemon(property, value) {
    this.lista = this.lista.filter((pokemon) => pokemon[property] !== value);
  }

  findPokemon(property, value) {
    return this.lista.find((pokemon) => pokemon[property] === value);
  }

  filterByType(types) {
    return this.lista.filter((pokemon) => types.includes(pokemon.tipo1) || types.includes(pokemon.tipo2));
  }

  sortStatUp(property) {
    return this.lista.sort((pokemonA, pokemonB) => pokemonA[property] - pokemonB[property]);
  }

  sortStatDown(property) {
    return this.lista.sort((pokemonA, pokemonB) => pokemonB[property] - pokemonA[property]);
  }

  sortStatUpWithValue(property, limit, value) {
    let filterStat;
    if (limit === "max") {
      filterStat = this.lista.filter((pokemon) => pokemon[property] <= value);
      return filterStat.sort((pokemonA, pokemonB) => pokemonA[property] - pokemonB[property]);
    } else if (limit === "min") {
      filterStat = this.lista.filter((pokemon) => pokemon[prop] >= val);
      return filterStat.sort((pokemonA, pokemonB) => pokemonA[property] - pokemonB[property]);
    }
  }

  sortStatDownWithValue(property, limit, value) {
    let filterStat;
    if (limit === "max") {
      filterStat = this.lista.filter((pokemon) => pokemon[property] <= value);
      return filterStat.sort((pokemonA, pokemonB) => pokemonB[property] - pokemonA[property]);
    } else if (limit === "min") {
      filterStat = this.lista.filter((pokemon) => pokemon[prop] >= value);
      return filterStat.sort((pokemonA, pokemonB) => pokemonB[property] - pokemonA[property]);
    }
  }

  sortStatRangeWithValue(property, arrange, value1, value2) {
    let filterStat;
    if (arrange === "mayor") {
      filterStat = this.lista.filter((pokemon) => value1 < pokemon[property] && value2 > pokemon[property]);
      return filterStat.sort((pokemonA, pokemonB) => pokemonA[property] - pokemonB[property]);
    } else if (arrange === "menor") {
      filterStat = this.lista.filter((pokemon) => value1 < pokemon[property] && value2 > pokemon[property]);
      return filterStat.sort((pokemonA, pokemonB) => pokemonB[property] - pokemonA[property]);
    }
  }
}

////////////////////////////////////////////////
//PUSH DE OBJETOS PARA BBDD DE LA POKEDEX
////////////////////////////////////////////////

const POKEDEX = new Pokedex(); //inicializando pokedex

POKEDEX.pushPokemon(new Pokemon("venusaur", 3, "planta", "veneno", "kanto", 80, 82, 83, 100, 100, 80));
POKEDEX.pushPokemon(new Pokemon("charizard", 6, "fuego", "volador", "kanto", 78, 84, 78, 109, 85, 100));
POKEDEX.pushPokemon(new Pokemon("blastoise", 9, "agua", "", "kanto", 79, 83, 100, 85, 105, 78));
POKEDEX.pushPokemon(new Pokemon("pidgeot", 18, "normal", "volador", "kanto", 83, 80, 75, 70, 70, 101));
POKEDEX.pushPokemon(new Pokemon("pikachu", 25, "electrico", "", "kanto", 35, 55, 40, 30, 30, 90));
POKEDEX.pushPokemon(new Pokemon("nidoqueen", 31, "veneno", "tierra", "kanto", 90, 92, 87, 75, 85, 76));
POKEDEX.pushPokemon(new Pokemon("jigglypuff", 39, "normal", "hada", "kanto", 115, 45, 20, 45, 25, 20));
POKEDEX.pushPokemon(new Pokemon("arcanine", 59, "fuego", "", "kanto", 90, 110, 80, 100, 80, 95));
POKEDEX.pushPokemon(new Pokemon("poliwrath", 62, "agua", "lucha", "kanto", 90, 95, 95, 70, 90, 70));
POKEDEX.pushPokemon(new Pokemon("machamp", 68, "lucha", "", "kanto", 90, 130, 80, 65, 85, 55));
POKEDEX.pushPokemon(new Pokemon("golem", 76, "roca", "tierra", "kanto", 80, 120, 130, 55, 65, 45));
POKEDEX.pushPokemon(new Pokemon("muk", 89, "veneno", "", "kanto", 105, 105, 75, 65, 100, 50));
POKEDEX.pushPokemon(new Pokemon("gengar", 94, "fantasma", "veneno", "kanto", 60, 65, 60, 130, 75, 110));
POKEDEX.pushPokemon(new Pokemon("exeggutor", 103, "planta", "psiquico", "kanto", 95, 95, 85, 125, 75, 55));
POKEDEX.pushPokemon(new Pokemon("marowak", 105, "tierra", "", "kanto", 60, 80, 110, 50, 80, 45));
POKEDEX.pushPokemon(new Pokemon("rhydon", 112, "tierra", "roca", "kanto", 105, 130, 120, 45, 45, 40));
POKEDEX.pushPokemon(new Pokemon("mr. mime", 122, "psiquico", "hada", "kanto", 40, 45, 65, 100, 120, 90));
POKEDEX.pushPokemon(new Pokemon("scyther", 123, "bicho", "volador", "kanto", 70, 110, 80, 55, 80, 105));
POKEDEX.pushPokemon(new Pokemon("jynx", 124, "hielo", "psiquico", "kanto", 65, 50, 35, 115, 95, 95));
POKEDEX.pushPokemon(new Pokemon("pinsir", 127, "bicho", "", "kanto", 65, 125, 100, 55, 70, 85));
POKEDEX.pushPokemon(new Pokemon("gyarados", 130, "agua", "volador", "kanto", 95, 125, 79, 60, 100, 81));
POKEDEX.pushPokemon(new Pokemon("eevee", 133, "normal", "", "kanto", 55, 55, 50, 45, 65, 55));
POKEDEX.pushPokemon(new Pokemon("vaporeon", 134, "agua", "", "kanto", 130, 65, 60, 110, 95, 65));
POKEDEX.pushPokemon(new Pokemon("jolteon", 135, "electrico", "", "kanto", 65, 65, 60, 110, 95, 130));
POKEDEX.pushPokemon(new Pokemon("flareon", 136, "fuego", "", "kanto", 65, 130, 60, 95, 110, 65));
POKEDEX.pushPokemon(new Pokemon("aerodactyl", 142, "roca", "volador", "kanto", 80, 105, 65, 60, 75, 130));
POKEDEX.pushPokemon(new Pokemon("snorlax", 143, "normal", "", "kanto", 160, 110, 65, 65, 110, 30));
POKEDEX.pushPokemon(new Pokemon("articuno", 144, "hielo", "volador", "kanto", 90, 85, 100, 95, 125, 85));
POKEDEX.pushPokemon(new Pokemon("zapdos", 145, "electrico", "volador", "kanto", 90, 90, 85, 125, 90, 100));
POKEDEX.pushPokemon(new Pokemon("moltres", 146, "fuego", "volador", "kanto", 90, 100, 90, 125, 85, 90));
POKEDEX.pushPokemon(new Pokemon("dragonite", 149, "dragon", "volador", "kanto", 91, 134, 95, 100, 100, 80));
POKEDEX.pushPokemon(new Pokemon("mewtwo", 150, "psiquico", "", "kanto", 106, 110, 90, 154, 90, 130));
POKEDEX.pushPokemon(new Pokemon("mew", 151, "psiquico", "", "kanto", 100, 100, 100, 100, 100, 100));

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

////////////////////////////////////////////////
// DECLARACIÓN FUNCIONES PARA EL DOM
////////////////////////////////////////////////

function getCardElements(pokemon) {
  templateCardTop.querySelector(".card-title").textContent = pokemon.nombre;
  templateCardTop.querySelector(".card-txt-1").textContent = pokemon.tipo1;
  templateCardTop.querySelector(".card-txt-2").textContent = pokemon.tipo2;
  templateCardBottom.querySelector(".stat-ps").textContent = pokemon.ps;
  templateCardBottom.querySelector(".stat-speed").textContent = pokemon.speed;
  templateCardBottom.querySelector(".stat-atq").textContent = pokemon.atq;
  templateCardBottom.querySelector(".stat-def").textContent = pokemon.def;
  templateCardBottom.querySelector(".stat-atqEsp").textContent = pokemon.atqEsp;
  templateCardBottom.querySelector(".stat-defEsp").textContent = pokemon.defEsp;
}

function printPkmnList(pokemons) {
  cardsParent.innerHTML = "";
  pokemons.forEach((pokemon) => {
    getCardElements(pokemon);
    const cloneTop = templateCardTop.cloneNode(true);
    const cloneBottom = templateCardBottom.cloneNode(true);
    validateTipo2(pokemon, cloneTop);
    printBgCard(pokemon, cloneTop.firstElementChild);
    addAttributeCheckbox(cloneTop);
    cloneTop.querySelector(".heart-checkbox").setAttribute("name", pokemon.nombre);
    //
    let heart = cloneTop.querySelector(".fa-heart");
    let checkHeart = cloneTop.querySelector(".heart-checkbox");
    let pokeCheck = favoritePkmn.filter((pokeFil) => pokeFil.nombre === pokemon.nombre)[0];
    if (pokeCheck) {
      checkHeart.setAttribute("checked", "");
      checkHeart.setAttribute("data-check", "fa-solid");
      heart.classList.add(checkHeart.getAttribute("data-check"));
    }
    //
    fragment.append(cloneTop, cloneBottom);
  });
  cardsParent.appendChild(fragment);
}

function printPkmn(pokemon) {
  cardsParent.innerHTML = "";
  getCardElements(pokemon);
  const cloneTop = templateCardTop.cloneNode(true);
  const cloneBottom = templateCardBottom.cloneNode(true);
  validateTipo2(pokemon, cloneTop);
  printBgCard(pokemon, cloneTop.firstElementChild);
  addAttributeCheckbox(cloneTop);
  fragment.append(cloneTop, cloneBottom);
  //
  let heart = cloneTop.querySelector(".fa-heart");
  let checkHeart = cloneTop.querySelector(".heart-checkbox");
  let pokeCheck = favoritePkmn.filter((pokeFil) => pokeFil.nombre === pokemon.nombre)[0];
  if (pokeCheck) {
    checkHeart.setAttribute("checked", "");
    checkHeart.setAttribute("data-check", "fa-solid");
    heart.classList.add(checkHeart.getAttribute("data-check"));
  }
  //
  cardsParent.appendChild(fragment);
}

function printBgCard(pokemon, card) {
  if (pokemon.tipo1 === "fuego") {
    card.classList.add("bg-fuego");
  } else if (pokemon.tipo1 === "planta") {
    card.classList.add("bg-planta");
  } else if (pokemon.tipo1 === "agua") {
    card.classList.add("bg-agua");
  } else if (pokemon.tipo1 === "electrico") {
    card.classList.add("bg-electrico");
  } else if (pokemon.tipo1 === "lucha") {
    card.classList.add("bg-lucha");
  } else if (pokemon.tipo1 === "psiquico") {
    card.classList.add("bg-psiquico");
  } else {
    card.classList.add("bg-notColor");
  }
}

function validateTipo2(pokemon, cloneTop) {
  if (pokemon.tipo2.length === 0) {
    cloneTop.querySelector(".card-txt-2").classList.add("hidden");
  }
}

function addAttributeCheckbox(cloneTop) {
  cloneTop.querySelector(".heart-checkbox").setAttribute("data-check", "fa-regular");
  cloneTop
    .querySelector(".fa-heart")
    .classList.add(cloneTop.querySelector(".heart-checkbox").getAttribute("data-check"));
  cloneTop.querySelector(".fa-heart").classList.add(localStorage.getItem("check"));
}

////////////////////////////////////////////////
// DECLARACIÓN FUNCIONES PARA LOCAL STORAGE
////////////////////////////////////////////////

function addLocalStorage(namePkmn) {
  let objPkmn = POKEDEX.findPokemon("nombre", namePkmn);
  let objPkmnFav = favoritePkmn.filter((pokemon) => pokemon.nombre === namePkmn)[0];
  if (favoritePkmn.length) {
    if (!objPkmnFav) {
      favoritePkmn.push(objPkmn);
    }
  } else {
    favoritePkmn.push(objPkmn);
  }
  favoritePkmnString = JSON.stringify(favoritePkmn);
  localStorage.setItem("favoritos", favoritePkmnString);
}

function deleteLocalStorage(namePkmn) {
  let objPkmnFav = favoritePkmn.filter((pokemon) => pokemon.nombre === namePkmn)[0];
  let index = favoritePkmn.indexOf(objPkmnFav);
  favoritePkmn.splice(index, 1);
  favoritePkmnString = JSON.stringify(favoritePkmn);
  localStorage.setItem("favoritos", favoritePkmnString);
}

////////////////////////////////////////////////
// EVENTOS
////////////////////////////////////////////////

//evento FORMULARIO
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

formulario.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "BUTTON" && e.target != formulario.querySelector("#favorite")) {
    e.target.nextElementSibling.classList.toggle("desplegado");
  }
});

//evento sección NOMBRE
nameParent.addEventListener("input", (e) => {
  if (e.target && (e.target.tagName === "DATALIST" || e.target.tagName === "INPUT")) {
    let value = e.target.value;
    let res = POKEDEX.findPokemon("nombre", value);
    printPkmn(res);
  }
});

//evento sección NÚMERO
numParent.addEventListener("input", (e) => {
  if (e.target && e.target.tagName === "INPUT") {
    let value = Number(e.target.value);
    let res = POKEDEX.findPokemon("numero", value);
    printPkmn(res);
  }
});

//evento sección TIPO
typeParent.addEventListener("change", () => {
  let res = POKEDEX.filterByType(getChecked());
  printPkmnList(res);
});

function getChecked() {
  let checkedValue = [];
  let inputElements = document.querySelectorAll("#typeCheckbox-container input");
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue.push(inputElements[i].value);
    }
  }
  return checkedValue;
}

//evento sección STAT ++ RANGE
let radioStatValue = statParent.childNodes.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    rangeContainer.classList.add("desplegado");
    radioStatValue = e.target.value;
  });
});

rangeContainer.addEventListener("input", (e) => {
  if (e.target && e.target.tagName === "INPUT") {
    e.target.value;
    let value1 = minRange.value;
    let value2 = maxRange.value;
    let res = POKEDEX.sortStatRangeWithValue(radioStatValue, "menor", value1, value2);
    printPkmnList(res);
  }
});

// evento MIS FAVORITOS
formulario.addEventListener("click", (e) => {
  if (e.target === formulario.querySelector("#favorite")) {
    printPkmnList(favoritePkmn);
  }
});

// evento DEPLOY STAT
cardsParent.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentElement.nextElementSibling.classList.toggle("card-stat__desplegado");
  }
});

// evento CHECKBOX-CORAZÓN de las cards renderizadas
cardsParent.addEventListener("change", (e) => {
  if (e.target.nodeName === "INPUT") {
    let heart = e.target.previousElementSibling;
    let namePkmn = e.target.parentElement.nextElementSibling.textContent;

    if (e.target.checked) {
      addLocalStorage(namePkmn);
      heart.classList.remove(e.target.getAttribute("data-check"));
      e.target.setAttribute("data-check", "fa-solid");
      heart.classList.add(e.target.getAttribute("data-check"));
    } else if (e.target.checked === false) {
      deleteLocalStorage(namePkmn);
      heart.classList.remove(e.target.getAttribute("data-check"));
      e.target.setAttribute("data-check", "fa-regular");
      heart.classList.add(e.target.getAttribute("data-check"));
    }
  }
});
