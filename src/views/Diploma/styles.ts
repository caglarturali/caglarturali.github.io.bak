/**
 * Diploma component styles.
 */
import { Styles } from 'react-jss';

export default {
  title: {
    display: 'inline-block',
    cursor: 'help',
    '&>h2': {
      display: 'inline-block',
      marginBottom: '0',
    },
    '&>svg': {
      marginLeft: '8px',
    },
    '&>p': {
      fontSize: '1.8rem',
      marginTop: '0.3em',
    },
  },
  tip: {
    maxWidth: '360px',
    fontSize: '1.5rem !important',
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
        paddingBottom: '200px',
      },
    },
  },
  extra: {
    '&>li': {
      marginLeft: '20px',
    },
  },
} as Styles;
