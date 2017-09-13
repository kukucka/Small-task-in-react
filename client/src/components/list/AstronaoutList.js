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

  handleDeleteAstronaut = id => {
    // bears endpoint currently holds the object { name: 'Bill', type: 'Grizzly' }
    base
      .update(`astronauts/${id}`, {
        data: { deleted: true }
      })
      .then(() => {
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
      })
      .catch(err => {
        //handle error
      });
  };

  render() {
    return (
      <div>
        <ListFrame
          data={this.state.list}
          onhandleDeleteAstronaut={this.handleDeleteAstronaut}
        />
      </div>
    );
  }
}

export default AstronaoutList;
