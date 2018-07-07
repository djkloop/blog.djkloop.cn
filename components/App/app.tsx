import React from 'react';
import {observer, inject} from 'mobx-react';
const css = require('../../static/styles.styl');

@inject('store') @observer
class App extends React.Component<any, undefined> {
  render () {
    console.log(this.props.store.title);
    return (
      <div className={css.hello}>
        { this.props.store.title }
      </div>
    )
  }
}

export default App;