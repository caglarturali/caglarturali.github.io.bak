/**
 * MainButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import ButtonLink from '../../ButtonLink';
import GHButton, { GHButtonProps } from '../../GHButton';
import { ContactItem, Page } from '../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  data: Page<ContactItem>;
  ghButtons: GHButtonProps[];
}

const MainButtons: React.FC<MainButtonsProps> = ({ data, ghButtons }) => {
  const classes = useStyles();

  const [mainContact] = data.content.filter(({ isMain }) => isMain);

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
          icon={mainContact.icon}
          size="lg"
          text="Contact Me"
        />
      </div>
    </div>
  );
};

export default MainButtons;
