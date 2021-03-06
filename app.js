let POKEDEX = undefined;

function getDefaultInfo() {
  return [
    POKEDEX.findPokemon("numero", 3),
    POKEDEX.findPokemon("numero", 6),
    POKEDEX.findPokemon("numero", 9),
    POKEDEX.findPokemon("numero", 25),
    POKEDEX.findPokemon("numero", 150),
    POKEDEX.findPokemon("numero", 151),
  ];
}

loadData().then((pokemons) => {
  POKEDEX = new Pokedex(pokemons);

  printPkmnList(getDefaultInfo());

  POKEDEX.lista.forEach((pokemon) => {
    const optionDatalist = document.createElement("option");
    optionDatalist.setAttribute("value", pokemon.nombre);
    fragment.append(optionDatalist);
  });
  datalistParent.append(fragment);
  getPokemonNames();
  openAnimation();
});
