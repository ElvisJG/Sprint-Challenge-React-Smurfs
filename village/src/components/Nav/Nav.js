import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

export default function Nav() {
  return (
    <div className='nav-links'>
      <nav>
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink exact to='/smurf-form'>
          Add Smurf
        </NavLink>
      </nav>
    </div>
  );
}
