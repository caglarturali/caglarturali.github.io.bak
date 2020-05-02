/**
 * LeftBar component styles.
 */
import { Styles } from 'react-jss';
import Color from 'color';
import {
  bgLightBlue,
  lbIconColor,
  leftBarWidth,
  desktopBreakpoint,
} from '../../../../theme';

export default {
  root: {
    alignItems: 'center',
    background: bgLightBlue,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    left: '0',
    position: 'fixed',
    top: '0',
    width: leftBarWidth,
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      display: 'none',
    },
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 0',
    },
  },
  item: {
    color: lbIconColor,
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'color 100ms ease',
    '&:hover': {
      color: Color(lbIconColor).lighten(0.2).string(),
    },
    '&:last-of-type': {
      marginBottom: '30px',
    },
  },
  icon: {
    padding: '10px',
  },
} as Styles;
