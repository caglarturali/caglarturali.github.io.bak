/**
 * Certificates component styles.
 */
import Color from 'color';
import { sSize, mSize, textWhite, green, midBlue, red, sansFont } from '../../theme';

export default () => ({
  entry: {
    marginBottom: '30px',
  },

  name: {
    fontSize: mSize,
    fontWeight: 500,
    '&>a': {
      textTransform: 'uppercase',
    },
  },
  subsection: {
    marginTop: '10px',
    marginBottom: '30px',
  },
  subsection_entry: {
    listStyle: 'circle',
    marginBottom: '10px',
  },
  progress: {
    borderRadius: '6px',
    color: textWhite,
    fontFamily: sansFont,
    fontWeight: 500,
    fontSize: sSize,
    marginLeft: '10px',
    padding: '2px 4px',
  },
  progress_high: {
    background: Color(green)
      .darken(0.25)
      .string(),
  },

  progress_mid: {
    background: Color(midBlue)
      .darken(0.25)
      .string(),
  },

  progress_low: {
    background: Color(red)
      .darken(0.2)
      .string(),
  },
});
