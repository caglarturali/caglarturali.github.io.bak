/**
 * Explorer component styles.
 */
import { Styles } from 'react-jss';
import {
  desktopBreakpoint,
  leftBarWidth,
  explorerWidth,
  bgDarkBlue,
} from '../../../../theme';

export default {
  root: {
    alignItems: 'center',
    background: bgDarkBlue,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: leftBarWidth,
    width: explorerWidth,
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      display: 'none',
    },
  },
} as Styles;
