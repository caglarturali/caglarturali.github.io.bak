import React from 'react';
import NavItem from './NavItem';
import navLinks from '../../data/navLinks.json';

const Navbar = () => (
  <nav id="main-nav">
    <ul>
      {navLinks.map(navLink => (
        <li key={navLink.linkName}>
          <NavItem {...navLink} />
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
