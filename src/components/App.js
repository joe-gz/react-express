import React, { Component } from 'react';
import store from '../store';
import {toggleModal} from '../actions/actions';
// import logo from '../images/logo.svg';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Login from './Login/Login';
import NotFound from './Errors/NotFound';
import '../styles/App.css';
import RouteTest from './RouteTest';

class App extends Component {

  openModal = () => {
    store.dispatch(toggleModal({visible: true}));
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.openModal}>
          Click for redux action
        </div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/routeTest' component={RouteTest}/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
