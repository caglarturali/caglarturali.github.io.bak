/**
 * NavItem component styles.
 */
import { Styles } from 'react-jss';
import { breakpoints, textLightBlue, textWhite } from '../../../../../../theme';

export default {
  root: {
    '& a[aria-current="page"] span': {
      display: 'inline-block !important',
    },
  },
  navText: {
    marginLeft: '8px',
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      display: 'none',
    },
  },
  currentTab: {
    '& .closeButton': {
      color: textLightBlue,
      marginLeft: '8px',
      paddingLeft: '8px',
      [`@media screen and (max-width: ${breakpoints.desktop})`]: {
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
