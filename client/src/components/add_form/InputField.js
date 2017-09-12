import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form.Field required style={{ marginTop: '5px' }}>
          <label htmlFor={this.props.name}>{this.props.holder}</label>
          <Input
            placeholder={this.props.holder}
            type="text"
            name={this.props.name}
            value={this.props.value}
          />
        </Form.Field>
      </div>
    );
  }
}

export default InputField;
