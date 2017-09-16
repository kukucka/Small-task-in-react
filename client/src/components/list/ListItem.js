import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import FlipMove from 'react-flip-move';

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
            <div key={data[i].id} className="list-item">
              <div className="list-unit">
                <div className="list-unit-part">
                  {`${data[i].astronaut.name} ${data[i].astronaut.surename}`}
                </div>
                <div className="list-unit-part">
                  {`${data[i].astronaut.day}.${data[i].astronaut.month} ${data[
                    i
                  ].astronaut.year}`}
                </div>
                <div className="list-unit-part">{`${data[i].astronaut
                  .superpower}`}</div>
                <div className="list-unit-btn">
                  <Button
                    className="list-btn-delete"
                    id={data[i].id}
                    onClick={this.handleBtnClick}
                  >
                    X
                  </Button>
                </div>
              </div>
            </div>
          );
          j += 1;
        }
      }
      return arr;
    }
  };

  render() {
    return (
      <div className="list-segment">
        <div>
          <div className="list-header">
            <div className="list-header-part">Full Name</div>
            <div className="list-header-part">Date of Birth</div>
            <div className="list-header-part">Superpower</div>
            <div className="list-unit-btn" />
          </div>
        </div>

        <FlipMove
          maintainContainerHeight={true}
          enterAnimation="elevator"
          leaveAnimation="elevator"
          duration="500"
        >
          {this.handleCreateList()}
        </FlipMove>
      </div>
    );
  }
}

export default ListItem;
