import React from 'react';
import SwapiService from '../../services/SwapiService';
import ItemViewer from '../ItemViewer';

const swapiService = new SwapiService();

export default function PeoplePage () {
  const fieldList = {
    id: 'Id',
    name: 'Name',
    gender: 'Gender',
    birthYear: 'Birth year',
    eyeColor: 'Eye color',
  };

  return <ItemViewer
    getItemList={swapiService.getAllPeople}
    getItemById={swapiService.getPerson}
    listItemContent={(item) => ({ title: item.name, desc: `${item.gender}, ${item.birthYear}` })}
    fieldList={fieldList}
  />;
}
