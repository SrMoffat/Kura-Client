import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/SignupPage';
import Login from './Login';
import CreateLink from './CreateLink';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/create" component={CreateLink}/>
            <Route exact path="/login" component={Login}/>
          </Switch>  
      </BrowserRouter>
    )
  }
}

export default App;
