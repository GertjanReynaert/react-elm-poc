import React, { Component } from 'react';

import CounterJs from 'app/Counter';
import Elm from 'elm/Counter.elm';

class Application extends Component {
  componentDidMount() {
    Elm.Counter.embed(this.refs.elmMount);
  }

  render() {
    return (
      <div>
        <div className="column-1">
          <h1>Hello world: React</h1>
          <CounterJs />
        </div>
        <div className="column-2">
          <h1>Hello world: Elm</h1>
          <div ref="elmMount" />
        </div>
      </div>
    );
  }
}

export default Application;
