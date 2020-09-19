import React from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.scss';

class RandomPlanet extends React.Component {
  state = {
    planet: {}
  };

  timer = null;

  swapiService = new SwapiService();

  constructor () {
    super();

    this.updatePlanet();

    this.timer = setInterval(this.updatePlanet, 4000);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet = () => {
    const id = getRandomInt(1, 15);

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  };

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    const {
      planet: {
        image_url,
        name,
        population,
        rotation_period,
        diameter
      }
    } = this.state;

    return (
      <div className='random-planet  clearfix'>
        <img src={image_url} className='random-planet__logo' alt=""/>
        <h2>Random planet name: {name}</h2>
        <div>
          <ul>
            <li>Population: {population}</li>
            <li>Rotation Period: {rotation_period}</li>
            <li>Diameter: {diameter}</li>
          </ul>
        </div>
      </div>
    );
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default RandomPlanet;
