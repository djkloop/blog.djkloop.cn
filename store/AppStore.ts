import {observable, action, computed} from 'mobx';

export class AppStore {
  @observable title: string = "Hello Mobx";

  @action
  setAppTitle(appTitle: string) {
    this.title = appTitle;
  }

  @action
  getAppTitle() {
    return this.title;
  }

  @computed
  get GetAppComputedTitle() {
    return this.title;
  }

  @computed
  get AppTitleIsEmptry() {
    return this.title != null;
  }

}

export default new AppStore();