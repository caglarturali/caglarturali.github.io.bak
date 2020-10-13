/**
 * Explorer component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { TabProps } from '../..';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ExplorerProps {
  open: boolean;
}

const Explorer: React.FC<ExplorerProps & TabProps> = ({ tabs, open }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, { [classes.closed]: !open })}>
      {tabs.map((t) => (
        <li key={t.name}>{t.mdFileName}</li>
      ))}
    </div>
  );
};

export default Explorer;
