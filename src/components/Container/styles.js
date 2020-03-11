/**
 * Container component styles.
 */
import {
  leftBarWidth,
  desktopBreakpoint,
  green,
  midBlue,
  textLightBlue,
  textMid,
  mlSize,
  mSize,
} from '../../theme';

export default () => ({
  root: {
    marginBottom: '64px',
    marginTop: '36px',
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
  title: {
    color: green,
    fontSize: mlSize,
    margin: 0,
    padding: 0,
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      fontSize: mSize,
    },
  },
  subtitle: {
    color: midBlue,
    fontSize: mSize,
    fontWeight: 500,
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      fontSize: mSize,
    },
  },
  content: {
    color: textLightBlue,
    fontSize: mSize,
    '& ul': {
      [`@media screen and (max-width: ${desktopBreakpoint})`]: {
        paddingLeft: '20px',
      },
    },
  },
});
