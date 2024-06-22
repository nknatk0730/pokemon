export const getAllPokemons = async () => {
  const maxPokemons = 151;

  return Promise.all(
    [...Array(maxPokemons)].map(async (_, index) => {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index + 1}`,
        {
          method: "GET",
        }
      ).then((res) => {
        return res.json();
      });

      return pokemon;
    })
  );
}

export const getPokemon = async (id: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
  }).then((res) => {
    return res.json();
  })
}