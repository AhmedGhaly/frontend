import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/layouts/Navbar';
import './App.css';
import Card from './components/Cards/Card';
import Order from './components/order/Order'
import Signup from './components/Auth/Signup';
import login from './components/Auth/login';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/card' component={Card} />
          <Route path='/order' component={Order} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={login} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
