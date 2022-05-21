import ItemDetails from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const _PlanetDetails = (props) => {
  const { getData, itemId } = props;

  const fieldList = {
    id: 'id',
    name: 'name',
    population: 'population',
    rotationPeriod: 'rotationPeriod',
    diameter: 'diameter',
  };

  return <ItemDetails fieldList={fieldList} getData={() => getData(itemId)}/>;
};

const PlanetDetails = withSwapiService(_PlanetDetails, (swapiService) => {
  return {
    getData: swapiService.getPlanet
  };
});

export default PlanetDetails;
