import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NBA from './components/NBA';
import TeamPage from './components/TeamPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nba" element={<NBA />} />
        <Route path="/team/:id" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
