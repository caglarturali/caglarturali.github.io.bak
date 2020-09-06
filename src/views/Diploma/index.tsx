/**
 * Diploma component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface DiplomaProps {
  diplomaData: { [key: string]: any };
}

const Diploma: React.FC<DiplomaProps> = ({ diplomaData }) => {
  const classes = useStyles();
  return <div></div>;
};

export default Diploma;
