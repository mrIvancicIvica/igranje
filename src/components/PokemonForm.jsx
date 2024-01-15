import React from 'react';
import PropTypes from 'prop-types';

const PokemonForm = ({ handleSubmitForm, pokemonName, setPokemonName }) => {
	return (
		<form onSubmit={handleSubmitForm}>
			<label htmlFor='pokemon-name'>Pokemon Name:</label>
			<br />
			<input
				type='text'
				name='pokemon-name'
				id='pokemon-name'
				placeholder='Pokemon Name is...'
				value={pokemonName}
				onChange={(e) => setPokemonName(e.target.value)}
			/>
			<br />
			<button>DOHVATI</button>
		</form>
	);
};

PokemonForm.propTypes = {
	handleSubmitForm: PropTypes.func,
	pokemonName: PropTypes.string,
	setPokemonName: PropTypes.func,
};

export default PokemonForm;
