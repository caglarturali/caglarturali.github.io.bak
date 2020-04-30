/**
 * Header component styles.
 */
import { bgDarkBlue, leftBarWidth, desktopBreakpoint } from '../../theme';

export default () => ({
  root: {
    background: bgDarkBlue,
    position: 'fixed',
    top: '0',
    left: leftBarWidth,
    width: '100vw',
    [`@media screen and (max-width: ${desktopBreakpoint})`]: {
      left: '0',
    },
  },
});
