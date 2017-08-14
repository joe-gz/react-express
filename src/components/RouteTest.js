import React, { Component } from 'react';
import {apiPath} from '../config.js';
import axios from 'axios';

class RouteTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputCreateValue: '',
      inputUpdateValue: '',
      inputUpdateIdValue: '',
      inputDeleteIdValue: ''
    };
  }

  componentDidMount() {
    this.getSamples();
  }

  getSamples = () => {
    axios.get('/samples')
    .then(function (response) {
      console.log(response);
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
    const request = new XMLHttpRequest();
    request.onload = (reponse) => {
      console.log('completed');
      console.log(reponse);
      this.setState({inputCreateValue: ''});
    };
    request.onerror = err => {
      console.log(`Error: ${err}`);
    };

    request.open('POST', '/create', true);

    const bigObj = {
      text: this.state.inputCreateValue,
      value: 10
    };

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(bigObj));
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
    const request = new XMLHttpRequest();
    request.onload = (reponse) => {
      console.log('completed');
      console.log(reponse);
      this.setState({
        inputUpdateValue: '',
        inputUpdateIdValue: ''
      });
    };
    request.onerror = err => {
      console.log(`Error: ${err}`);
    };

    request.open('PUT', `/update/${this.state.inputUpdateIdValue}`, true);

    const bigObj = {
      text: this.state.inputUpdateValue
    };

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(bigObj));
  }

  handleDeleteIdChange = (evt) => {
    this.setState({inputDeleteIdValue: evt.target.value});
  }

  deleteSample = () => {
    console.log(this.state.inputDeleteIdValue);
    const request = new XMLHttpRequest();
    request.onload = (reponse) => {
      console.log('completed');
      console.log(reponse);
      this.setState({
        inputDeleteIdValue: ''
      });
    };
    request.onerror = err => {
      console.log(`Error: ${err}`);
    };

    request.open('DELETE', `/delete/${this.state.inputDeleteIdValue}`, true);

    const bigObj = {
      text: this.state.inputUpdateValue
    };

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(bigObj));
  }

  render() {
    return (
      <div className='RouteTest'>
        Hello from the Route test page
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
      </div>
    );
  }
}

export default RouteTest;
