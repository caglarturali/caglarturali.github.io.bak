/**
 * Certificates component styles.
 */
import { Styles } from 'react-jss';
import Color from 'color';
import {
  sSize,
  mSize,
  textWhite,
  green,
  midBlue,
  red,
  sansFont,
} from '../../theme';

export default {
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
  subsectionEntry: {
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
  progressHigh: {
    background: Color(green).darken(0.25).string(),
  },

  progressMid: {
    background: Color(midBlue).darken(0.25).string(),
  },

  progressLow: {
    background: Color(red).darken(0.2).string(),
  },
} as Styles;
