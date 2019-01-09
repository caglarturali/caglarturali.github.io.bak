import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ icon, color, linkTo, linkName }) => (
  <span>
    <FontAwesomeIcon className="main-nav__icon" icon={icon} size="sm" color={color} />
    <Link to={linkTo}>{linkName}</Link>
  </span>
);

export default NavItem;
