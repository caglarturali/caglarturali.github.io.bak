/**
 * MainContact component.
 */
import React from 'react';
import ButtonLink from '../../ButtonLink';
import contactInfo from '../../../data/contact.json';

const mainContact = contactInfo.content.filter(
  (contactItem) => contactItem.isMain,
)[0];

const MainContact = () => (
  <ButtonLink
    href={mainContact.url}
    title={`Find me on ${mainContact.name}`}
    icon={mainContact.icon}
    iconSize="lg"
    text="Contact Me"
    showCount={false}
  />
);

export default MainContact;
