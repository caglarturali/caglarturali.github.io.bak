/**
 * Progress component styles.
 */
import { Styles } from 'react-jss';
import { bgLightBlue, green } from '../../../../../../../theme';

export default {
  progress: {
    marginRight: '8px',
    width: '20px',
    '@global': {
      '.CircularProgressbar-path': {
        stroke: green,
        strokeLinecap: 'butt',
      },
      '.CircularProgressbar-trail': {
        stroke: bgLightBlue,
      },
      '.CircularProgressbar-text': {
        // fill: 'yellow',
      },
      '.CircularProgressbar-background': {
        // fill: 'green',
      },
    },
  },
} as Styles;
