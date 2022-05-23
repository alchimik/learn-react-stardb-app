import React from 'react';

import './ItemDetails.scss';
import { withData } from '../hoc-helpers';

function ItemDetails (props) {
  const { data, children } = props;

  return (
    <div className="item-detail">
      <img src={data.imageUrl} alt=""/>

      {React.Children.map(children, (el) => {
        return React.cloneElement(el, { item: data });
      })}
    </div>
  );
}

export const ItemDetailRecord = ({ item, field, label }) => {
  return <div><span>{label}</span>: <span>{item[field]}</span></div>;
};

export default withData(ItemDetails);


