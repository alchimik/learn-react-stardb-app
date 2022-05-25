import { PeopleList, PersonDetails } from '../../SWComponents';
import { Route } from 'react-router-dom';

export default function PeoplePage () {
  return (
    <>
      <Route path="/people" exact>
        <PeopleList/>
      </Route>
      <Route path="/people/:id" render={({ match }) => {
        const { id } = match.params;
        return <PersonDetails itemId={id}/>;
      }}/>
    </>
  );
}
