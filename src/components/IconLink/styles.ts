/**
 * IconLink component styles.
 */
import { Styles } from 'react-jss';
import Color from 'color';
import { lbIconColor } from '../../theme';

export default {
  item: {
    color: lbIconColor,
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'color 100ms ease',
    '&:hover': {
      color: Color(lbIconColor).lighten(0.2).string(),
    },
    '&:last-of-type': {
      marginBottom: '20px',
    },
  },
  icon: {
    padding: '10px',
  },
} as Styles;
