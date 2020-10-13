/**
 * Header component styles.
 */
import { Styles } from 'react-jss';
import { bgDarkBlue, heights } from '../../../../theme';

export default {
  root: {
    background: bgDarkBlue,
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100vw',
    height: heights.navBar,
  },
} as Styles;
