// TeamPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import teamsData from './nba_teams.json';
import ReactPlayer from 'react-player';
import SearchContext from './SearchContext';


const TeamPage = () => {
  const { id } = useParams();
  const teamId = parseInt(id, 10);
  const team = teamsData.teams.find((team) => team.id === teamId);

  const logoStyle = {
    width: "250px"
  };

  const { filteredTeams } = useContext(SearchContext);

  if (!team) {
    return <div>Team not found</div>;
  }

  const imagePath = team.logo;

  return (
    <div className="team-info">
      <img src={imagePath} alt={`${team.name} logo`} className="logo" style={logoStyle} />     
        <p>{team.city}</p>
        <p>{team.arena}</p>
        <p>{team.owner}, owner</p>
      <h2>Latest Highlights</h2>
      <div className="youtube">
        <ReactPlayer url="https://www.youtube.com/watch?v=q_hCQBlAFr0" />
        <ReactPlayer url="https://www.youtube.com/watch?v=ZZqlXY6rqDk" />
      </div>
      <h2>Search for Other Teams</h2>
        {filteredTeams.map((team) => (
          <li key={team.id}>
            <a href={`/team/${team.id}`}>{team.name}</a>
          </li>
        ))}
    </div>
  );
};

export default TeamPage;
