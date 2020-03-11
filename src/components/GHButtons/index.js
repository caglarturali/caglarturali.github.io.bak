/**
 * GitHubButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import GHFollowButton from './GHFollowButton.js';
import GHStarButton from './GHStarButton.js';
import ghData from '../../data/github.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const GitHubButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GHFollowButton showCount="true" {...ghData} />
      <GHStarButton showCount="true" {...ghData} />
    </div>
  );
};

export default GitHubButtons;
