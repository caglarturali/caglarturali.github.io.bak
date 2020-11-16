/**
 * Book component styles.
 */
import { Styles } from 'react-jss';
import { bgLightBlue, green } from '../../../../../../theme';

export default {
  toolTip: {
    boxShadow: '0 0 32px black',
    padding: 0,
    '& img': {
      maxHeight: '180px',
    },
  },
  bookItem: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '6px',
    marginBottom: '6px',
  },
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
