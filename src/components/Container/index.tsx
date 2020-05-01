/**
 * Container components used in tabs.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import SEO, { SEOProps } from '../SEO';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ContainerProps {
  title: string;
  subtitle?: string;
  seo?: SEOProps;
}

const Container: React.FC<ContainerProps> = ({
  title,
  subtitle,
  seo,
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      {!!seo && <SEO {...seo} />}
      <div className={classes.root}>
        <h2 className={classes.title}>{title}</h2>
        <h3 className={classes.subtitle}>{subtitle}</h3>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};

export default Container;
