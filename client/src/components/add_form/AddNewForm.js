import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css';
import InputForm from './InputForm';

class AddNewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: '',
        surename: '',
        superpower: '',
        nationality: '',
        dateOfBirth: {
          day: '',
          month: '',
          year: ''
        }
      },
      listOfAstr: []
    };

    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
    this.handleChangeOnDropdown = this.handleChangeOnDropdown.bind(this);
  }

  handleChangeOnInput(char, state) {
    this.setState(prevState => {
      console.log(prevState.data);
      console.log(state, char);
      return {
        data: {
          ...prevState.data,
          [state]: char
        }
      };
    });
  }

  handleChangeOnDropdown(char, state) {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          dateOfBirth: { ...prevState.data.dateOfBirth, [state]: char }
        }
      };
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <InputForm
          data={this.state.data}
          onHandleChangeOnInput={this.handleChangeOnInput}
          onHandleChangeOnDropdown={this.handleChangeOnDropdown}
        />
      </div>
    );
  }
}

// AddNewForm.propTypes = {};

export default AddNewForm;
