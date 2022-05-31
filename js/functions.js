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
  templateCardTop.querySelector(".img").setAttribute("src", pokemon.img);
  templateCardTop.querySelector(".card-title").textContent = pokemon.nombre;
  templateCardTop.querySelector(".card-txt-1").textContent = pokemon.tipo1;
  templateCardTop.querySelector(".card-txt-2").textContent = pokemon.tipo2;
  templateCardTop.querySelector(".stat-ps").textContent = pokemon.ps;
  templateCardTop.querySelector(".stat-speed").textContent = pokemon.speed;
  templateCardTop.querySelector(".stat-atq").textContent = pokemon.atq;
  templateCardTop.querySelector(".stat-def").textContent = pokemon.def;
  templateCardTop.querySelector(".stat-atqEsp").textContent = pokemon.atqEsp;
  templateCardTop.querySelector(".stat-defEsp").textContent = pokemon.defEsp;
};

const printPkmnList = (pokemons) => {
  cardsParent.innerHTML = "";
  pokemons.forEach((pokemon) => {
    getCardElements(pokemon);
    const cloneTop = templateCardTop.cloneNode(true);
    validateTipo2(pokemon, cloneTop);
    printBgCard(
      pokemon,
      cloneTop.firstElementChild,
      cloneTop.querySelectorAll(".stat-txt"),
      cloneTop.querySelector(".card-typeIcon")
    );
    addRegularHeartToCards(cloneTop);
    addSolidHeartCardsInLS(cloneTop, pokemon);
    fragment.append(cloneTop);
  });
  cardsParent.appendChild(fragment);
};

const printPkmn = (pokemon) => {
  cardsParent.innerHTML = "";
  getCardElements(pokemon);
  const cloneTop = templateCardTop.cloneNode(true);
  validateTipo2(pokemon, cloneTop);
  printBgCard(
    pokemon,
    cloneTop.firstElementChild,
    cloneTop.querySelectorAll(".stat-txt"),
    cloneTop.querySelector(".card-typeIcon")
  );
  addRegularHeartToCards(cloneTop);
  addSolidHeartCardsInLS(cloneTop, pokemon);
  fragment.append(cloneTop);
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

const printBgCard = (pokemon, card, stat, icon) => {
  switch (pokemon.tipo1) {
    case "normal":
      card.classList.add("bg-normal");
      stat.forEach((ele) => {
        ele.classList.add("stat-normal");
      });
      icon.setAttribute("src", "./assets/icons/normal.svg");
      break;
    case "fighting":
      card.classList.add("bg-lucha");
      stat.forEach((ele) => {
        ele.classList.add("stat-lucha");
      });
      icon.setAttribute("src", "./assets/icons/fighting.svg");
      break;
    case "flying":
      card.classList.add("bg-volador");
      stat.forEach((ele) => {
        ele.classList.add("stat-volador");
      });
      icon.setAttribute("src", "./assets/icons/flying.svg");
      break;
    case "poison":
      card.classList.add("bg-veneno");
      stat.forEach((ele) => {
        ele.classList.add("stat-veneno");
      });
      icon.setAttribute("src", "./assets/icons/poison.svg");
      break;
    case "ground":
      card.classList.add("bg-tierra");
      stat.forEach((ele) => {
        ele.classList.add("stat-tierra");
      });
      icon.setAttribute("src", "./assets/icons/ground.svg");
      break;
    case "rock":
      card.classList.add("bg-roca");
      stat.forEach((ele) => {
        ele.classList.add("stat-roca");
      });
      icon.setAttribute("src", "./assets/icons/rock.svg");
      break;
    case "bug":
      card.classList.add("bg-bicho");
      stat.forEach((ele) => {
        ele.classList.add("stat-bicho");
      });
      icon.setAttribute("src", "./assets/icons/bug.svg");
      break;
    case "ghost":
      card.classList.add("bg-fantasma");
      stat.forEach((ele) => {
        ele.classList.add("stat-fantasma");
      });
      icon.setAttribute("src", "./assets/icons/ghost.svg");
      break;
    case "steel":
      card.classList.add("bg-acero");
      stat.forEach((ele) => {
        ele.classList.add("stat-acero");
      });
      icon.setAttribute("src", "./assets/icons/steel.svg");
      break;
    case "fire":
      card.classList.add("bg-fuego");
      stat.forEach((ele) => {
        ele.classList.add("stat-fuego");
      });
      icon.setAttribute("src", "./assets/icons/fire.svg");
      break;
    case "grass":
      card.classList.add("bg-planta");
      stat.forEach((ele) => {
        ele.classList.add("stat-planta");
      });
      icon.setAttribute("src", "./assets/icons/grass.svg");
      break;
    case "water":
      card.classList.add("bg-agua");
      stat.forEach((ele) => {
        ele.classList.add("stat-agua");
      });
      icon.setAttribute("src", "./assets/icons/water.svg");
      break;
    case "electric":
      card.classList.add("bg-electrico");
      stat.forEach((ele) => {
        ele.classList.add("stat-electrico");
      });
      icon.setAttribute("src", "./assets/icons/electric.svg");
      break;
    case "psychic":
      card.classList.add("bg-psiquico");
      stat.forEach((ele) => {
        ele.classList.add("stat-psiquico");
      });
      icon.setAttribute("src", "./assets/icons/psychic.svg");
      break;
    case "ice":
      card.classList.add("bg-hielo");
      stat.forEach((ele) => {
        ele.classList.add("stat-hielo");
      });
      icon.setAttribute("src", "./assets/icons/ice.svg");
      break;
    case "dragon":
      card.classList.add("bg-dragon");
      stat.forEach((ele) => {
        ele.classList.add("stat-dragon");
      });
      icon.setAttribute("src", "./assets/icons/dragon.svg");
      break;
    case "dark":
      card.classList.add("bg-siniestro");
      stat.forEach((ele) => {
        ele.classList.add("stat-siniestro");
      });
      icon.setAttribute("src", "./assets/icons/dark.svg");
      break;
    case "fairy":
      card.classList.add("bg-hada");
      stat.forEach((ele) => {
        ele.classList.add("stat-hada");
      });
      icon.setAttribute("src", "./assets/icons/fairy.svg");
      break;
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
