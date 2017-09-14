import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownField extends Component {
  handleInput = (e, data) => {
    let value = data.value;
    let name = data.name;
    this.props.onHandleChangeOnInput(value, name);
  };

  displayError = () => {
    if (this.props.errors) {
      return <h3>{this.props.errors}</h3>;
    }
    return '';
  };

  render() {
    return (
      <div>
        {this.displayError()}
        <Dropdown
          error={!!this.props.errors}
          placeholder={this.props.holder}
          search
          selection
          options={this.props.option} //{this.handleOptions()}
          name={this.props.name}
          onChange={this.handleInput}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default DropdownField;
