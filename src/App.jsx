import { useState } from 'react';

import { fetchPokemon, fetchPokemonColor } from './services';
import { Pokemon, PokemonColor, PokemonForm } from './components';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  console.log("🚀 ~ App ~ fetchedData:", fetchedData?.pokemon)

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const trimmedPokemonName = pokemonName.trim().toLowerCase();
    if (trimmedPokemonName.length < 1) return;
    Promise.all([fetchPokemon(trimmedPokemonName), fetchPokemonColor()])
      .then(([pokemon, pokemonColor]) => {
        setFetchedData({ pokemon, pokemonColor });
        setPokemonName('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <PokemonForm
        handleSubmitForm={handleSubmitForm}
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
      />
      <hr />
      {fetchedData && (
        <>
          <Pokemon pokemon={fetchedData.pokemon} />
          <hr />
          <PokemonColor pokemonColor={fetchedData.pokemonColor} />
        </>
      )}
      <hr />
    </div>
  );
}

export default App;
