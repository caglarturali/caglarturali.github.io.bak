/**
 * Greeter component styles.
 */
import { Styles } from 'react-jss';

import {
  bgDarkBlue,
  textMid,
  textDark,
  midBlue,
  mllSize,
  lSize,
  desktopBreakpoint,
  mlSize,
  sansFont,
} from '../../theme';

export default {
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    fontFamily: sansFont,
  },
  heading: {
    color: textMid,
    fontWeight: 400,
    fontSize: lSize,
    letterSpacing: '2px',
    margin: '10px 20px',
    padding: '0',
    textShadow: `5px 5px ${bgDarkBlue}`,
    userSelect: 'none',
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      fontSize: mllSize,
    },
  },
  typedWrap: {
    color: textDark,
    fontSize: mllSize,
    fontWeight: 400,
    margin: '5px',
    padding: '0',
    userSelect: 'none',
    '& a': {
      textDecoration: 'none',
      borderBottom: `1px dashed ${textDark}`,
    },
    '& strong': {
      fontWeight: '500',
    },
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      fontSize: mlSize,
    },
  },
  '.typed-cursor': {
    color: midBlue,
  },
} as Styles;
