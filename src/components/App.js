import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Login';
import LandingPage from './pages/SignupPage';
import ClustersPage from './pages/ClustersPage';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/clusters" component={ClustersPage}/>
            <Route exact path="/login" component={Login}/>
          </Switch>  
      </BrowserRouter>
    )
  }
}

export default App;
