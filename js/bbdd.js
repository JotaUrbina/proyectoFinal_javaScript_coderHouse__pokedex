/* const POKEDEX = new Pokedex();

const data = async () => {
  console.log("start");
  const response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`)).json();
  // console.log(response);
  const pokemones = await response.results;

  // console.log(pokemones);
  pokemones.forEach(async (pokemon) => {
    const response2 = await fetch(pokemon.url);
    const dataPkmn = await response2.json();
    console.log(dataPkmn);
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
};

data();
 */
