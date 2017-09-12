import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownField extends Component {
  handleDate = (e, data) => {
    let val = data.value;
    let name = data.name;
    this.props.onHandleChangeOnDropdown(val, name);
  };

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
          value={this.props.value}
        />
      </div>
    );
  }
}

export default DropdownField;
