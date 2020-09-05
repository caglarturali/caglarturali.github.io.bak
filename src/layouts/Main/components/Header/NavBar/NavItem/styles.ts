/**
 * NavItem component styles.
 */
import { Styles } from 'react-jss';
import {
  desktopBreakpoint,
  textLightBlue,
  textWhite,
} from '../../../../../../theme';

export default {
  root: {
    '& a[aria-current="page"] span': {
      display: 'inline-block !important',
    },
  },
  navText: {
    marginLeft: '8px',
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      display: 'none',
    },
  },
  currentTab: {
    '& .closeButton': {
      color: textLightBlue,
      marginLeft: '8px',
      paddingLeft: '8px',
      [`@media screen and (max-width: ${desktopBreakpoint})`]: {
        paddingLeft: '8px',
      },
      '&:hover': {
        color: textWhite,
      },
    },
  },
  otherTab: {
    '& .closeButton': {
      display: 'none',
    },
  },
} as Styles;
