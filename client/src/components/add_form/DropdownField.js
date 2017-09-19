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
      return <div className="form-error form-error-dropdown">{this.props.errors}</div>;
    }
    return '';
  };

  render() {
    return (
      <div>
        <Dropdown
          className="form-input-dropdown"
          error={!!this.props.errors}
          placeholder={this.props.holder}
          type="text"
          search
          selection
          options={this.props.option}
          name={this.props.name}
          onChange={this.handleInput}
          value={this.props.value}
        />
        {this.displayError()}
      </div>
    );
  }
}

export default DropdownField;
