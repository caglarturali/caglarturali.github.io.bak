/**
 * Explorer component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Explorer: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default Explorer;
