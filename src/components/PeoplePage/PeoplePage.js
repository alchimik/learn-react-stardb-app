import React from 'react';
import ItemViewer from '../ItemViewer';
import { withSwapiService } from '../hoc-helpers';

const ItemViewerWithSwapi = withSwapiService(ItemViewer, (swapiService) => {
  return {
    getItemList: swapiService.getAllPeople,
    getItemById: swapiService.getPerson
  }
})

function PeoplePage () {
  const fieldList = {
    id: 'Id',
    name: 'Name',
    gender: 'Gender',
    birthYear: 'Birth year',
    eyeColor: 'Eye color',
  };

  return <ItemViewerWithSwapi
    fieldList={fieldList}
    listItemContent={(item) => ({ title: item.name, desc: `${item.gender}, ${item.birthYear}` })}
  />;
}


export default PeoplePage;
