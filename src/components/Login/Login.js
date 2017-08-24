import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import store from '../../store';
import {setCurrentUser} from '../../actions/actions';

class Login extends Component {

  login = () => {
    console.log(this.refs);
    axios.post('/signin', {
      username: this.refs.loginusername.input.value,
      password:this.refs.loginpassword.input.value
    })
    .then((response) => {
      console.log(response);
      store.dispatch(setCurrentUser(response.data));
      this.props.history.push('/routeTest');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  signup = () => {
    console.log(this.refs);
    axios.post('/signup', {
      username: this.refs.username.input.value,
      password:this.refs.password.input.value
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.login();
    }
  }

  handleSignUpPress = (evt) => {
    if (evt.key === 'Enter') {
      this.signup();
    }
  }

  render() {
    console.log(this);
    return (
      <div>
        <div className='Signup'>
          <TextField
            className='signup__form__input'
            hintText='User email'
            onKeyPress={this.handleSignUpPress}
            ref='username'
            name='username' />
          <TextField
            className='signup__form__input'
            hintText='Password'
            onKeyPress={this.handleSignUpPress}
            ref='password'
            type='password'
            name='password' />
            <div onClick={this.signup}>Sign Up</div>
        </div>
        <div className='Login'>
          <TextField
            className='login__form__input'
            hintText='User email'
            onKeyPress={this.handleKeyPress}
            ref='loginusername'
            name='username' />
          <TextField
            className='login__form__input'
            hintText='Password'
            onKeyPress={this.handleKeyPress}
            ref='loginpassword'
            type='password'
            name='password' />
            <div onClick={this.login}>Login</div>
        </div>
      </div>
    );
  }
}

export default Login;
