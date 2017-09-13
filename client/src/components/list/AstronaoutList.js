import React, { Component } from 'react';

import ListFrame from './ListFrame';
import { base } from '../../base';

class AstronaoutList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    base
      .fetch('astronauts', {
        context: this,
        asArray: true
      })
      .then(data => {
        this.setState(() => {
          return {
            list: data
          };
        });
      });
  }

  render() {
    return (
      <div>
        <ListFrame />
      </div>
    );
  }
}

export default AstronaoutList;
