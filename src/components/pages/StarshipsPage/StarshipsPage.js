import { useState } from 'react';
import { StarshipDetails, StarshipList } from '../../SWComponents';

function StarshipsPage () {
  const [id, setId] = useState();

  return <div className="row row-cols-2">
    <div className="col">
      <StarshipList onItemSelected={(id) => setId(id)}/>
    </div>
    <div className="col">
      {id ?
        <StarshipDetails itemId={id}/> :
        <span>Выберите караблик из списка!</span>}
    </div>
  </div>;
}

export default StarshipsPage;
