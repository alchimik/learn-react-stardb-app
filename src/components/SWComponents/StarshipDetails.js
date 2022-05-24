import ItemDetails, { ItemDetailRecord as Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const _StarshipDetails = (props) => {
  const { swapiService, itemId } = props;

  return (
    <ItemDetails getData={() => swapiService.getStarship(itemId)}>
      <Record field="id" label="Id"/>
      <Record field="name" label="Name"/>
      <Record field="model" label="Model"/>
      <Record field="manufacturer" label="Manufacturer"/>
      <Record field="costInCredits" label="Cost In Credits"/>
      <Record field="length" label="Length"/>
    </ItemDetails>
  );
};

const StarshipDetails = withSwapiService(_StarshipDetails);

export default StarshipDetails;
