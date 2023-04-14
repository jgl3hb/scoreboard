import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import teamsData from './nba_teams.json';
import ReactPlayer from 'react-player';
import SearchBar from './SearchBar';

const TeamPage = () => {
  const { id } = useParams();
  const teamId = parseInt(id, 10);
  const team = teamsData.teams.find((team) => team.id === teamId);

  const [filteredTeams, setFilteredTeams] = useState([]);

  if (!team) {
    return <div>Team not found</div>;
  }

  const imagePath = team.logo;

  return (
    <div>
      <img src={imagePath} alt={`${team.name} logo`} className="logo" />
      <div className="team-info">
        <p>{team.city}</p>
        <p>{team.arena}</p>
        <p>{team.owner}, owner</p>
      </div>
      <h2>Latest Highlights</h2>
      <div className="youtube">
        <ReactPlayer url="https://www.youtube.com/watch?v=q_hCQBlAFr0" />
        <ReactPlayer url="https://www.youtube.com/watch?v=ZZqlXY6rqDk" />
      </div>
      <h2>Search for Other Teams</h2>
      <SearchBar setSearchResults={setFilteredTeams} />
      <ul>
        {filteredTeams.map((team) => (
          <li key={team.id}>
            <a href={`/team/${team.id}`}>{team.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
