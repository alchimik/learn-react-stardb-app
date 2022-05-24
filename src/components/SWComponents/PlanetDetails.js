import ItemDetails, { ItemDetailRecord as Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const _PlanetDetails = (props) => {
  const { swapiService, itemId } = props;

  return (
    <ItemDetails getData={() => swapiService.getPlanet(itemId)}>
      <Record field="id" label="id"/>
      <Record field="name" label="Name"/>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  );
};

const PlanetDetails = withSwapiService(_PlanetDetails);

export default PlanetDetails;
