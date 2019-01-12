import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactInfo from '../../data/contact.json';

const mainContact = contactInfo.content.filter(contactItem => contactItem.isMain)[0];

const MainContact = () => (
  <a className="main-button" href={mainContact.url} target="_blank" rel="noopener noreferrer">
    <span className="main-button__contents">
      <FontAwesomeIcon className="main-button__icon" icon={mainContact.icon} size="lg" />
      <span className="main-button__text">Contact Me</span>
    </span>
  </a>
);

export default MainContact;
