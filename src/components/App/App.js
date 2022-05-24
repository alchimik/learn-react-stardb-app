import React from 'react';
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
import { PersonDetails } from '../SWComponents';

class App extends React.Component {
  render () {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={new SwapiService()}>
          <Router>
            <div className="container">
              <AppHeader/>
              <RandomPlanet/>

              <Route path='/' exact>
                <h2>Welcome to StarDB</h2>
              </Route>

              <Route path='/people' exact>
                <PeoplePage/>
              </Route>
              <Route path='/people/:id' render={({ match }) => {
                const { id } = match.params;
                return <PersonDetails itemId={id}/>;
              }}/>

              <Route path='/planets/:id?'>
                <PlanetsPage/>
              </Route>

              <Route path='/starships/:id?'>
                <StarshipsPage/>
              </Route>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
