import React from 'react';
import { withSwapiService } from '../hoc-helpers';
import ItemList from '../ItemList';

const _PeopleList = (props) => {
  return <ItemList {...props}>
    {(item) => ({
      title: item.name,
      desc: `${item.gender}, ${item.birthYear}`
    })}
  </ItemList>;
};

const PeopleList = withSwapiService(_PeopleList, (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
});

export default PeopleList;
