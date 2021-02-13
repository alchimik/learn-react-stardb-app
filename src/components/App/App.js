import React from 'react';
import AppHeader from '../AppHeader';
import ErrorBoundary from '../ErrorBoundary';
import ErrorButton from '../ErrorButton';
import PeoplePage from '../PeoplePage';
import RandomPlanet from '../RandomPlanet';

import PlanetsPage from '../PlanetsPage/PlanetsPage';
import StarshipsPage from '../StarshipsPage';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import SwapiService from '../../services/SwapiService';

import './App.scss';

class App extends React.Component {
  render () {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={new SwapiService()}>
          <div className="container">
            <AppHeader/>
            <RandomPlanet/>

            <div>
              <ErrorButton/>
            </div>

            <h2>People</h2>
            <PeoplePage/>

            <h2>Planets</h2>
            <PlanetsPage/>

            <h2>Starships</h2>
            <StarshipsPage/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
