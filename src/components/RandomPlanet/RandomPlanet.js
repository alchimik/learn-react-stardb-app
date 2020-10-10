import React from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

import './RandomPlanet.scss';

class RandomPlanet extends React.Component {
  state = {
    planet: false
  };

  timer = null;

  swapiService = new SwapiService();

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet = () => {
    const id = getRandomInt(1, 15);
    this.setState({
      planet: false
    });

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  };

  componentDidMount () {
    this.updatePlanet();
    this.timer = setInterval(this.updatePlanet, 15000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    const { planet } = this.state;

    if (!planet) {
      return (
        <div className='random-planet  jumbotron  clearfix'>
          <Spinner/>
        </div>
      );
    }

    const { image_url, name, population, rotation_period, diameter } = planet;

    return (
      <div className='random-planet  jumbotron  clearfix'>
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
