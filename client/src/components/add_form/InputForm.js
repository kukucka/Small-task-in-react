import React, { Component } from 'react';
import { Form, Input, Dropdown, Rating, Accordion } from 'semantic-ui-react';

import { days } from '../../data/days';
import { months } from '../../data/months';
import { years } from '../../data/years';

import InputField from './InputField';
import DropdownField from './DropdownField';

const InputForm = props => {
  return (
    <div>
      <h1>Add New Astronaut</h1>
      <Form onSubmit={props.onHandleSubmit}>
        <InputField
          errors={props.errors.name}
          name="name"
          holder="Name"
          value={props.data.name}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <InputField
          errors={props.errors.surename}
          name="surename"
          holder="Surename"
          value={props.data.surename}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <InputField
          errors={props.errors.superpower}
          name="superpower"
          holder="Superpower"
          value={props.data.superpower}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <Form.Field required style={{ marginTop: '5px' }}>
          <label>Date of Birth</label>
          <Form.Group unstackable>
            <DropdownField
              errors={props.errors.day}
              holder="Day"
              name="day"
              option={days}
              value={props.data.day}
              onHandleChangeOnInput={props.onHandleChangeOnInput}
            />
            <DropdownField
              errors={props.errors.month}
              holder="Month"
              name="month"
              option={months}
              value={props.data.month}
              onHandleChangeOnInput={props.onHandleChangeOnInput}
            />
            <DropdownField
              errors={props.errors.year}
              holder="Year"
              name="year"
              option={years}
              value={props.data.year}
              onHandleChangeOnInput={props.onHandleChangeOnInput}
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

export default InputForm;
