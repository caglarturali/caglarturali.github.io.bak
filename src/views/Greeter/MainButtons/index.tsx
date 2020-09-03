/**
 * MainButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ButtonLink from '../../../components/ButtonLink';
import GHButton, { GHButtonProps } from '../../../components/GHButton';
import { ContactItem } from '../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  mainContact: ContactItem;
  ghButtons: GHButtonProps[];
}

const MainButtons: React.FC<MainButtonsProps> = ({
  mainContact,
  ghButtons,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {ghButtons.map((btn) => (
          <GHButton key={`gh-btn-${btn.resource.attr}`} {...btn} />
        ))}
      </div>
      <div>
        <ButtonLink
          href={mainContact.url}
          title={`Find me on ${mainContact.name}`}
          icon={mainContact.icon as IconProp}
          size="lg"
          text="Contact Me"
        />
      </div>
    </div>
  );
};

export default MainButtons;
