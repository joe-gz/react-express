import React, { Component } from 'react';
import store from '../store';
import {toggleModal} from '../actions/actions';
import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {

  openModal = () => {
    store.dispatch(toggleModal({visible: true}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" onClick={this.openModal}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
