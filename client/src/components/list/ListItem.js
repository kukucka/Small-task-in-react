import React, { Component } from 'react';
import firebase from 'firebase';
import { Segment, List, Button } from 'semantic-ui-react';

class ListItem extends Component {
  handleBtnClick = e => {
    let id = e.target.id;
    this.props.onhandleDeleteAstronaut(id);
  };

  handleCreateList = () => {
    let arr = [];
    let data = this.props.data;
    if (!!data) {
      for (let i = 0, j = 0; i < this.props.data.length; i++) {
        if (!data[i].deleted) {
          arr[j] = (
            <Segment key={data[i].id}>
              <List
                horizontal
                divided
                relaxed
                style={{ width: '100%', textAlign: 'center' }}
              >
                <List.Item style={{ width: '25%' }}>
                  {`${data[i].astronaut.name} ${data[i].astronaut.surename}`}
                </List.Item>
                <List.Item style={{ color: 'gray', width: '25%' }}>
                  {`${data[i].astronaut.dateOfBirth.day}.${data[i].astronaut
                    .dateOfBirth.month} ${data[i].astronaut.dateOfBirth.year}`}
                </List.Item>
                <List.Item style={{ width: '25%' }}>{`${data[i].astronaut
                  .superpower}`}</List.Item>
                <List.Item style={{ width: '25%', textAlign: 'right' }}>
                  <Button id={data[i].id} onClick={this.handleBtnClick}>
                    Delete
                  </Button>
                </List.Item>
              </List>
            </Segment>
          );
          j += 1;
        }
      }
      console.log(arr);
      return arr;
    }
  };

  render() {
    return (
      <div>
        <Segment>{this.handleCreateList()}</Segment>
      </div>
    );
  }
}

export default ListItem;
