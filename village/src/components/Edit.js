import React, { Component } from 'react';
import Axios from 'axios';

import './smurf.css';

class SmurfForm extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: '',
      image: '',
      id: ''
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:3333/smurfs/`)
      .then(response => {
        console.log('send help: ', response.data);
        const smurf = response.data.find(i => String(i.id) === id);
        this.setState(smurf);
      })
      .catch(err => {
        this.setState({
          ErrorMessage: err.response.data.error
        });
      });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurf = e => {
    e.preventDefault();

    const { name, age, height, image } = this.state;
    const payload = { name, age, height, image };
    const id = this.props.match.params.id;

    Axios.put(`http://localhost:3333/smurfs/${id}`, payload)
      .then(res => {
        this.props.updateSmurfs(res.data);

        this.setState({
          errorMessage: null
        });

        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errorMessage: err.response.data.error
        });
      });
  };

  deleteSmurf = e => {
    e.preventDefault();

    const id = this.props.match.params.id;

    Axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.props.updateSmurfs(res.data);

        this.setState({
          errorMessage: null
        });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errorMessage: 'Oops'
        });
      });
  };

  render() {
    const { name, age, height, image } = this.state;
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.updateSmurf} className='form'>
          <input
            type='text'
            onChange={this.handleInputChange}
            placeholder='name'
            value={name}
            name='name'
            className='smurf-form-input'
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
            Submit Edit
          </button>
          <button onClick={this.deleteSmurf} className='form-btn'>
            Delete Smurf?!
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
