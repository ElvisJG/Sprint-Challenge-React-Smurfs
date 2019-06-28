import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav'>
      <nav>
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink exact to='/smurf-form'>
          Form
        </NavLink>
      </nav>
    </div>
  );
}
