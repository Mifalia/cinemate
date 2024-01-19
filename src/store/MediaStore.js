import { makeAutoObservable } from 'mobx';
import MediaApi from 'services/MediaApi';

// api key from .env file
const API_KEY = process.env.REACT_APP_API_KEY;

class MediaStore {
  /*
    STORE OBSERVABLES
  */
  current = null;
  trending = [];
  popular = [];
  searchResults = [];

  lastSearchQuery = '';

  isLoading = false;

  // store self related properties
  mediaApi;

  constructor() {
    if (!API_KEY) {
      console.log(process.env.API_KEY);
      console.error("API_KEY can't be null, aborting ...");
      return;
    }

    const mediaApi = new MediaApi(API_KEY);
    this.mediaApi = mediaApi;

    this.load();

    makeAutoObservable(this);
  }

  /*
    STORE LOGIC HANDLER METHODS
  */

  // --- load popular and trending
  async load() {
    if (this.trending.length > 0 && this.popular.length > 0) {
      return;
    }

    this.setIsLoading(true);
    const trending = await this.mediaApi.getTrending();
    this.trending = trending ? trending.results : [];
    const popular = await this.mediaApi.getPopular();
    this.popular = popular ? popular.results : [];
    this.setIsLoading(false);
  }

  // --- search
  search = async (q = '') => {
    q = q.trim().toLowerCase();

    console.log(q);
    console.log(this.lastSearchQuery);

    if (q === '') {
      return;
    }

    if (q == this.lastSearchQuery) {
      return;
    }

    this.setIsLoading(true);

    this.setLastSearchQuery(q);

    this.setSearchResults([]);
    const results = await this.mediaApi.search(encodeURIComponent(q));
    let filteredResults = [];
    if (results) {
      filteredResults = results.results.filter((item) => {
        const keepItem = item.overview && item.origin_country.length > 0 && item.backdrop_path && item.poster_path;
        return keepItem;
      });
    }

    this.setSearchResults(filteredResults);

    this.setIsLoading(false);
  };

  // -- get a tv show by id
  getOne = async (id) => {
    id = id.trim();
    if (this.current && this.current.id == id) return;
    if (!id) return;
    this.setCurrent({});
    this.setIsLoading(true);
    const results = await this.mediaApi.getById(id);

    if (results.success !== undefined && results.success == false) return;

    this.current = results ? results : {};

    this.setIsLoading(false);
  };

  /* 
    SETTERS FOR OBSERVABLES STATES
  */

  setCurrent(value) {
    this.current = value;
  }

  setTrending(value) {
    this.trending = value;
  }

  setPopular(value) {
    this.popular = value;
  }

  setSearchResults(value) {
    this.searchResults = value;
  }

  setIsLoading(value) {
    this.isLoading = value;
  }

  setLastSearchQuery(value) {
    this.lastSearchQuery = value;
  }
}

const store = new MediaStore();

export { store as MediaStore };
