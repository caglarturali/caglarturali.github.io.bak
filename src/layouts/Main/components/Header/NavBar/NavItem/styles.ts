/**
 * NavItem component styles.
 */
import { Styles } from 'react-jss';
import { desktopBreakpoint } from '../../../../../../theme';

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
      marginLeft: '16px',
      [`@media screen and (max-width: ${desktopBreakpoint})`]: {
        marginLeft: '8px',
      },
    },
  },
  otherTab: {
    '& .closeButton': {
      display: 'none',
    },
  },
} as Styles;
