import { makeAutoObservable } from 'mobx';

class MediaStore {
  _current;
  _airingToday;
  _searchResults;

  constructor() {
    makeAutoObservable(this);
  }

  get current() {
    return this._current;
  }
  set current(value) {
    this._current = value;
  }
  get airingToday() {
    return this._airingToday;
  }
  set airingToday(value) {
    this._airingToday = value;
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
