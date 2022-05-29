const POKEDEX = new Pokedex();

const data = async (num) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  const dataPkmn = await response.json();
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
};

for (let i = 1; i <= 898; i++) {
  data(i);
}
