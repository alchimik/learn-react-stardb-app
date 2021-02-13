import React from 'react';
import SwapiService from '../../services/SwapiService';
import ItemViewer from '../ItemViewer';

const swapiService = new SwapiService();

export default function PeoplePage () {
  const fieldList = {
    id: 'id',
    name: 'name',
    population: 'population',
    rotationPeriod: 'rotationPeriod',
    diameter: 'diameter',
  };

  return <ItemViewer
    getItemList={swapiService.getAllPlanets}
    getItemById={swapiService.getPlanet}
    listItemContent={(item) => ({ title: item.name, desc: '' })}
    fieldList={fieldList}
  />;
}
