import React from 'react';
import { Link } from 'react-router-dom';

import './smurf.css';

export default props => {
  const smurf = props.smurfs.find(i => String(i.id) === props.match.params.id);

  if (!smurf) {
    return <div>Searching smurf Database...</div>;
  }
  console.log(props);
  return (
    <div className='Smurf-solo'>
      <img src={smurf.image} alt={smurf.name} className='smurf-img' />
      <div className='text-content'>
        <h3>{smurf.name}</h3>
        <strong>{smurf.height}cm tall</strong>
        <p>{smurf.age} smurf years old</p>
      </div>
      <Link to={`/edit/${smurf.id}`} className='card-link'>
        <button className='form-btn-alt'>Edit Smurf</button>
      </Link>
    </div>
  );
};
