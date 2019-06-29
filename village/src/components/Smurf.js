import React from 'react';
import { Link } from 'react-router-dom';

import './smurf.css';

export default props => {
  return (
    <Link to={`/edit/${props.id}`} className='card-link'>
      <div className='Smurf'>
        <img src={props.image} alt={props.name} className='smurf-img' />
        <div className='text-content'>
          <h3>{props.name}</h3>
          <strong>{props.height}cm tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
      </div>
    </Link>
  );
};
