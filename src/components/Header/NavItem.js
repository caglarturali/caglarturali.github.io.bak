import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ icon, color, linkTo, linkName }) => (
  <span>
    <Link to={linkTo}>
      <FontAwesomeIcon className="main-nav__icon" icon={icon} size="sm" color={color} />
      {linkName}
    </Link>
  </span>
);

export default NavItem;
