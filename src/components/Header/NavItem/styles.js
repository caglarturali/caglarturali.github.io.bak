/**
 * NavItem component styles.
 */
import { desktopBreakpoint } from '../../../theme';

export default () => ({
  root: {
    '& a[aria-current="page"]': {
      display: 'inline-block',
    },
  },
  navText: {
    marginLeft: '5px',
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      display: 'none',
    },
  },
});
