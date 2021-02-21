import React from 'react';
import { withSwapiService } from '../hoc-helpers';
import ItemList from '../ItemList';

const _PlanetList = (props) => {
  return <ItemList {...props}>
    {(item) => ({
      title: item.name,
      desc: ''
    })}
  </ItemList>;
};

const PlanetList = withSwapiService(_PlanetList, (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
});

export default PlanetList;
