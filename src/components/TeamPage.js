import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import nbaData from './nba_teams.json'

const TeamPage = ({ teamAbbreviation }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      const url = `https://www.basketball-reference.com/teams/${teamAbbreviation}/2023.html`;

      try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const playersTable = doc.querySelector('#roster tbody');
        const fetchedPlayers = Array.from(playersTable.querySelectorAll('tr')).map((row) => {
          const number = row.querySelector('th[data-stat="number"]').textContent;
          const player = row.querySelector('td[data-stat="player"]').textContent;
          const position = row.querySelector('td[data-stat="pos"]').textContent;
          const height = row.querySelector('td[data-stat="height"]').textContent;
          const weight = row.querySelector('td[data-stat="weight"]').textContent;

          return {
            number,
            player,
            position,
            height,
            weight,
          };
        });

        setPlayers(fetchedPlayers);
      } catch (error) {
        console.error('Error fetching player stats:', error);
      }
    };

    fetchPlayerStats();
  }, [teamAbbreviation]);

  return (
    
      <div>
        <h2>{team.name}</h2>
        <p>City: {team.city}</p>
        <p>Owner: {team.owner}</p>
        <p>Home: {team.arena}</p>
      </div>
    );
    <div>
      <h1>{teamAbbreviation} Players</h1>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.number}>
              <td>{player.number}</td>
              <td>{player.player}</td>
              <td>{player.position}</td>
              <td>{player.height}</td>
              <td>{player.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
}
export default TeamPage;
