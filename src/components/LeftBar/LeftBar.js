import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactInfo from '../../data/contact.json';

const LeftBar = () => (
  <div id="left-bar">
    <div>
      {contactInfo.map(contactItem => (
        <a
          className="left-bar__item"
          key={`left-bar-${contactItem.name}`}
          href={contactItem.url}
          aria-label={`Find me on ${contactItem.name}`}
          title={`Find me on ${contactItem.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="left-bar__icon" icon={contactItem.icon} size="lg" />
        </a>
      ))}
    </div>
    <div>
      <span className="left-bar__item" title="Useless button!">
        <FontAwesomeIcon icon="cog" size="lg" />
      </span>
    </div>
  </div>
);

export default LeftBar;
