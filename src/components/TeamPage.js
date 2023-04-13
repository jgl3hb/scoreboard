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

  const imagePath = team.logo;

  return (
    <div>
      <img src={imagePath} alt={`${team.name} logo`} class="logo" />
      <div class="team-info">
  <p>{team.city}</p>
  <p>{team.arena}</p>
  <p>{team.owner}, owner</p>
</div>

    </div>
  );
};

export default TeamPage;
