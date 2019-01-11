import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftBar = () => (
  <div id="left-bar">
    <div>
      <span className="left-bar__icon">
        <FontAwesomeIcon icon="copy" size="lg" />
      </span>
      <span className="left-bar__icon">
        <FontAwesomeIcon icon="search" size="lg" />
      </span>
    </div>
    <div>
      <span className="left-bar__icon">
        <FontAwesomeIcon icon="cog" size="lg" />
      </span>
    </div>
  </div>
);

export default LeftBar;
