/**
 * Greeter component.
 */
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { createUseStyles } from 'react-jss';
import MainButtons from './MainButtons';
import { GHButtonProps } from '../../components/GHButton';
import SEO from '../../components/SEO';
import { getGHCredentials } from '../../utils';
import { ContactItem, BaseProps } from '../../models';
import styles from './styles';

import greeter from '../../data/greeter.json';
import contact from '../../data/contact.json';
import pkg from '../../../package.json';

const useStyles = createUseStyles(styles);

export type GreeterProps = BaseProps<ContactItem>;

const Greeter: React.FC<GreeterProps> = ({ fileName }) => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: greeter.typed,
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

  const { repo, username } = getGHCredentials(pkg.repository.url);

  const ghButtons: GHButtonProps[] = [
    // Follow button
    {
      resource: {
        endpoint: `https://api.github.com/users/${username}`,
        attr: 'followers',
      },
      href: `https://github.com/${username}`,
      title: `Follow @${username} on GitHub`,
      icon: ['fab', 'github'],
      size: 'lg',
      text: `Follow @${username}`,
    },
    // Stargazers button
    {
      resource: {
        endpoint: `https://api.github.com/repos/${username}/${repo}`,
        attr: 'stargazers_count',
      },
      href: pkg.repository.url,
      title: `Star ${username}/${repo} on GitHub`,
      icon: 'star',
      size: 'sm',
      text: 'Star',
    },
  ];

  const mainContact = contact.find((c) => c.isMain) as ContactItem;

  return (
    <>
      <SEO title={fileName} />
      <section className={classes.root}>
        <h1 className={classes.heading}>{greeter.mainLine}</h1>
        <div className={classes.typedWrap}>
          <span id="typed-insert-point" style={{ whiteSpace: 'pre' }} />
        </div>
        <MainButtons mainContact={mainContact} ghButtons={ghButtons} />
      </section>
    </>
  );
};

export default Greeter;
