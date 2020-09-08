export default class SwapiService {
  _baseUrl = 'https://swapi.dev/api/';
  _peoplePath = 'people/';
  _planetsPath = 'planets/';
  _starshipsPath = 'starships/';

  async getResource (path) {
    const response = await fetch(this._baseUrl + path);

    if (!response.ok) {
      throw new Error(`Could not fetch ${path}, status: ${response.status}`)
    }

    return await response.json();
  }

  async getAllPeople () {
    const res = await this.getResource(this._peoplePath);
    return res.results;
  }

  async getPerson (id) {
    return this.getResource(this._peoplePath + id + '/');
  }

  async getAllPlanets () {
    const res = await this.getResource(this._planetsPath);
    return res.results;
  }

  async getPlanet (id) {
    return this.getResource(this._planetsPath + id + '/');
  }

  async getAllStarships () {
    const res = await this.getResource(this._starshipsPath);
    return res.results;
  }

  async getStarship (id) {
    return this.getResource(this._starshipsPath + id + '/');
  }
}
