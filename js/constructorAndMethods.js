////////////////////////////////////////////////
//CONSTRUCTOR Y MÉTODOS
////////////////////////////////////////////////

class Pokemon {
  constructor(nombre, numero, tipo1, tipo2, ps, atq, def, atqEsp, defEsp, speed, img) {
    this.nombre = nombre;
    this.numero = numero;
    this.tipo1 = tipo1;
    this.tipo2 = tipo2;
    this.ps = ps;
    this.atq = atq;
    this.def = def;
    this.atqEsp = atqEsp;
    this.defEsp = defEsp;
    this.speed = speed;
    this.img = img;
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
