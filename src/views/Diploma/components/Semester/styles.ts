/**
 * Semester component styles.
 */
import { Styles } from 'react-jss';
import { orange, bgDarkBlue, sSize } from '../../../../theme';

export default {
  root: {
    // marginTop: '10px',
    marginBottom: '10px',
  },
  overDue: {
    marginLeft: '10px',
    padding: '2px 4px',
    fontSize: sSize,
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: orange,
    color: bgDarkBlue,
    borderRadius: '8px',
  },
} as Styles;
