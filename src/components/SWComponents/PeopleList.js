import React from 'react';
import { withSwapiService } from '../hoc-helpers';
import ItemList from '../ItemList';
import { withRouter } from 'react-router-dom';

const _PeopleList = (props) => {
  return <ItemList {...props}  onItemSelected={(id) => props.history.push(`${id}`)}>
    {(item) => ({
      title: item.name,
      desc: `${item.gender}, ${item.birthYear}`
    })}
  </ItemList>;
};

const PeopleList = withRouter(withSwapiService(_PeopleList, (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
}));

export default PeopleList;
