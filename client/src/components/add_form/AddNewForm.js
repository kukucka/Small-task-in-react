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

  render() {
    console.log(this.state);
    return (
      <div>
        <InputForm
          data={this.state.data}
          onHandleChangeOnInput={this.handleChangeOnInput}
        />
      </div>
    );
  }
}

// AddNewForm.propTypes = {};

export default AddNewForm;
