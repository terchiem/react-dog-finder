import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ dogNames }) {

  const links = dogNames.map(name => (
    <li key={name}>
      <NavLink to={`/dogs/${name.toLowerCase()}`}>{name}</NavLink>
    </li>
  ))

  return (
    <ul className="Nav">
      { links }
    </ul>
  );
}

export default Nav;