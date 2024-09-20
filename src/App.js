import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      setPokemonList(response.data.results);
      setFilteredPokemon(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  if (loading) {
    return <div>Loading Pokémon...</div>;
  }

  return (
    <div className="app-container">
      <header className="navbar">
        <h1 className="navbar-title">Pokémon Search</h1>
      </header>
      <div className="content">
        <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        <div className="pokemon-grid">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
