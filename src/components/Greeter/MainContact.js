import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainContact = () => (
  <a className="main-contact" href="https://t.me/caglarturali" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="main-contact__icon" icon={['fab', 'telegram-plane']} size="lg" />
    <span className="main-contact__text">Contact Me</span>
  </a>
);

export default MainContact;
