import AppStore from './AppStore';
let store = null

export function initializeStore () {
  store = new AppStore('Hello Mobx!');
  return store
}