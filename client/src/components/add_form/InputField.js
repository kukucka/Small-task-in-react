import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class InputField extends Component {
  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log(val, name);
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
        <Form.Field
          error={!!this.props.errors}
          style={{ marginTop: '5px' }}
          required
          onClick={this.checkForError}
        >
          <label htmlFor={this.props.name}>{this.props.holder}</label>
          {this.displayError()}
          <Input
            placeholder={this.props.holder}
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.handleInput}
          />
        </Form.Field>
      </div>
    );
  }
}

export default InputField;
