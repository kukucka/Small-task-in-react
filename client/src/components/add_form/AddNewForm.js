import React, { Component } from 'react';
import InputForm from './InputForm';
import { base } from '../../base';

class AddNewForm extends Component {
  state = {
    data: {
      name: '',
      surename: '',
      superpower: '',
      day: '',
      month: '',
      year: ''
    },
    errors: {
      name: '',
      surename: '',
      superpower: '',
      day: '',
      month: '',
      year: ''
    },
    add: true
  };

  checkForErrors = () => {
    let data = this.state.data;
    let errors = this.state.errors;
    let arr = ['name', 'surename', 'superpower', 'day', 'month', 'year'];
    for (let i = 0; i < arr.length; i++) {
      if (data[arr[i]] === '') {
        this.setState(prevState => {
          return {
            errors: { ...prevState.errors, [arr[i]]: `${arr[i]} is required` },
            add: false
          };
        });
      } else if (errors[arr[i]] !== '') {
        this.setState(prevState => {
          return {
            errors: { ...prevState.errors, [arr[i]]: '' }
          };
        });
      }
    }
  };

  handleChangeOnInput = (value, state) => {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          [state]: value
        }
      };
    });
  };


  handleSubmit = e => {
    e.preventDefault();

    Promise.resolve()
      .then(() => {
        this.checkForErrors();
      })
      .then(() => {
        if (this.state.add) {
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
              this.props.history.push('/list');
            });
        } else {
          this.setState(() => {
            return {
              add: true
            };
          });
        }
      });
  };

  handleBack = e => {
    e.preventDefault();
    this.props.history.push('./list');
  };

  render() {
    return (
      <div>
        <InputForm
          className ="form-wrapper"
          errors={this.state.errors}
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


export default AddNewForm;
