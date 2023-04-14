// Main.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchContext from './SearchContext';


const Home = () => {
  const { filteredTeams } = useContext(SearchContext);

  return (
    <div>
      <h1>Bomb Scoreboard</h1>
      <ul>
        {filteredTeams.map((team) => (
          <li key={team.id}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
