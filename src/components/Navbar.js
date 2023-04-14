import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchContext from './SearchContext';

const Navbar = () => {
  const { setSearchResults } = useContext(SearchContext);

  return (
    <nav className="navbar">
        <img src="https://i.imgur.com/hlxYrfi.jpg" alt="logo" width="100" height="75" />
        <Link to="/">Bomb Scoreboard</Link>
        <Link to="/nba">NBA</Link>
      <SearchBar setSearchResults={setSearchResults} />
    </nav>
  );
};

export default Navbar;

