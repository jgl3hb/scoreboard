// NBA.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import teamsData from './nba_teams.json';
import SearchContext from './SearchContext';
import Navbar from './Navbar';


const NBA = () => {
  const { filteredTeams } = useContext(SearchContext);

  const displayedTeams = filteredTeams.length ? filteredTeams : teamsData.teams;

  return (
    <div >
      <h1>NBA Teams</h1>
      {displayedTeams.map((team) => (
        <li key={team.id}>
          <Link to={`/team/${team.id}`}>{team.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default NBA;
