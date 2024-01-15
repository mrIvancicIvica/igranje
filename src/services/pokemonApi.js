export const fetchPokemon = (pokemonName) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
	return fetch(url).then((response) => resolveResponse(response));
};

export const fetchPokemonColor = () => {
	const url = `https://pokeapi.co/api/v2/pokemon-color/red/`;
	return fetch(url).then((response) => resolveResponse(response));
};

function resolveResponse(response) {
	if (response.status === 200) return response.json();
	if (response.status === 404) throw new Error('Taj pokemon ne postoji!');
	throw new Error('Something went wrong :(');
}
