import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownField extends Component {
  constructor(props) {
    super(props);

    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(e, data) {
    console.log(data.value);
    console.log(data.name);
  }

  render() {
    return (
      <div>
        <Dropdown
          placeholder={this.props.holder}
          search
          selection
          options={this.props.option} //{this.handleOptions()}
          name={this.props.name}
          onChange={this.handleDate}
        />
      </div>
    );
  }
}

export default DropdownField;
