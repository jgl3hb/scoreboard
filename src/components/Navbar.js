import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Bomb Scoreboard
      </Link>
      <div className="navbar-links"> 
        <Link to="/nba">NBA</Link>
      </div>
    </nav>
  );
};

export default Navbar;
