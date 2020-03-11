/**
 * NavItem component styles.
 */
import { desktopBreakpoint } from '../../../theme';

export default () => ({
  root: {
    '& a[aria-current="page"] span': {
      display: 'inline-block !important',
    },
  },
  navText: {
    marginLeft: '5px',
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      display: 'none',
    },
  },
});
