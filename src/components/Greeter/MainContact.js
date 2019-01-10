import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainContact = () => (
  <a className="main-button" href="https://t.me/caglarturali" target="_blank" rel="noopener noreferrer">
    <span className="main-button__contents">
      <FontAwesomeIcon className="main-button__icon" icon={['fab', 'telegram-plane']} size="lg" />
      <span className="main-button__text">Contact Me</span>
    </span>
  </a>
);

export default MainContact;
