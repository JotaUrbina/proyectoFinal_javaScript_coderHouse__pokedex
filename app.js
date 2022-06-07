/* const start = (begin) => {
  printPkmnList(begin);
}; //declaracion

const POKEDEX = new Pokedex();

const data = async () => {
  console.log("start");
  const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`)).json();
  const pokemones = await response.results;
  pokemones.forEach(async (pokemon) => {
    const response2 = await fetch(pokemon.url);
    const dataPkmn = await response2.json();
    POKEDEX.pushPokemon(
      new Pokemon(
        dataPkmn.name,
        dataPkmn.id, //número
        dataPkmn.types[0].type.name, //tipo1
        dataPkmn.types.length > 1 ? dataPkmn.types[1].type.name : "", //tipo2
        dataPkmn.stats[0].base_stat, //ps
        dataPkmn.stats[1].base_stat, //atq
        dataPkmn.stats[2].base_stat, //def
        dataPkmn.stats[3].base_stat, //atq esp
        dataPkmn.stats[4].base_stat, //def esp
        dataPkmn.stats[5].base_stat, //speed
        dataPkmn.sprites.other[`official-artwork`].front_default //img
      )
    );
  });
  console.log(POKEDEX.lista[12]);
  console.log(POKEDEX.lista.find((pokemon) => pokemon["numero"] === 6));
  console.log(POKEDEX.findPokemon("numero", 9));
  let begin = await [
    POKEDEX.findPokemon("numero", 3),
    POKEDEX.findPokemon("numero", 6),
    POKEDEX.findPokemon("numero", 9),
    POKEDEX.findPokemon("numero", 25),
    POKEDEX.findPokemon("numero", 150),
    POKEDEX.findPokemon("numero", 151),
  ];
  start(begin);
  openAnimation();
};

window.onload = () => {
  //data();
  POKEDEX.lista.forEach((pokemon) => {
    const optionDatalist = document.createElement("option");
    optionDatalist.setAttribute("value", pokemon.nombre);
    fragment.append(optionDatalist);
  });
  datalistParent.append(fragment);
  getPokemonNames();
};
 */

let begin = [
  POKEDEX.findPokemon("numero", 3),
  POKEDEX.findPokemon("numero", 6),
  POKEDEX.findPokemon("numero", 9),
  POKEDEX.findPokemon("numero", 25),
  POKEDEX.findPokemon("numero", 150),
  POKEDEX.findPokemon("numero", 151),
];
const start = (begin) => {
  printPkmnList(begin);
};

window.onload = () => {
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
