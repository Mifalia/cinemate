import { makeObservable, observable } from 'mobx';

class MediaStore {
  current;
  airingToday;
  searchResults;

  constructor() {
    makeObservable(this, {
      current: observable,
      airingToday: observable,
      searchResults: observable,
    });
  }
}

const MediaStore = new MediaStore();

export default MediaStore;
