import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => (
  <nav id="main-nav">
    <ul>
      <li>
        <FontAwesomeIcon className="main-nav__icon" icon={['fab', 'html5']} size="sm" color="#e44d26" />
        <a href="#">home.html</a>
      </li>
      <li>
        <FontAwesomeIcon className="main-nav__icon" icon={['fab', 'js']} size="sm" color="#ffca28" />
        <a href="#">skills.js</a>
      </li>
      <li>
        <FontAwesomeIcon className="main-nav__icon" icon="university" size="sm" color="#42a5f5" />
        <a href="#">.educationrc</a>
      </li>
      <li>
        <FontAwesomeIcon className="main-nav__icon" icon="sliders-h" size="sm" color="#98c379" />
        <a href="#">projects.config</a>
      </li>
      <li>
        <FontAwesomeIcon className="main-nav__icon" icon={['fab', 'sass']} size="sm" color="#e13e76" />
        <a href="#">certifications.sass</a>
      </li>
      <li>
        <FontAwesomeIcon className="main-nav__icon" icon={['fab', 'markdown']} size="sm" color="#abb2bf" />
        <a href="#">contact.md</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
