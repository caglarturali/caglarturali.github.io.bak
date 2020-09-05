/**
 * Greeter component.
 */
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { createUseStyles } from 'react-jss';
import MainButtons, { MainButtonsProps } from './components/MainButtons';
import SEO from '../../components/SEO';
import { Greeting } from '../../models';
import { randomHello } from '../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface GreeterProps extends MainButtonsProps {
  greeting: Greeting;
}

const Greeter: React.FC<GreeterProps> = ({
  greeting,
  contactItems,
  repoUrl,
}) => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: greeting.typed,
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
  }, [greeting]);

  const hello = randomHello();

  return (
    <>
      <SEO title={hello} />
      <section className={classes.root}>
        <h1 className={classes.heading}>{greeting.mainLine}</h1>
        <div className={classes.typedWrap}>
          <span id="typed-insert-point" style={{ whiteSpace: 'pre' }} />
        </div>
        <MainButtons contactItems={contactItems} repoUrl={repoUrl} />
      </section>
    </>
  );
};

export default Greeter;
