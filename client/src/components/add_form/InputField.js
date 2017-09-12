import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class InputField extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let val = e.target.value;
    let name = e.target.name;
    console.log(val, name);
    this.props.onHandleChangeOnInput(val, name);
  }

  render() {
    console.log();
    return (
      <div>
        <Form.Field required style={{ marginTop: '5px' }}>
          <label htmlFor={this.props.name}>{this.props.holder}</label>
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
