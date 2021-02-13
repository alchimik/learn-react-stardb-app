import React from 'react';
import SwapiService from '../../services/SwapiService';
import ItemViewer from '../ItemViewer';

const swapiService = new SwapiService();

export default function StarshipsPage () {
  const fieldList = {
    id: 'id',
    name: 'name',
    model: 'model',
    manufacturer: 'manufacturer',
    costInCredits: 'costInCredits',
    length: 'length',
    crew: 'crew',
    passengers: 'passengers',
    cargoCapacity: 'cargoCapacity'
  };

  return <ItemViewer
    getItemList={swapiService.getAllStarships}
    getItemById={swapiService.getStarship}
    listItemContent={(item) => ({ title: item.name })}
    fieldList={fieldList}
  />;
}
