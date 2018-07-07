import * as React from 'react';
const css = require('./static/styles.styl');

export interface Props {
  name: string;
  number?: number;
}

class Index extends React.Component<Props, object> {
  render() {
    const { name = 'yeah!', number = 1 } = this.props;

    return (
      <div className={css.hello}>
        <div className="greeting">
          Hello { name }
          <button>11</button>
        </div>
      </div>
    );
  }
}

export default Index;