//inicializando pokedex
const POKEDEX = new Pokedex();

////////////////////////////////////////////////
//PUSH DE OBJETOS PARA BBDD DE LA POKEDEX
////////////////////////////////////////////////

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

//favoritePkmn.length ? !objPkmnFav && favoritePkmn.push(objPkmn) : favoritePkmn.push(objPkmn);
