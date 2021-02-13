import React from 'react';
import ItemList from '../ItemList';
import ErrorBoundary from '../ErrorBoundary';
import ItemDetails from '../ItemDetails';

export default class ItemViewer extends React.Component {
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
    let { getItemList, getItemById, fieldList, listItemContent } = this.props;

    return <ErrorBoundary>
      <div className="row  row-cols-2">
        <div className="col">
          <ItemList
            getData={getItemList}
            onItemSelected={this.onItemSelected}
            selectedItemId={this.selectedItemId}
          >
            {listItemContent}
          </ItemList>
        </div>
        <div className="col">
          {selectedItemId ?
            <ItemDetails
              getData={() => getItemById(selectedItemId)}
              fieldList={fieldList}/> :
            null}
        </div>
      </div>
    </ErrorBoundary>;
  }
}
