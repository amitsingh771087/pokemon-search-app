import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PokemonCard.css';

const PokemonCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(url);
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [url]);

  if (!pokemonData) return null;

  return (
    <div className="pokemon-card">
      <img
        src={pokemonData.sprites.front_default}
        alt={name}
        className="pokemon-image"
      />
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
    </div>
  );
};

export default PokemonCard;
