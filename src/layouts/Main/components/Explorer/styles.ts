/**
 * Explorer component styles.
 */
import { Styles } from 'react-jss';
import { widths, bgDarkBlue } from '../../../../theme';

export default {
  root: {
    background: bgDarkBlue,
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: widths.leftBar,
    width: widths.explorer,
    '& li': {
      listStyle: 'none',
      padding: '6px 12px',
    },
  },
  closed: {
    display: 'none',
  },
} as Styles;
