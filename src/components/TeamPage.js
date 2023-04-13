import React from 'react';
import { useParams } from 'react-router-dom';
import teamsData from './nba_teams.json';
import YouTube from 'react-youtube';
const VideoEmbed = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

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
        <h2>Our Featured Videos</h2>
          <div class="youtube">
            <VideoEmbed videoId="your_video_id_1" />
            <VideoEmbed videoId="your_video_id_2" />
          </div>
    </div>
  );
};



export default TeamPage;
