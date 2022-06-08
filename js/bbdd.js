async function getPokemon(num) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  return await response.json();
}

async function loadData() {
  try {
    let pokemons = [];
    for (let i = 1; i <= 151; i++) {
      const pokemon = await getPokemon(i);
      pokemons.push(createPokemon(pokemon));
    }
    return pokemons;
  } catch (e) {
    console.log(e)
  }
}

function createPokemon(pokemon) {
  return new Pokemon(
      pokemon.name,
      pokemon.id, //número
      pokemon.types[0].type.name, //tipo1
      pokemon.types.length > 1 ? pokemon.types[1].type.name : "",
      pokemon.stats[0].base_stat, //ps
      pokemon.stats[1].base_stat, //atq
      pokemon.stats[2].base_stat, //def
      pokemon.stats[3].base_stat, //atq esp
      pokemon.stats[4].base_stat, //def esp
      pokemon.stats[5].base_stat, //speed
      pokemon.sprites.other[`official-artwork`].front_default
  )
}
