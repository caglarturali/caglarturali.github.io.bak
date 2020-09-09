/**
 * Diploma component styles.
 */
import { Styles } from 'react-jss';

export default {
  title: {
    cursor: 'help',
    display: 'inline-block',
    '&>span': {
      marginRight: '8px',
    },
  },
  tip: {
    maxWidth: '300px',
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  contents: {
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
  optional: {
    '&>li': {
      marginLeft: '20px',
    },
  },
} as Styles;
