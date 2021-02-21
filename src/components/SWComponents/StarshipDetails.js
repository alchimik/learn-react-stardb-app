import ItemDetails from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const _StarshipDetails = (props) => {
  const { getData, itemId } = props;

  const fieldList = {
    id: 'id',
    name: 'name',
    model: 'model',
    manufacturer: 'manufacturer',
    costInCredits: 'costInCredits',
    length: 'length',
    crew: 'crew',
    passengers: 'passengers',
    cargoCapacity: 'cargoCapacity'
  };

  return <ItemDetails fieldList={fieldList} getData={() => getData(itemId)}/>;
};

const StarshipDetails = withSwapiService(_StarshipDetails, (swapiService) => {
  return {
    getData: swapiService.getStarship
  };
});

export default StarshipDetails;
