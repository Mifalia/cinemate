import { makeAutoObservable } from 'mobx';
import MediaApi from 'services/MediaApi';

// api key from .env file
const API_KEY = process.env.API_KEY;

class MediaStore {
  /*
    STORE OBSERVABLES
  */
  current = null;
  trending = [];
  popular = [];
  searchResults = [];

  isLoading = false;

  // store self related properties
  mediaApi;

  constructor() {
    if (!API_KEY) {
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

  async load() {
    const trending = await this.mediaApi.getTrending();
    this.trending = trending ? trending.results : [];
    const popular = await this.mediaApi.getPopular();
    this.popular = popular ? trending.results : [];
  }

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
}

const store = new MediaStore();

export { store as MediaStore };
