import React from 'react';

import './ItemList.scss';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

class ItemList extends React.Component {
  swapiService = new SwapiService();

  state = {
    peopleList: [],
    selectedItemId: null
  };

  componentDidMount () {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList });
      });

  }

  onItemSelected = (id) => {
    this.setState({
      selectedItemId: id
    });

    this.props.onItemSelected(id);
  };

  render () {
    const { peopleList } = this.state;

    if (peopleList.length <= 0) {
      return <Spinner/>;
    }

    const itemsViewList = peopleList.map(({ id, name }) => {
      let clazz = 'list-group-item';
      if (id === this.state.selectedItemId) {
        clazz += '  active';
      }
      return (
        <li key={id}
            className={clazz}
            onClick={() => this.onItemSelected(id)}>
          {name}
        </li>
      );
    });

    return (
      <ul className="item-list  list-group">
        {itemsViewList}
      </ul>
    );
  }
}

export default ItemList;
