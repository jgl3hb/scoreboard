import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import teamsData from './nba_teams.json';
import SearchBar from './SearchBar';

const NBA = () => {
  const [filteredTeams, setFilteredTeams] = useState(teamsData.teams);

  return (
    <div>
      <h1>NBA Teams</h1>
      <SearchBar setSearchResults={setFilteredTeams} />
      {filteredTeams.map((team) => (
        <li key={team.id}>
          <Link to={`/team/${team.id}`}>{team.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default NBA;
