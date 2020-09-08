import React from 'react';
import AppHeader from '../AppHeader';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

const App = () => {
  return (
    <div className="container">
      <AppHeader/>
      <RandomPlanet/>

      <div>
        <div><ItemList/></div>
        <div><PersonDetails/></div>
      </div>
    </div>
  );
};

export default App;
