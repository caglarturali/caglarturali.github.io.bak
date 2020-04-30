/**
 * ButtonLink component styles.
 */
import Color from 'color';
import { bgDarkBlue, textLightBlue, midBlue, sSize } from '../../theme';

export default () => ({
  root: {
    background: bgDarkBlue,
    borderRadius: '4px',
    color: textLightBlue,
    display: 'flex',
    margin: '8px',
    transition: 'color 500ms ease',
    '&:hover': {
      background: Color(bgDarkBlue).darken(0.1).string(),
    },
    '&:hover .icon': {
      color: midBlue,
    },
  },
  contents: {
    alignItems: 'center',
    display: 'flex',
    minHeight: '24px',
    padding: '6px 10px',
  },
  text: {
    fontSize: sSize,
    fontWeight: '400',
    marginLeft: '6px',
  },
  count: {
    fontSize: sSize,
    background: Color(bgDarkBlue).lighten(0.5).string(),
    borderRadius: '50%',
    marginLeft: '10px',
    padding: '4px 8px',
  },
});
