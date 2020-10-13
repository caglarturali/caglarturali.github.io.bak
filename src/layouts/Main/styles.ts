/**
 * Main layout styles.
 */
import Color from 'color';
import { Styles } from 'react-jss';
import {
  bgMidBlue,
  textLightBlue,
  mSize,
  monoFont,
  breakpoints,
  widths,
} from '../../theme';

// Notice that it's an object containing
// global "base" values for the rest of the app.
export default {
  root: {
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
    padding: 0,
    margin: 0,
  },
  content: {
    position: 'relative',
    top: 0,
    left: `${widths.leftBar}px`,
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      left: '0',
    },
  },
  explorerOpen: {
    left: `${widths.leftBar + widths.explorer}px`,
  },
  '@global': {
    html: {
      fontSize: '62.5%',
    },
    body: {
      fontFamily: monoFont,
      fontSize: mSize,
      background: bgMidBlue,
      boxSizing: 'border-box',
    },
    button: {
      cursor: 'pointer',
      '&:disabled': {
        cursor: 'default',
      },
    },
    a: {
      color: textLightBlue,
      textDecoration: 'none',
      transition: 'color 500ms ease',
      '&:visited': {
        color: Color(textLightBlue).darken(0.1).string(),
      },
    },
    '.color-transform': {
      transform: 'color 500ms ease',
    },
  },
} as Styles;
