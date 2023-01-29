import type { Pokemon } from "../../types/types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (id: number): Promise<Pokemon[]> => {
  const pokemons = [];
  for (let i = 1; i <= id; i++) {
    const response = fetch(`${apiUrl}${i}`);
    pokemons.push(response);
  }

  const notPromisesPokemons = await Promise.all(pokemons);
  const resolvedPokemons = notPromisesPokemons.map(
    async (notPromisesPokemons) => notPromisesPokemons.json()
  );

  const pokemonInfo = (await Promise.all(resolvedPokemons)) as Pokemon[];

  return pokemonInfo;
};

const pokemons = await getPokemons(150);

export default getPokemons;

/* 
Const detailPoke = pokemons.map((pokemon) => pokemon.name);
console.log(detailPoke); */
