import React, { Component } from 'react';
import Axios from 'axios';

import './smurf.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      image: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height, image } = this.state;
    const payload = { name, age, height, image };
    Axios.post('http://localhost:3333/smurfs', payload)
      .then(res => {
        this.props.updateSmurfs(res.data);
        this.setState({
          name: '',
          age: '',
          height: '',
          image: ''
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('Error:', err);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, age, height, image } = this.state;
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.addSmurf} className='form'>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={name}
            name='name'
            className='smurf-form-input'
            type='text'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={age}
            name='age'
            className='smurf-form-input'
            type='number'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={height}
            name='height'
            className='smurf-form-input'
            type='number'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='image URL'
            value={image}
            name='image'
            className='smurf-form-input'
            type='text'
          />
          <button type='submit' className='form-btn'>
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
