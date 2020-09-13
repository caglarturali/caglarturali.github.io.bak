/**
 * Container components used in tabs.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import SEO, { SEOProps } from '../SEO';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ContainerProps {
  seo?: SEOProps;
}

const Container: React.FC<ContainerProps> = ({ seo, children }) => {
  const classes = useStyles();

  return (
    <>
      {!!seo && <SEO {...seo} />}
      <div className={classes.root}>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};

export default Container;
