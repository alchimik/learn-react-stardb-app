import { Component } from 'react';
import { withData, withSwapiService } from '../hoc-helpers';

import './RandomPlanet.scss';

class PlanetRandomizer extends Component {
  state = {
    getRandomizedPlanet: null
  };

  timer = null;

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updatePlanetGetter = () => {
    const id = this.getRandomInt(1, 15);
    this.setState({
      getRandomizedPlanet: () => this.props.getData(id)
    });
  };

  componentDidMount () {
    this.updatePlanetGetter();
    this.timer = setInterval(this.updatePlanetGetter, 50000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    return (
      <div className="jumbotron">
        <RandomPlanetView getData={this.state.getRandomizedPlanet}/>
      </div>
    );
  }
}

const RandomPlanetView = withData(function ({ planet }) {
  return (
    <div className="random-planet">
      <img src={planet.imageUrl} className="random-planet__logo" alt=""/>

      <div>
        <h2>Random planet name: {planet.name}</h2>
        <ul>
          <li>Population: {planet.population}</li>
          <li>Rotation Period: {planet.rotationPeriod}</li>
          <li>Diameter: {planet.diameter}</li>
        </ul>
      </div>
    </div>
  );
}, 'planet');

const RandomPlanet = withSwapiService(PlanetRandomizer, (swapiService) => {
  return {
    getData: swapiService.getPlanet
  };
});

export default RandomPlanet;
