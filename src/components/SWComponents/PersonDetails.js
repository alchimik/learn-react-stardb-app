import ItemDetails from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';
import { ItemDetailRecord as Record } from '../ItemDetails';

const _PersonDetails = (props) => {
  const { swapiService, itemId } = props;

  return (
    <ItemDetails getData={() => swapiService.getPerson(itemId)}>
      <Record field="id" label="Id"/>
      <Record field="name" label="Name"/>
      <Record field="gender" label="Gender"/>
      <Record field="birthYear" label="Birth year"/>
      <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
};

const PersonDetails = withSwapiService(_PersonDetails);

export default PersonDetails;
