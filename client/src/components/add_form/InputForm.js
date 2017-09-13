import React, { Component } from 'react';
import { Form, Input, Dropdown, Rating, Accordion } from 'semantic-ui-react';
import { days } from '../../data/days';
import { months } from '../../data/months';
import { years } from '../../data/years';

import InputField from './InputField';
import DropdownField from './DropdownField';

const InputForm = props => {
  // console.log(props.data);
  return (
    <div>
      <h1>Add New Astronaut</h1>
      <Form onSubmit={props.onHandleSubmit}>
        <InputField
          name="name"
          holder="Name"
          value={props.data.name}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <InputField
          name="surename"
          holder="Surename"
          value={props.data.surename}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <InputField
          name="superpower"
          holder="Superpower"
          value={props.data.superpower}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <Form.Field required style={{ marginTop: '5px' }}>
          <label>Birth Date</label>
          <Form.Group unstackable>
            <DropdownField
              holder="Day"
              name="day"
              option={days}
              value={props.data.dateOfBirth.day}
              onHandleChangeOnDropdown={props.onHandleChangeOnDropdown}
            />
            <DropdownField
              holder="Month"
              name="month"
              option={months}
              value={props.data.dateOfBirth.month}
              onHandleChangeOnDropdown={props.onHandleChangeOnDropdown}
            />
            <DropdownField
              holder="Year"
              name="year"
              option={years}
              value={props.data.dateOfBirth.year}
              onHandleChangeOnDropdown={props.onHandleChangeOnDropdown}
            />
          </Form.Group>
        </Form.Field>
        <Form.Group unstackable>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button primary onClick={props.onHandleBack}>
            Go back
          </Form.Button>
        </Form.Group>
      </Form>
    </div>
  );
};

// InputForm.propTypes = {};

export default InputForm;
