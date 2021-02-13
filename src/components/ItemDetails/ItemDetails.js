import React from 'react';

import './ItemDetails.scss';
import { withData }  from '../hoc-helpers';

function ItemDetails (props) {
  const { data, fieldList } = props;

  return (
    <div className="item-detail">
      <img src={data.imageUrl} alt=""/>

      {Object.entries(fieldList).map(([field, title]) => {
        return <div key={field}>{title}: {data[field]}</div>;
      })}
    </div>
  );
}

export default withData(ItemDetails);


