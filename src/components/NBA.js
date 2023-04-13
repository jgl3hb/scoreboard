import React from 'react';
import { Link } from 'react-router-dom';
import teamsData from './nba_teams.json';

const NBA = () => {
  return (
    <div>
      <h1>NBA Teams</h1>
        {teamsData.teams.map((team) => (
          <li key={team.id}>
            <Link to={`/team/${team.id}`}>{team.name}</Link>
          </li>
        ))}
    </div>
  );
};

export default NBA;

