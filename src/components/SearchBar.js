import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
