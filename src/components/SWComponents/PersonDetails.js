import ItemDetails from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';
import { ItemDetailRecord as Record } from '../ItemDetails';

const _PersonDetails = (props) => {
  const { getData, itemId } = props;

  return (
    <ItemDetails getData={() => getData(itemId)}>
      <Record field="id" label="Id"/>
      <Record field="name" label="Name"/>
      <Record field="gender" label="Gender"/>
      <Record field="birthYear" label="Birth year"/>
      <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
};

const PersonDetails = withSwapiService(_PersonDetails, (swapiService) => {
  return {
    getData: swapiService.getPerson
  };
});

export default PersonDetails;
