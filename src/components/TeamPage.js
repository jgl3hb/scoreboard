// TeamPage.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import teamsData from './nba_teams.json';
import ReactPlayer from 'react-player';
import SearchContext from './SearchContext';

const TeamPage = () => {
  const { id } = useParams();
  const teamId = parseInt(id, 10);
  const team = teamsData.teams.find((team) => team.id === teamId);
  const [videos, setVideos] = useState([]);

  const apiKey = 'AIzaSyDwjDFDJThhqhUowimYrH0ndJ1fwY51kcM'; // Replace with your YouTube API key
  const channelId = team.youtubeChannelId; // Assuming you have the team's YouTube channel ID in your data

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&videoDefinition=high&key=${apiKey}`
      );
      const data = await response.json();

      const validVideos = data.items.filter((item) => item.statistics.viewCount >= 1000);
      setVideos(validVideos);
    };

    fetchVideos();
  }, [channelId, apiKey]);

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
        {videos.map((video) => (
          <ReactPlayer key={video.id.videoId} url={`https://www.youtube.com/watch?v=${video.id.videoId}`} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
