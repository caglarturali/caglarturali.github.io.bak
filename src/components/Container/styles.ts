/**
 * Container component styles.
 */
import { Styles } from 'react-jss';
import {
  leftBarWidth,
  desktopBreakpoint,
  midBlue,
  textLightBlue,
  textMid,
  mSize,
} from '../../theme';

export default {
  root: {
    marginBottom: '64px',
    marginTop: '20px',
    marginLeft: leftBarWidth,
    maxWidth: '960px',
    padding: '20px',
    '& a:hover': {
      color: textMid,
    },
    '& li': {
      listStyle: 'square',
    },
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      marginLeft: 0,
    },
  },
  content: {
    color: textLightBlue,
    fontSize: mSize,
    '& h3': {
      color: midBlue,
    },
    '& ul': {
      '& li': {
        paddingBottom: '4px',
      },
      [`@media screen and (max-width: ${desktopBreakpoint})`]: {
        paddingLeft: '20px',
      },
    },
  },
} as Styles;
