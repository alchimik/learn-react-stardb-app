export default class SwapiService {
  _baseUrl = 'https://swapi.dev/api/';
  _peoplePath = 'people/';
  _planetsPath = 'planets/';
  _starshipsPath = 'starships/';

  async getResource (path) {
    const response = await fetch(this._baseUrl + path);

    if (!response.ok) {
      throw new Error(`Could not fetch ${path}, status: ${response.status}`);
    }

    return await response.json();
  }

  async getAllPeople () {
    const res = await this.getResource(this._peoplePath);
    return res.results.map((item) => this._transformPerson(item));
  }

  async getPerson (id) {
    const person = await this.getResource(this._peoplePath + id + '/');
    return this._transformPerson(person);
  }

  async getAllPlanets () {
    const res = await this.getResource(this._planetsPath);
    return res.results.map((item) => this._transformPlanet(item));
  }

  async getPlanet (id) {
    const planet = await this.getResource(this._planetsPath + id + '/');
    return this._transformPlanet(planet);
  }

  async getAllStarships () {
    const res = await this.getResource(this._starshipsPath);
    return res.results.map((item) => this._transformStarship(item));
  }

  async getStarship (id) {
    const starship = await this.getResource(this._starshipsPath + id + '/');
    return this._transformStarship(starship);
  }

  _extractIdFromUrl (url) {
    const matches = url.match(/\/(\d+)\/$/);
    return matches[1];
  }

  _transformPlanet (planet) {
    const id = this._extractIdFromUrl(planet.url);

    return {
      id: id,
      image_url: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
      name: planet.name,
      population: planet.population,
      rotation_period: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship (starship) {
    return {
      id: this._extractIdFromUrl(starship.url),
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
    return {
      id: this._extractIdFromUrl(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  }
}
