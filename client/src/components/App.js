import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import AstronaoutList from './list/AstronaoutList';
import AddNewForm from './add_form/AddNewForm';
import Error from './Error';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AstronaoutList} />
            <Route exact path="/new" component={AddNewForm} />
            <Route path="*" component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
