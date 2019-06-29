import React from 'react';

import './smurf.css';

const Smurf = props => {
  return (
    <div className='Smurf'>
      <img src={props.image} alt={props.name} />
      <div className='text-content'>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
