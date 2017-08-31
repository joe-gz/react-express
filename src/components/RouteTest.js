import React, { Component } from 'react';
// import {apiPath} from '../config.js';
import axios from 'axios';
import store from '../store';
import {setCurrentUser} from '../actions/actions';

class RouteTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputCreateValue: '',
      inputUpdateValue: '',
      inputUpdateIdValue: '',
      inputDeleteIdValue: '',
      userSamples: [],
      ...store.getState()
    };
  }

  unsubscribe: () => void;

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
    console.log(this.state);
    if (!this.state.currentUser.id) {
      console.log('no user!');
      this.fetchUserInfo();
    } else {
      this.getSamples();
    }
  }
  //
  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate:Function = () => {
    this.setState(store.getState());
  };

  fetchUserInfo = () => {
    console.log('fetch user?');
    axios.get('/get-user')
    .then((response) => {
      if (response.data && response.data !== '') {
        store.dispatch(setCurrentUser(response.data.user));
        this.setState({userSamples: response.data.samples});
      } else {
        this.props.history.push('/');
      }
    })
    .catch((error) => {
      console.log(error);
      this.props.history.push('/');
    });
  }

  getSamples = () => {
    console.log(this.state.currentUser);
    axios.get('/samples/' + this.state.currentUser.id)
    .then((response) => {
      console.log(response);
      this.setState({userSamples: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleCreateInputChange = (evt) => {
    this.setState({inputCreateValue: evt.target.value});
  }

  createSample = () => {
    console.log(this.state.inputCreateValue);

    const bigObj = {
      text: this.state.inputCreateValue,
      value: 10
    };

    axios.post(`/create/${this.state.currentUser.id}`, {
      data: bigObj
    })
    .then((response) => {
      console.log('completed');
      console.log(response);
      const userSamples = this.state.userSamples.slice();
      userSamples.push(response.data);
      this.setState({
        inputCreateValue: '',
        userSamples: userSamples
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleUpdateInputChange = (evt) => {
    this.setState({inputUpdateValue: evt.target.value});
  }

  handleUpdateIdChange = (evt) => {
    this.setState({inputUpdateIdValue: evt.target.value});
  }

  updateSample = () => {
    console.log(this.state.inputUpdateValue);
    console.log(this.state.inputUpdateIdValue);

    const bigObj = {
      text: this.state.inputUpdateValue
    };

    axios.put(`/update/${this.state.inputUpdateIdValue}/${this.state.currentUser.id}`, {
      data: bigObj
    })
    .then((response) => {
      console.log('completed');
      console.log(response);
      this.setState({
        inputUpdateValue: '',
        inputUpdateIdValue: ''
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleDeleteIdChange = (evt) => {
    this.setState({inputDeleteIdValue: evt.target.value});
  }

  deleteSample = () => {
    console.log(this.state.inputDeleteIdValue);
    axios.delete(`/delete/${this.state.inputDeleteIdValue}/${this.state.currentUser.id}`)
    .then((response) => {
      console.log('completed');
      console.log(response);
      this.setState({
        inputDeleteIdValue: ''
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  logout = () => {
    axios.get('/signout')
    .then(response => {
      console.log(response);
      this.props.history.push('/');
    })
    .catch(err => {
      console.log('could not log out!');
      console.log(err);
    });
  }

  setupUser = () => {
    let user;
    if (this.state.currentUser.id) {
      user = (
        <div>
          <div>{this.state.currentUser.id}</div>
          <div>{this.state.currentUser.username}</div>
        </div>
      )
    } else {
      user = (
        <div>
          Guess you gotta login!
        </div>
      )
    }
    return user;
  }
  setupUserSamples = (sample) => {
    return (
      <div key={sample.id}>
        <div>{sample.text}</div>
        <div>{sample.value}</div>
      </div>
    )
  }

  render() {

    const userInfo = this.setupUser();
    const userSamples = this.state.userSamples.map(this.setupUserSamples);

    return (
      <div className='RouteTest'>
        Hello from the Route test page
        <div onClick={this.logout}>Logout</div>
        <div className='input-container'>
          <label htmlFor='create-input'>Create</label>
          <input id='create-input' type='text' value={this.state.inputCreateValue} onChange={this.handleCreateInputChange} />
          <div onClick={this.createSample}>Create</div>
        </div>
        <div className='input-container'>
          <div>
            <label htmlFor='update-id-input'>Update Id</label>
            <input id='update-id-input' type='text' value={this.state.inputUpdateIdValue} onChange={this.handleUpdateIdChange} />
          </div>
          <div>
            <label htmlFor='update-input'>Update Text</label>
            <input id='update-input' type='text' value={this.state.inputUpdateValue} onChange={this.handleUpdateInputChange} />
          </div>
          <div onClick={this.updateSample}>Update</div>
        </div>
        <div className='input-container'>
          <label htmlFor='delete-input'>Delete</label>
          <input id='delete-input' type='text' value={this.state.inputDeleteIdValue} onChange={this.handleDeleteIdChange} />
          <div onClick={this.deleteSample}>Delete</div>
        </div>
        <div>
          {userInfo}
        </div>
        <div>
          {userSamples}
        </div>
      </div>
    );
  }
}

export default RouteTest;
