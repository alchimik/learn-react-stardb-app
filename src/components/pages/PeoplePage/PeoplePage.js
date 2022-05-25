import { PeopleList, PersonDetails } from '../../SWComponents';
import { Route, withRouter } from 'react-router-dom';

function PeoplePage (props) {
  return (
    <>
      <Route path="/people" exact>
        <PeopleList onItemSelected={(id) => props.history.push(`${id}`)}/>
      </Route>
      <Route path="/people/:id" render={({ match }) => {
        const { id } = match.params;
        return <PersonDetails itemId={id}/>;
      }}/>
    </>
  );
}

export default withRouter(PeoplePage);
