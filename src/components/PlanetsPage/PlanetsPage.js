import React from 'react';
import ItemViewer from '../ItemViewer';
import { withSwapiService } from '../SwapiServiceContext';

const ItemViewerWithSwapi = withSwapiService(ItemViewer, (swapiService) => {
  return {
    getItemList: swapiService.getAllPlanets,
    getItemById: swapiService.getPlanet
  };
});

function PlanetPage () {
  const fieldList = {
    id: 'id',
    name: 'name',
    population: 'population',
    rotationPeriod: 'rotationPeriod',
    diameter: 'diameter',
  };

  return <ItemViewerWithSwapi
    listItemContent={(item) => ({ title: item.name, desc: '' })}
    fieldList={fieldList}
  />;
}

export default PlanetPage;
