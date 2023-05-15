import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../App.css';

export const NavbarItem = ({ to, text }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) => isActive && 'text-lightgreen'}
    >
      {text}
    </NavLink>
  </li>
);
