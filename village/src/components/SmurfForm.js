import React, { Component } from 'react';
import Axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    const payload = { name, age, height };
    Axios.post('http://localhost:3333/smurfs', payload)
      .then(res => {
        this.props.updateSmurfs(res.data);
        this.setState({
          name: '',
          age: '',
          height: ''
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
    const { name, age, height } = this.state;
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={name}
            name='name'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={age}
            name='age'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={height}
            name='height'
          />
          <button type='submit'>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
