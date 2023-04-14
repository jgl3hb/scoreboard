// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchContext from './SearchContext';


const Navbar = () => {
  const { setSearchResults } = useContext(SearchContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Bomb Scoreboard
      </Link>
      <div className="navbar-links">
        <Link to="/nba">NBA</Link>
      </div>
      <SearchBar setSearchResults={setSearchResults} />
    </nav>
  );
};

export default Navbar;
