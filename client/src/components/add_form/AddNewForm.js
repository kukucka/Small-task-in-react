import React, { Component } from 'react';
import axios from 'axios';
// import 'semantic-ui-css/semantic.min.css';
import InputForm from './InputForm';

class AddNewForm extends Component {
  state = {
    data: {
      name: '',
      surename: '',
      superpower: '',
      dateOfBirth: {
        day: '',
        month: '',
        year: ''
      }
    },
    listOfAstr: [] //tesstovaci ucely
  };

  handleChangeOnInput = (char, state) => {
    this.setState(prevState => {
      // console.log(prevState.data);
      // console.log(state, char);
      return {
        data: {
          ...prevState.data,
          [state]: char
        }
      };
    });
  };

  handleChangeOnDropdown = (char, state) => {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          dateOfBirth: { ...prevState.data.dateOfBirth, [state]: char }
        }
      };
    });
  };

  handleSubmit = () => {
    // console.log(this.state.data);
    axios
      .post('/api/new_user', this.state.data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <InputForm
          data={this.state.data}
          onHandleChangeOnInput={this.handleChangeOnInput}
          onHandleChangeOnDropdown={this.handleChangeOnDropdown}
          onHandleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

// AddNewForm.propTypes = {};

export default AddNewForm;
