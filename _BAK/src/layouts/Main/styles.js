/**
 * Main layout styles.
 */
import Color from 'color';
import { bgMidBlue, textLightBlue, mSize, monoFont } from '../../theme';

// Notice that it's an object containing
// global "base" values for the rest of the app.
export default {
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
        color: Color(textLightBlue)
          .darken(0.1)
          .string(),
      },
    },
    '.color-transform': {
      transform: 'color 500ms ease',
    },
  },
};
