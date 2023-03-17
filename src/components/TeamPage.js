import React from 'react';
import { useParams } from 'react-router-dom';
import nbaData from './nba_teams.json'

const TeamPage = () => {
  const { id } = useParams();
  const teamId = parseInt(id, 10);
  const team = nbaData.teams.find((team) => team.id === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div>
      <h2>{team.name}</h2>
      <p>City: {team.city}</p>
      <p>Owner: {team.owner}</p>
      <p>Arena: {team.arena}</p>
    </div>
  );
};

export default TeamPage;
