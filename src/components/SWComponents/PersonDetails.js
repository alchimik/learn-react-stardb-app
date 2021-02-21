import ItemDetails from '../ItemDetails/ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const _PersonDetails = (props) => {
  const { getData, itemId } = props;

  const fieldList = {
    id: 'Id',
    name: 'Name',
    gender: 'Gender',
    birthYear: 'Birth year',
    eyeColor: 'Eye color',
  };

  return <ItemDetails fieldList={fieldList}  getData={() => getData(itemId)}/>;
};

const PersonDetails = withSwapiService(_PersonDetails, (swapiService) => {
  return {
    getData: swapiService.getPerson
  };
});

export default PersonDetails;
