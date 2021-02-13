const DEVELOPMENT_NETWORK_DELAY = 1000;

export default class SwapiService {
  _baseUrl = 'https://swapi.dev/api/';
  _baseImgUrl = 'https://starwars-visualguide.com/assets/img';
  _peoplePath = 'people/';
  _planetsPath = 'planets/';
  _starshipsPath = 'starships/';

  getAllPeople = async () => {
    const res = await this._getResource(this._peoplePath);
    return res.results.map((item) => this._transformPerson(item));
  };

  getPerson = async (id) => {
    const person = await this._getResource(this._peoplePath + id + '/');
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this._getResource(this._planetsPath);
    return res.results.map((item) => this._transformPlanet(item));
  };

  getPlanet = async (id) => {
    const planet = await this._getResource(this._planetsPath + id + '/');
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this._getResource(this._starshipsPath);
    return res.results.map((item) => this._transformStarship(item));
  };

  getStarship = async (id) => {
    const starship = await this._getResource(this._starshipsPath + id + '/');
    return this._transformStarship(starship);
  };

  async _getResource (path) {
    const response = await fetch(this._baseUrl + path);

    if (!response.ok) {
      throw new Error(`Could not fetch ${path}, status: ${response.status}`);
    }

    const json = await response.json();
    return await this._delay(json);
  }

  _extractIdFromUrl (url) {
    const matches = url.match(/\/(\d+)\/$/);
    return parseInt(matches[1]);
  }

  _transformPlanet (planet) {
    const id = this._extractIdFromUrl(planet.url);

    return {
      id: id,
      imageUrl: this._getImageUrl(id, 'planets'),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship (starship) {
    const id = this._extractIdFromUrl(starship.url);

    return {
      id: id,
      imageUrl: this._getImageUrl(id, 'starships'),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    };
  }

  _transformPerson (person) {
    const id = this._extractIdFromUrl(person.url);

    return {
      id: id,
      imageUrl: this._getImageUrl(id, 'characters'),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  }

  async _delay (p) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        resolve(p);
      }, DEVELOPMENT_NETWORK_DELAY);
    });
  }

  _getImageUrl (id, collection) {
    return `${this._baseImgUrl}/${collection}/${id}.jpg`;
  }
}
