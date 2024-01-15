class MediaApi {
  // proterties
  _base_url = 'https://api.themoviedb.org/3/';
  _api_key;
  _options = {};

  //
  constructor(api_key) {
    this._api_key = api_key;
    this._options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`,
      },
    };
  }

  /*
    METHODS
    -- async methods for fetching data on the api
  */

  // trending TV shows of the moment
  async getTrending() {
    let endpoint = `${this._base_url}trending/tv/week?language=en-US`;
    try {
      let response = await fetch(endpoint, this._options);
      if (!response.ok) {
        throw new Error('Unable to connect to the service');
      }
      response = await response.json();
      return response;
    } catch (error) {
      this.handleClientError(error);
      return null;
    }
  }

  // get all time popular TV Shows
  async getPopular(page = 1) {
    let endpoint = `${this._base_url}tv/popular?language=en-US&page=${page}`;
    try {
      let response = await fetch(endpoint, this._options);
      if (!response.ok) {
        throw new Error('Unable to connect to the service at "getPopular"');
      }
      response = await response.json();
      return response;
    } catch (error) {
      this.handleClientError(error);
      return null;
    }
  }

  // search TV Shows from keyword `${q}`
  async search(q = '', page = 1) {
    q = q.trim();
    if (!q) {
      throw new Error('You must provide a keyword to search');
    }

    let endpoint = `${this._base_url}search/tv?query=${q}&include_adult=false&language=en-US&page=${page}`;

    try {
      let response = await fetch(endpoint, this._options);
      if (!response.ok) {
        throw new Error('Unable to connect to the service at "search"');
      }

      response = await response.json();
      return response;
    } catch (error) {
      this.handleClientError(error);
      return null;
    }
  }

  // get by id
  async getById(id) {
    if (!id) {
      throw new Error('No tv series ID provided');
    }

    let endpoint = `${this._base_url}tv/${id}?language=en-US`;

    try {
      let response = await fetch(endpoint, this._options);
      if (!response.ok) {
        throw new Error('Unable to connect to the service at "getById"');
      }

      response = await response.json();
      return response;
    } catch (error) {
      this.handleClientError(error);
      return null;
    }
  }

  /*
    SELF RELATED METHODS
  */

  // error handling
  handleClientError(error) {
    console.error(`API request failed : ${error.message}`);
  }
}

export default MediaApi;
