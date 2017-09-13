import React, { Component } from 'react';
import axios from 'axios';
import { Router } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import InputForm from './InputForm';
import { base } from '../../base';

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
    listOfAstr: []
    //tesstovaci ucely
  };

  // componentWillMount() {
  //   this.astronautRef = base.syncState('listOfAstr', {
  //     context: this,
  //     state: 'listOfAstr'
  //   });
  // }
  //
  // componentWillUnmount() {
  //   base.removeBinding(this.astronautRef);
  // }
  //
  // addAstrounaut = () => {
  //   const astrounat =
  // }

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
    let userId = Date.now();
    base
      .post(`astronauts/${userId}`, {
        data: {
          astronaut: this.state.data,
          id: userId,
          key: userId,
          deleted: false
        }
      })
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => {
        // handle error
      });
  };

  handleBack = e => {
    e.preventDefault();
    this.props.history.push('./');
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
          onHandleBack={this.handleBack}
        />
      </div>
    );
  }
}

// AddNewForm.propTypes = {};

export default AddNewForm;
