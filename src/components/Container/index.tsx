/**
 * Container components used in tabs.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ContainerProps {
  title: string;
  subtitle?: string;
}

const Container: React.FC<ContainerProps> = ({ title, subtitle, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.subtitle}>{subtitle}</h3>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Container;
