// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NBA from './components/NBA';
import TeamPage from './components/TeamPage';
import Home from './components/Home';
import SearchContext from './components/SearchContext';
import './App.css';

function App() {
  const [filteredTeams, setFilteredTeams] = useState([]);

  return (
    <div className="App">
    <SearchContext.Provider value={{ filteredTeams, setSearchResults: setFilteredTeams }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/team/:id" element={<TeamPage />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
        </div>
  );
}

export default App;
