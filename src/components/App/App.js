import { StrictMode, Component} from 'react';
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

                <Route path="/people/:id?">
                  <PeoplePage/>
                </Route>

                <Route path="/planets/:id?">
                  <PlanetsPage/>
                </Route>

                <Route path="/starships/:id?">
                  <StarshipsPage/>
                </Route>
              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </StrictMode>
    );
  }
}

export default App;
