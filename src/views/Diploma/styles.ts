/**
 * Diploma component styles.
 */
import { Styles } from 'react-jss';

export default {
  root: {
    '&>details': {
      cursor: 'pointer',
      padding: '10px 4px',
      marginBottom: '20px',
      '& summary': {
        border: 'none',
        outline: 'none',
      },
    },
  },
} as Styles;
