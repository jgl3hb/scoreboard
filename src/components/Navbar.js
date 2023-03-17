import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Bomb Scoreboard
      </Link>
      <div className="navbar-links">
        <li>
          <Link to="/nba">NBA</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
