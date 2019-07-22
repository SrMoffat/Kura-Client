import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Login';
import pages from './pages';
import Modal from '../components/Modal';

const {
  LandingPage,
  HomePage,
  ClustersPage,
  PositionsPage,
  NominationsPage,
  VotesPage
} = pages;

class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/cluster" component={ClustersPage}/>
            <Route exact path="/position" component={PositionsPage}/>
            <Route exact path="/nomination" component={NominationsPage}/>
            <Route exact path="/ballot" component={VotesPage}/>
            <Route exact path="/modal" component={Modal}/>
          </Switch>  
      </BrowserRouter>
    )
  }
}

export default App;
