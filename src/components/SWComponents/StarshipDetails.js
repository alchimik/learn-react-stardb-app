import ItemDetails, { ItemDetailRecord as Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const _StarshipDetails = (props) => {
  const { getData, itemId } = props;

  return (
    <ItemDetails getData={() => getData(itemId)}>
      <Record field="id" label="Id"/>
      <Record field="name" label="Name"/>
      <Record field="model" label="Model"/>
      <Record field="manufacturer" label="Manufacturer"/>
      <Record field="costInCredits" label="Cost In Credits"/>
      <Record field="length" label="Length"/>
    </ItemDetails>
  );
};

const StarshipDetails = withSwapiService(_StarshipDetails, (swapiService) => {
  return {
    getData: swapiService.getStarship
  };
});

export default StarshipDetails;
