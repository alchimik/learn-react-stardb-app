import { PlanetDetails, PlanetList } from '../../SWComponents';
import { useHistory, useParams } from 'react-router-dom';

function PlanetPage () {
  const history = useHistory();
  const params = useParams();

  const { id } = params;

  return <div className="row row-cols-2">
    <div className="col">
      <PlanetList onItemSelected={(id) => history.push(`${id}`)}/>
    </div>
    <div className="col">
      {id ?
        <PlanetDetails itemId={id}/> :
        <span>Выберите элемент из списка!</span>
      }
    </div>
  </div>;
}

export default PlanetPage;
