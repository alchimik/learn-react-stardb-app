import React from 'react';
import { withSwapiService } from '../hoc-helpers';
import ItemList from '../ItemList';

const _StarshipList = (props) => {
  return <ItemList {...props}>
    {(item) => ({
      title: item.name
    })}
  </ItemList>;
};

const StarshipList = withSwapiService(_StarshipList, (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
});

export default StarshipList;
