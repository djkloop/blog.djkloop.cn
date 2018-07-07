import appStore from './AppStore';
import aboutStore from './AboutStore';

let store = null

export function initializeStore () {
  store = {
    appStore,
    aboutStore
  }
  return store
}