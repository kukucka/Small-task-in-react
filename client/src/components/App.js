import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import AstronaoutList from './list/AstronaoutList';
import AddNewForm from './add_form/AddNewForm';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={AstronaoutList} />
            <Route exact path="/new" component={AddNewForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
