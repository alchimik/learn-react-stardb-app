import React from 'react';
import AppHeader from '../AppHeader';
import ErrorBoundary from '../ErrorBoundary';
import ErrorButton from '../ErrorButton';
import PeoplePage from '../PeoplePage';
import RandomPlanet from '../RandomPlanet';

import './App.scss';
import PlanetsPage from '../PlanetsPage/PlanetsPage';
import StarshipsPage from '../StarshipsPage';

class App extends React.Component {
  render () {
    return (
      <ErrorBoundary>
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
      </ErrorBoundary>
    );
  }
}

export default App;
