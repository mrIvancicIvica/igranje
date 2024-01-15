import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon: { name, base_experience, order, weight } }) => {
	return (
		<div>
			<h3>Pokemon</h3>
			<p>name - {name}</p>
			<p>base experience - {base_experience}</p>
			<p>order - {order}</p>
			<p>weight - {weight}</p>
		</div>
	);
};

Pokemon.propTypes = {
	pokemon: PropTypes.object,
};

export default Pokemon;
