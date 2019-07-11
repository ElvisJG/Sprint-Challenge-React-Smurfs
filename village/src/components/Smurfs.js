import React from 'react';
import { Link } from 'react-router-dom';

import './smurf.css';

export default props => {
  return (
    <div className='Smurfs'>
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <Link
              to={`/smurf/${smurf.id}`}
              className='card-link'
              key={smurf.id}
            >
              <div className='Smurf'>
                <img src={smurf.image} alt={smurf.name} className='smurf-img' />
                <div className='text-content'>
                  <h3>{smurf.name}</h3>
                  <p>
                    <strong>{smurf.height}cm tall</strong>
                  </p>
                  <p>{smurf.age} smurf years old</p>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
