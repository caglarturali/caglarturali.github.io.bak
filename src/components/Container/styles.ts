/**
 * Container component styles.
 */
import { Styles } from 'react-jss';
import {
  breakpoints,
  midBlue,
  textLightBlue,
  textMid,
  mSize,
} from '../../theme';

export default {
  root: {
    maxWidth: '960px',
    padding: '0 20px',
    marginBottom: '120px',
    '& a:hover': {
      color: textMid,
    },
    '& li': {
      listStyle: 'square',
    },
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
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
      [`@media screen and (max-width: ${breakpoints.desktop})`]: {
        paddingLeft: '20px',
      },
    },
  },
} as Styles;
