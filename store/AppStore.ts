import {observable, action, computed} from 'mobx';

class AppStore {
  @observable title: string | undefined;

  constructor(title: string) {
    this.title = title;
  }

  @action
  getTitle(title: string) {
    this.title = title;
  }

  @computed
  get isString() {
    return typeof(this.title != null);
  }

}

export default AppStore;