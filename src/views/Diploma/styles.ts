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
    maxWidth: '360px',
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  contents: {
    '&>details': {
      '& summary': {
        border: 'none',
        outline: 'none',
        '& span': {
          cursor: 'pointer',
        },
      },
      padding: '10px 0',

      '&:last-child': {
        marginBottom: '200px',
      },
    },
  },
  extra: {
    '&>li': {
      marginLeft: '20px',
    },
  },
} as Styles;
