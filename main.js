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

  filterByType(type) {
    return this.lista.filter((pokemon) => pokemon.tipo1 === type || pokemon.tipo2 === type);
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
//DECLARACIÓN FUNCIONES PARA FUNCIONAMIENTO APP
////////////////////////////////////////////////

let a1;
let cardContainer = document.createElement("div");
const parent = document.getElementById("parent");
const button = document.getElementById("button");
button.addEventListener("click", app);
const title = document.getElementById("titulo");

function printPokeList(pokemons) {
  for (let pokemon of pokemons) {
    let cardContainer = document.createElement("div");
    cardContainer.innerHTML = `<p><b>Nombre:</b> ${pokemon.nombre}</p>
      <p><b>Número:</b> ${pokemon.numero}</p>
      <p><b>tipo:</b> ${pokemon.tipo1} ${pokemon.tipo2}</p>
      <p><b>Región:</b> ${pokemon.region}</p>
      <p><b>PS:</b> ${pokemon.ps}</p>
      <p><b>Ataque:</b> ${pokemon.atq}</p>
      <p><b>Defensa:</b> ${pokemon.def}</p>
      <p><b>Ataque especial:</b> ${pokemon.atqEsp}</p>
      <p><b>Defensa especial:</b> ${pokemon.defEsp}</p>
      <p><b>Velocidad:</b> ${pokemon.speed}</p> <br><br>`;
    parent.appendChild(cardContainer);
  }
}

function printOne(pokemon) {
  cardContainer.innerHTML = `<p><b>Nombre:</b> ${pokemon.nombre}</p>
        <p><b>Número:</b> ${pokemon.numero}</p>
        <p><b>tipo:</b> ${pokemon.tipo1} ${pokemon.tipo2}</p>
        <p><b>Región:</b> ${pokemon.region}</p>
        <p><b>PS:</b> ${pokemon.ps}</p>
        <p><b>Ataque:</b> ${pokemon.atq}</p>
        <p><b>Defensa:</b> ${pokemon.def}</p>
        <p><b>Ataque especial:</b> ${pokemon.atqEsp}</p>
        <p><b>Defensa especial:</b> ${pokemon.defEsp}</p>
        <p><b>Velocidad:</b> ${pokemon.speed}</p> <br><br>`;
  parent.append(cardContainer);
}
function start() {
  a1 = prompt(`¿Qué quieres hacer?\n
  1- Mostrar los pokemon disponibles
  2- Buscar por nombre
  3- Buscar por número
  4- Filtrar por tipo
  5- Ordenarlos por estadística. \n
  (Escribe el número de lo que quieras hacer)`);
  return a1;
}

function deleteChild() {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function app() {
  start(a1);
  deleteChild();
  switch (a1) {
    case "1":
      console.log(POKEDEX);
      printPokeList(POKEDEX.sortStatUp("numero"));
      title.innerText = "Pokedex";
      break;

    case "2":
      let a2 = prompt("Qué pokemon quieres buscar?");
      let res2 = POKEDEX.findPokemon("nombre", a2);
      printOne(res2);
      console.log(POKEDEX.findPokemon("nombre", a2));
      title.innerText = `${res2.nombre}`;
      break;

    case "3":
      let a3 = prompt("Qué pokemon quieres buscar?");
      let res3 = POKEDEX.findPokemon("numero", parseInt(a3));
      printOne(res3);
      console.log(POKEDEX.findPokemon("numero", parseInt(a3)));
      title.innerText = `${res3.nombre}`;
      break;

    case "4":
      let a4 = prompt("Escribe el tipo que quieres filtrar");
      a4 = a4.toLowerCase();
      let res4 = POKEDEX.filterByType(a4);
      printPokeList(res4);
      console.log(POKEDEX.filterByType(a4));
      title.innerText = `Pokemon's tipo ${a4.toLowerCase()}`;
      break;

    case "5":
      let a5 = prompt(`Por qué estadística quieres filtrar?\n
      1- PS
      2- ATAQUE
      3- DEFENSA
      4- ATAQUE ESPECIAL
      5- DEFENSA ESPECIAL
      6- VELOCIDAD
      (Escribe el número)`);

      switch (a5) {
        case "1":
          printPokeList(POKEDEX.sortStatDown("ps"));
          console.log(POKEDEX.sortStatDown("ps"));
          title.innerText = "Pokemon's ordenados por PS";
          break;

        case "2":
          printPokeList(POKEDEX.sortStatDown("atq"));
          console.log(POKEDEX.sortStatDown("atq"));
          title.innerText = "Pokemon's ordenados por Ataque";
          break;

        case "3":
          printPokeList(POKEDEX.sortStatDown("def"));
          console.log(POKEDEX.sortStatDown("def"));
          title.innerText = "Pokemon's ordenados por Defensa";
          break;

        case "4":
          printPokeList(POKEDEX.sortStatDown("atqEsp"));
          console.log(POKEDEX.sortStatDown("atqEsp"));
          title.innerText = "Pokemon's ordenados por Ataque Especual";
          break;

        case "5":
          printPokeList(POKEDEX.sortStatDown("defEsp"));
          console.log(POKEDEX.sortStatDown("defEsp"));
          title.innerText = "Pokemon's ordenados por Defensa Especial";
          break;

        case "6":
          printPokeList(POKEDEX.sortStatDown("speed"));
          console.log(POKEDEX.sortStatDown("speed"));
          title.innerText = "Pokemon's ordenados por Velocidad";
          break;

        case null:
          alert("Gracias por usar la mini pokedex");
      }
      break;

    case null:
      alert("Gracias por usar la mini pokedex");
  }
}

////////////////////////////////////////////////
//EJECUCIÓN APP
////////////////////////////////////////////////

alert("Hola, esta es una mini pokedex");
app();
