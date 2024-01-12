import { makeAutoObservable } from 'mobx';

class MediaStore {
  /*
    STORE OBSERVABLES
  */
  _current;
  _trending;
  _searchResults;

  constructor() {
    makeAutoObservable(this);
  }

  /*
    STORE ACTIONS
  */

  /* 
    GETTERS AND SETTERS OF THIS.PROPERTIES
  */
  get current() {
    return this._current;
  }
  set current(value) {
    this._current = value;
  }
  get trending() {
    return this._trending;
  }
  set trending(value) {
    this._trending = value;
  }
  get searchResults() {
    return this._searchResults;
  }
  set searchResults(value) {
    this._searchResults = value;
  }
}

const store = new MediaStore();

export { store as MediaStore };
