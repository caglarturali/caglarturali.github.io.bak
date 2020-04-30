/**
 * StatusBar component styles.
 */
import { Styles } from 'react-jss';
import {
  bgDarkBlue,
  bgMidBlue,
  textLightBlue,
  sSize,
  sansFont,
} from '../../../../theme';

export default {
  root: {
    bottom: '0',
    background: bgDarkBlue,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: sansFont,
    fontWeight: 400,
    left: '0',
    position: 'fixed',
    width: '100vw',
    '& span, & a': {
      display: 'inline-block',
      padding: '2px 8px',
      '&:hover': {
        background: bgMidBlue,
        cursor: 'pointer',
      },
    },
  },
  icon: {
    color: textLightBlue,
  },
  text: {
    color: textLightBlue,
    fontSize: sSize,
    padding: '0 4px',
  },
} as Styles;
