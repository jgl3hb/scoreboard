import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import teamsData from './nba_teams.json';

const Home = () => {
  const [filteredTeams, setFilteredTeams] = useState([]);

  return (
    <div>
      <h1>Bomb Scoreboard</h1>
      <SearchBar setSearchResults={setFilteredTeams} />
        {filteredTeams.map((team) => (
          <li key={team.id}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>
          </li>
        ))}
    </div>
  );
};

export default Home;
