import React, { Component } from 'react';
import { Form, Input, Label } from 'semantic-ui-react';

class InputField extends Component {
  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.props.onHandleChangeOnInput(value, name);
  };

  displayError = () => {
    if (this.props.errors) {
      return <div className="form-error">{this.props.errors}</div>;
    }
    return '';
  };



  render() {
    return (
      <div>
        <Form.Field
          error={!!this.props.errors}
          onClick={this.checkForError}
        >
          <Label className="form-label" htmlFor={this.props.name}>{this.props.holder}</Label>
          <Input
            error={!!this.props.errors}
            className="form-input-field"
            placeholder={this.props.holder}
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.handleInput}
          />
          {this.displayError()}

        </Form.Field>
      </div>
    );
  }
}

export default InputField;
