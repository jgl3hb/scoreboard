import React from 'react';
import { useParams } from 'react-router-dom';
import teamsData from './nba_teams.json';

const TeamPage = () => {
  const { id } = useParams();
  const teamId = parseInt(id, 10);
  const team = teamsData.teams.find((team) => team.id === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div>
      <h1>{team.name}</h1>
      <p>City: {team.city}</p>
      <p>Owner: {team.owner}</p>
      {/* Add more information and styling as needed */}
    </div>
  );
};

export default TeamPage;
