import { PeopleList } from '../../SWComponents';
import { withRouter } from 'react-router-dom';

function PeoplePage ({ history }) {
  return <PeopleList onItemSelected={(id) => history.push(`${id}`)}/>;
}

export default withRouter(PeoplePage);
