import React, { Component, PropTypes } from 'react';
import { Form, Input, Dropdown } from 'semantic-ui-react';
import {days} from '../../data/days';
import {months} from '../../data/months';
import {years} from '../../data/years';
class InputForm extends Component {
  handleDay(e, data){
    console.log(data.value);
  }

  render() {
    return (
      <div>
        <h1>Add New Astronaut</h1>
        <Form onSubmit={() => console.log('wow')}>
          <Form.Field required>
            <label htmlFor="name">Name</label>
            <Input placeholder="Name" type="text" />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="surname">Surname </label>
            <Input placeholder="Surname" type="text" />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="superpower">Superpower</label>
            <Input placeholder="Superpower" />
          </Form.Field>
          <Form.Field required>
            <label>Birth Date</label>
            <Form.Group unstackable>
              <Dropdown placeholder="Day" search selection options={days} onChange={this.handleDay.bind(this)}/>
              <Dropdown placeholder="Month" search selection options={months} onChange={this.handleDay.bind(this)}/>
              <Dropdown placeholder="Year" search selection options={years} onChange={this.handleDay.bind(this)}/>
            </Form.Group>
          </Form.Field>
          <Form.Button primary>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

InputForm.propTypes = {};

export default InputForm;
