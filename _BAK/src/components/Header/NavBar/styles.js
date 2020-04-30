/**
 * NavBar component styles.
 */
import Color from 'color';
import {
  bgMidBlue,
  bgDarkBlue,
  textWhite,
  textLightBlue,
  sSize,
  desktopBreakpoint,
  sansFont,
} from '../../../theme';

export default () => ({
  root: {
    float: 'left',
    fontFamily: sansFont,
  },
  list: {
    color: textLightBlue,
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  listItem: {
    display: 'inline-block',
    '& a': {
      borderRight: `1px solid ${Color(bgMidBlue).darken(0.05).string()}`,
      borderTop: `4px solid ${bgDarkBlue}`,
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: sSize,
      letterSpacing: '0.5px',
      padding: '10px 15px',
      textTransform: 'lowercase',
      transition: 'background, border-color 250ms ease',
      [`@media screen and (max-width: ${desktopBreakpoint})`]: {
        letterSpacing: '0',
        padding: '10px',
      },
      '&:hover, &[aria-current="page"]': {
        borderTopColor: bgDarkBlue,
        background: Color(bgDarkBlue).lighten(0.02).string(),
        color: textWhite,
      },
      '&[aria-current="page"]': {
        background: bgMidBlue,
        borderTopColor: Color(bgDarkBlue).lighten(0.05).string(),
      },
    },
  },
});
