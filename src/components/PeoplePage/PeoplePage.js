import React from 'react';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorBoundary from '../ErrorBoundary';

export default class PeoplePage extends React.Component {
  state = {
    selectedItemId: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItemId: id
    });
  };

  render () {
    let { selectedItemId } = this.state;
    return <ErrorBoundary>
      <div>
        <ItemList onItemSelected={this.onItemSelected}/>
      </div>
      <div>
        {selectedItemId ? <PersonDetails id={selectedItemId}/> : null}
      </div>
    </ErrorBoundary>;
  }
}
