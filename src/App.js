import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team/:teamId" component={Teams} />
        <Route path="/league/:mlb" component={MLB} />
        <Route path="/league/:nfl" component={NFL} />
        <Route path="/league/:NBA" component={NBA} />    
      </Switch>
    </div>
  );
}

export default App;