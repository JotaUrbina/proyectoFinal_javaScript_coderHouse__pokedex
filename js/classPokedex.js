class Pokedex {
  constructor(pokemons) {
    this.lista = pokemons;
  }

  findPokemon(property, value) {
    return this.lista.find((pokemon) => pokemon[property] === value);
  }

  filterByType(types) {
    return this.lista.filter((pokemon) => types.includes(pokemon.tipo1) || types.includes(pokemon.tipo2));
  }

  sortStatRangeWithValue(property, arrange, value1, value2) {
    let filterStat;
    if (arrange === "mayor") {
      filterStat = this.lista.filter((pokemon) => value1 <= pokemon[property] && value2 >= pokemon[property]);
      return filterStat.sort((pokemonA, pokemonB) => pokemonA[property] - pokemonB[property]);
    } else if (arrange === "menor") {
      filterStat = this.lista.filter((pokemon) => value1 <= pokemon[property] && value2 >= pokemon[property]);
      return filterStat.sort((pokemonA, pokemonB) => pokemonB[property] - pokemonA[property]);
    }
  }

  /////////////////////////////////////////////////////////////////////
  // NO USADOS EN EL PROYECTO, PERO PENSADOS PARA DARLE ESCALABILIDAD
  /////////////////////////////////////////////////////////////////////
  sortUp(property) {
    return this.lista.sort((pokemonA, pokemonB) => pokemonA[property] - pokemonB[property]);
  }

  sortDown(property) {
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
}
