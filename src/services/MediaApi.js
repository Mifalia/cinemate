class MediaApi {
  // proterties
  _base_url = 'https://api.themoviedb.org/3/trending/';
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

  // fetch methods
  async getTrending() {
    let path = `${this._base_url}tv/week?language=en-US`;
    try {
      let response = await fetch(path, this._options);
      if (!response.ok) {
        console.log({ response });
        throw Error('Unable to connect to the service');
      }
      response = await response.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
