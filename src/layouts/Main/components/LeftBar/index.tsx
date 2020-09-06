/**
 * LeftBar component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import IconLink from '../../../../components/IconLink';
import { ContactItem } from '../../../../models';
import { pages } from './../../../../data';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface LeftBarProps {
  contactData: ContactItem[];
}

const LeftBar: React.FC<LeftBarProps> = ({ contactData }) => {
  const classes = useStyles();

  // Internal links.
  const internals = pages.map(({ name, url, icon, isInternal }) => ({
    name,
    url,
    icon,
    isInternal,
  }));

  const bottom: ContactItem[] = [
    {
      name: 'Useless button!',
      url: '',
      icon: 'cog',
      isInternal: true,
    },
  ];

  const renderData = (data: ContactItem[]) => {
    return data.map((contactItem) => (
      <IconLink key={contactItem.name} {...contactItem} />
    ));
  };

  const renderDivider = () => <span className={classes.divider} />;

  return (
    <div className={classes.root}>
      <div>
        {renderData(internals)}
        {renderDivider()}
        {renderData(contactData)}
      </div>
      <div>{renderData(bottom)}</div>
    </div>
  );
};

export default LeftBar;
