import React, { Component } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav/Nav';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import logo from './assets/smurfs_logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    Axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log('Error:', err);
      });
  }

  updateSmurfs = smurfs => {
    this.setState({ smurfs });
  };

  render() {
    return (
      <div className='App'>
        <Nav />
        <img src={logo} alt='logo' className='logo' />

        <Route
          exact
          path='/'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />

        <Route
          exact
          path='/smurf-form'
          render={props => (
            <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />
          )}
        />
      </div>
    );
  }
}

export default App;
