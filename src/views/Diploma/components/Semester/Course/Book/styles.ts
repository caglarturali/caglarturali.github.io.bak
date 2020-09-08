/**
 * Book component styles.
 */
import { Styles } from 'react-jss';

export default {
  toolTip: {
    boxShadow: '0 0 32px black',
    padding: 0,
    '& img': {
      height: '256px',
      width: 'auto',
    },
  },
  bookItem: {
    marginTop: '4px',
    marginBottom: '4px',
  },
} as Styles;
