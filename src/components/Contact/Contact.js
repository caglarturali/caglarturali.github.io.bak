import React from 'react';
import contactInfo from '../../data/contact.json';

const Contact = () => (
  <div className="container">
    <div className="contact">
      <h2 className="container__title">contact</h2>
      <h3 className="container__subtitle">Feel free to contact me</h3>
      <div className="container__list">
        <ul>
          {contactInfo.map(contactItem => (
            <li key={`contact-page-${contactItem.name}`}>
              <a
                href={contactItem.url}
                aria-label={`Find me on ${contactItem.name}`}
                title={`Find me on ${contactItem.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactItem.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Contact;
