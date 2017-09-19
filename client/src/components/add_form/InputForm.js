import React from 'react';
import { Form, Button, Label } from 'semantic-ui-react';

import { days } from '../../data/days';
import { months } from '../../data/months';
import { years } from '../../data/years';

import InputField from './InputField';
import DropdownField from './DropdownField';

const InputForm = props => {
  return (
    <div className="form-wrapper">
      <h1>Add New Astronaut</h1>
      <Form className="form" onSubmit={props.onHandleSubmit}>
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
        <Form.Field>
          <div className="form-align-helper">
          <Label className="form-label">Date of Birth</Label>
        </div>
          <div className="form-group-dropdown">
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
            <div className="try">
            <DropdownField
              errors={props.errors.year}
              holder="Year"
              name="year"
              option={years}
              value={props.data.year}
              onHandleChangeOnInput={props.onHandleChangeOnInput}

            />
          </div>

          </div>
        </Form.Field>
        <div className="form-align-helper">
          <Button className="form-btn">Submit</Button>
          <Button className="form-btn" onClick={props.onHandleBack}>
            Go back
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default InputForm;
