import PropTypes from 'prop-types';

const PokemonColor = ({ pokemonColor: { id, name } }) => {
	return (
		<div>
			<h3>Pokemon Color</h3>
			<p>id - {id}</p>
			<p>name - {name}</p>
		</div>
	);
};

PokemonColor.propTypes = {
	pokemonColor: PropTypes.object,
};

export default PokemonColor;
