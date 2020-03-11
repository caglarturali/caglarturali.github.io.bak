/**
 * Greeter component.
 */
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { createUseStyles } from 'react-jss';
import MainButtons from './MainButtons';
import strings from '../../data/strings.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Greeter = () => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: strings.typed,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed('#typed-insert-point', options);

    return () => {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <section className={classes.root}>
      <h1 className={classes.heading}>{strings.mainLine}</h1>
      <div className={classes.typedWrap}>
        <span id="typed-insert-point" style={{ whiteSpace: 'pre' }} />
      </div>
      <MainButtons />
    </section>
  );
};

export default Greeter;
