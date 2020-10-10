import React from 'react';
import AppHeader from '../AppHeader';
import ErrorBoundary from '../ErrorBoundary';
import ErrorButton from '../ErrorButton';
import PeoplePage from '../PeoplePage';
import RandomPlanet from '../RandomPlanet';

import './App.scss';

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

          <div className="main-content">
            <PeoplePage/>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
