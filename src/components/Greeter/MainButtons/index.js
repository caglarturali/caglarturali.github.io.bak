/**
 * MainButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import ButtonLink from '../../ButtonLink';
import GHButton from '../../GHButton';
import { user, repoName, repoUrl } from '../../../data/github.json';
import contactInfo from '../../../data/contact.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const buttons = [
  // Follow button
  {
    apiUrl: `https://api.github.com/users/${user}`,
    attr: 'followers',
    href: `https://github.com/${user}`,
    title: `Follow @${user} on GitHub`,
    icon: ['fab', 'github'],
    iconSize: 'lg',
    text: `Follow @${user}`,
  },
  // Stargazers button
  {
    apiUrl: `https://api.github.com/repos/${user}/${repoName}`,
    attr: 'stargazers_count',
    href: repoUrl,
    title: `Star ${user}/${repoName} on GitHub`,
    icon: 'star',
    iconSize: 'sm',
    text: 'Star',
  },
];

const mainContact = contactInfo.content.filter(
  (contactItem) => contactItem.isMain,
)[0];

const MainButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {buttons.map((ghButton) => (
          <GHButton key={`gh-btn-${ghButton.attr}`} {...ghButton} />
        ))}
      </div>
      <div>
        <ButtonLink
          href={mainContact.url}
          title={`Find me on ${mainContact.name}`}
          icon={mainContact.icon}
          iconSize="lg"
          text="Contact Me"
          showCount={false}
        />
      </div>
    </div>
  );
};

export default MainButtons;
