/**
 * Book component styles.
 */
import { Styles } from 'react-jss';

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
} as Styles;
