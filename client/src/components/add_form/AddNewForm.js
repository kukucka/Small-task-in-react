import React, { Component } from 'react';
// import 'semantic-ui-css/semantic.min.css';
import InputForm from './InputForm';

class AddNewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: 'one',
        surename: 'two',
        superpower: 'three',
        dateOfBirth: {
          day: '',
          month: '',
          year: ''
        }
      },
      listOfAstr: []
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <InputForm data={this.state.data} />
      </div>
    );
  }
}

// AddNewForm.propTypes = {};

export default AddNewForm;
