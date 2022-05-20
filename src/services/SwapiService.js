const DEVELOPMENT_NETWORK_DELAY = 1000;

export default class SwapiService {
  #baseUrl = 'https://swapi.dev/api/';
  #baseImgUrl = 'https://starwars-visualguide.com/assets/img';
  #peoplePath = 'people/';
  #planetsPath = 'planets/';
  #starshipsPath = 'starships/';

  getAllPeople = async () => {
    const res = await this.#getResource(this.#peoplePath);
    return res.results.map((item) => this.#transformPerson(item));
  };

  getPerson = async (id) => {
    const person = await this.#getResource(this.#peoplePath + id + '/');
    return this.#transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.#getResource(this.#planetsPath);
    return res.results.map((item) => this.#transformPlanet(item));
  };

  getPlanet = async (id) => {
    const planet = await this.#getResource(this.#planetsPath + id + '/');
    return this.#transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.#getResource(this.#starshipsPath);
    return res.results.map((item) => this.#transformStarship(item));
  };

  getStarship = async (id) => {
    const starship = await this.#getResource(this.#starshipsPath + id + '/');
    return this.#transformStarship(starship);
  };

  async #getResource (path) {
    const response = await fetch(this.#baseUrl + path);

    if (!response.ok) {
      throw new Error(`Could not fetch ${path}, status: ${response.status}`);
    }

    const json = await response.json();
    return await this.#delay(json);
  }

  #extractIdFromUrl (url) {
    const matches = url.match(/\/(\d+)\/$/);
    return parseInt(matches[1]);
  }

  #transformPlanet (planet) {
    const id = this.#extractIdFromUrl(planet.url);

    return {
      id: id,
      imageUrl: this.#getImageUrl(id, 'planets'),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  #transformStarship (starship) {
    const id = this.#extractIdFromUrl(starship.url);

    return {
      id: id,
      imageUrl: this.#getImageUrl(id, 'starships'),
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

  #transformPerson (person) {
    const id = this.#extractIdFromUrl(person.url);

    return {
      id: id,
      imageUrl: this.#getImageUrl(id, 'characters'),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  }

  async #delay (p) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        resolve(p);
      }, DEVELOPMENT_NETWORK_DELAY);
    });
  }

  #getImageUrl (id, collection) {
    return `${this.#baseImgUrl}/${collection}/${id}.jpg`;
  }
}
