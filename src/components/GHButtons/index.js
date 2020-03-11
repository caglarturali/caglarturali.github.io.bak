/**
 * GitHubButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import GHButton from '../GHButton';
import { user, repoName, repoUrl } from '../../data/github.json';
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

const GitHubButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {buttons.map((ghButton) => (
        <GHButton key={`gh-btn-${ghButton.attr}`} {...ghButton} />
      ))}
    </div>
  );
};

export default GitHubButtons;
