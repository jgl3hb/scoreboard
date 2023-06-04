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
  const [stats, setStats] = useState(null);
  const [liveGames, setLiveGames] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const apiKey = '78f35a76fbmshffa5654ceb36462p1d22a8jsn719e71ca35b1';
  const apiHost = 'api-nba-v1.p.rapidapi.com';
  const apiEndpoint = `/teams/${teamId}/stats`;

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const response = await fetch(
  //       `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${team.youtubeChannelId}&maxResults=10&order=date&type=video&videoDefinition=high&key=${apiKey}`
  //     );
  //     const data = await response.json();

  //     const validVideos = data.items.filter((item) => item.statistics.viewCount >= 1000);
  //     setVideos(validVideos);
  //   };

  //   fetchVideos();
  // }, [team.youtubeChannelId, apiKey]);

  
  // useEffect(() => {
    //   const fetchStats = async () => {
  //     const response = await fetch(`https://${apiHost}${apiEndpoint}`, {
  //       method: 'GET',
  //       headers: {
  //         'x-rapidapi-key': apiKey,
  //         'x-rapidapi-host': apiHost,
  //       },
  //     });
  //     const data = await response.json();
  
  //     setStats(data.api.statistics[0]);
  //   };
  
  //   fetchStats();
  // }, [teamId, apiKey]);
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
  
    const currentDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
  
    setCurrentDate(currentDate);
  }, []);
  

  useEffect(() => {
    const fetchGamesByDate = async () => {
      if (!currentDate) {
        return;
      }
      const date = currentDate;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': apiHost,
        },
      };
      try {
        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${date}`, options);
        const data = await response.json();
        console.log('API Response:', data);
        setLiveGames(data.api.games);
        console.log(data.api.games);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGamesByDate();
  }, [currentDate]);
  
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
        <h3>Team Stats</h3>
        {stats && (
          <div>
            <p>Wins: {stats.wins}</p>
            <p>Losses: {stats.losses}</p>
            <p>Win %: {stats.winPct}</p>
          </div>
        )}
      </div>
      <div className="live-games">
  <h2>Live Games</h2>
  <div>
    <p>{currentDate}</p>
  </div>
  {liveGames.map((game) => (
  <div key={game.id} className="live-game">
    <p>
      {game.teams.visitors.nickname} vs {game.teams.home.nickname}
    </p>
    <p>
      {game.scores.visitors.points} - {game.scores.home.points}
    </p>
  </div>
))}
</div>
      <h2>Latest Highlights</h2>
      <div className="youtube">
        {videos.map((video) => (
          <ReactPlayer key={video.id.videoId} url={`https://www.youtube.com/watch?v=${video.id.videoId}`} />
        ))}
      </div>
    </div>
  );
}
  

export default TeamPage;
