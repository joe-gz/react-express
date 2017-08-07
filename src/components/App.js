import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import NotFound from './Errors/NotFound';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
