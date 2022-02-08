const BASE_URL = 'https://pokeapi.co/api/v2/berry/';

function fetchPokemonById(pokemonId) {
  return fetch(`${BASE_URL}${pokemonId}`).then(responce => {
    // console.log(responce.json());
    return responce.json();
  });
}

export default { fetchPokemonById };
