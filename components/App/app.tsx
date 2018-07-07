import React from 'react';
import {observer, inject} from 'mobx-react';
const css = require('../../static/styles.styl');
import { AppStore }  from '../../store/AppStore';
import { APP_STORE } from '../../store/types/appStoreTypes';

interface AppStoreProps {
  title?: string;
  appStore?: AppStore;
}

@inject(APP_STORE)
@observer
class App extends React.Component<AppStoreProps, any> {

  constructor(props) {
    super(props);
  }

  changeTitle() {
    this.props.appStore.setAppTitle(`I'm Changed.`)
  }

  renderFUNC() {
    return this.props.appStore.GetAppComputedTitle
  }

  render () {
    console.log();
    return (
      <div className={css.hello}>
        { this.props.title }
        { this.renderFUNC() }
        <button onClickCapture={this.changeTitle.bind(this)}>ChangeTitle</button>
      </div>
    )
  }
}

export default App;