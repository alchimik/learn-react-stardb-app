import React from 'react';
import ItemViewer from '../ItemViewer';
import { withSwapiService } from '../SwapiServiceContext';

const ItemViewerWithSwapi = withSwapiService(ItemViewer, (swapiService) => {
  return {
    getItemList: swapiService.getAllStarships,
    getItemById: swapiService.getStarship
  };
});

function StarshipsPage () {
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

  return <ItemViewerWithSwapi
    listItemContent={(item) => ({ title: item.name })}
    fieldList={fieldList}
  />;
}

export default StarshipsPage;
