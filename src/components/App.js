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
        <div onClick={this.openModal}>
          Click for redux action
        </div>
      </div>
    );
  }
}

export default App;
