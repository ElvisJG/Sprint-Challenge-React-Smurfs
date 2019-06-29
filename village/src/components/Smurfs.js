import React from 'react';

import Smurf from './Smurf';
import './smurf.css';

export default props => {
  return (
    <div className='Smurfs'>
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              image={smurf.image}
            />
          );
        })}
      </ul>
    </div>
  );
};
