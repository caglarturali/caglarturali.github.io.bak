/**
 * Projects component styles.
 */
import { mSize, orange, cyan, textDark } from '../../theme';

export default () => ({
  entry: {
    marginBottom: '30px',
    '&>div': {
      marginBottom: '4px',
    },
  },
  name: {
    fontSize: mSize,
    fontWeight: '500',
    marginBottom: '2px',
  },
  description: {
    color: orange,
    fontWeight: '500',
    marginBottom: '2px',
  },
  tech: {
    color: cyan,
    fontWeight: '500',
  },
  homepage: {
    color: textDark,
  },
});
