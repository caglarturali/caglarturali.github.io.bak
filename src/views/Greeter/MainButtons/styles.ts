/**
 * MainButtons component styles.
 */
import { Styles } from 'react-jss';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
} as Styles;
