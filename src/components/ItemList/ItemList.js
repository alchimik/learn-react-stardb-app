import React from 'react';

import './ItemList.scss';
import { withData }  from '../hoc-helpers';

function ItemList (props) {
  const { data, children, selectedItemId } = props;

  const itemsViewArr = data.map((item) => {
    let clazz = 'item-list__item  list-group-item';
    if (item.id === selectedItemId) {
      clazz += '  active';
    }

    let { title, desc } = children(item);

    return (
      <li key={item.id}
          className={clazz}
          onClick={() => props.onItemSelected(item.id)}
      >
        {title} <span>{desc}</span>
      </li>
    );
  });

  return (
    <ul className="item-list  list-group  item-list">
      {itemsViewArr}
    </ul>
  );
}

export default withData(ItemList);
