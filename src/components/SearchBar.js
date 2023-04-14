import React, { useState } from 'react';
import teamsData from './nba_teams.json';

const SearchBar = ({ setSearchResults }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value === '') {
      setSearchResults(teamsData.teams);
      return;
    }

    const filtered = teamsData.teams.filter((team) =>
      team.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(filtered);
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleSearch}
      className="search-bar"
      placeholder="Search teams..."
    />
  );
};

export default SearchBar;
