/**
 * LeftBar component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import IconLink from '../../../../components/IconLink';
import { ContactItem } from '../../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface LeftBarProps {
  contactData: ContactItem[];
}

const LeftBar: React.FC<LeftBarProps> = ({ contactData }) => {
  const classes = useStyles();

  // Prepend internal links.
  const contactTop: ContactItem[] = [
    {
      name: 'Home',
      url: '/',
      icon: 'home',
      isInternal: true,
    },
    {
      name: 'Diploma',
      url: '/diploma',
      icon: 'graduation-cap',
      isInternal: true,
    },
    ...contactData,
  ];

  const contactBottom: ContactItem[] = [
    {
      name: 'Useless button!',
      url: '',
      icon: 'cog',
      isInternal: true,
    },
  ];

  return (
    <div className={classes.root}>
      <div>
        {contactTop.map((contactItem) => (
          <IconLink key={contactItem.name} {...contactItem} />
        ))}
      </div>
      <div>
        {contactBottom.map((contactItem) => (
          <IconLink key={contactItem.name} {...contactItem} />
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
