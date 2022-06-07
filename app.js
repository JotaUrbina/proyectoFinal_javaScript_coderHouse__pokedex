let begin = [
  POKEDEX.findPokemon("numero", 3),
  POKEDEX.findPokemon("numero", 6),
  POKEDEX.findPokemon("numero", 9),
  POKEDEX.findPokemon("numero", 25),
  POKEDEX.findPokemon("numero", 150),
  POKEDEX.findPokemon("numero", 151),
];

window.onload = () => {
  /*   let begin = POKEDEX.filterByNum(1, 20);
  const start = (begin) => {
    printPkmnList(begin);
  };
  start(begin); */
  const start = (begin) => {
    printPkmnList(begin);
  };
  start(begin);

  POKEDEX.lista.forEach((pokemon) => {
    const optionDatalist = document.createElement("option");
    optionDatalist.setAttribute("value", pokemon.nombre);
    fragment.append(optionDatalist);
  });
  datalistParent.append(fragment);
  getPokemonNames();
  openAnimation();
};
