import {observable, action, computed} from 'mobx';

export class AboutStore {
  @observable aboutTitle: 'About Title';

  @action
  getTitle() {
    return this.aboutTitle;
  }

  @computed
  get isString() {
    return typeof(this.aboutTitle != null);
  }

}

export default new AboutStore();