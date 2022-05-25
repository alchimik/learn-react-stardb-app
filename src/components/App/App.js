import { StrictMode, Component } from 'react';
import AppHeader from '../AppHeader';
import ErrorBoundary from '../ErrorBoundary';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../pages/PeoplePage';
import PlanetsPage from '../pages/PlanetsPage';
import StarshipsPage from '../pages/StarshipsPage';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

class App extends Component {
  render () {
    return (
      <StrictMode>
        <ErrorBoundary>
          <SwapiServiceProvider value={new SwapiService()}>
            <Router>
              <div className="container">
                <AppHeader/>
                <RandomPlanet/>

                <Route path="/" exact>
                  <h2>Welcome to StarDB</h2>
                </Route>

                <Route path="/people/:id?" component={PeoplePage}/>
                <Route path="/planets/:id?" component={PlanetsPage}/>
                <Route path="/starships/:id?" component={StarshipsPage}/>
              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </StrictMode>
    );
  }
}

export default App;
