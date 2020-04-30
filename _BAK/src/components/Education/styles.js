/**
 * Education component styles.
 */
import { mSize, orange, cyan, textDark } from '../../theme';

export default () => ({
  entry: {
    marginBottom: '30px',
    '&>div': {
      marginBottom: '4px',
    },
  },
  school: {
    fontSize: mSize,
  },
  department: {
    color: orange,
    fontWeight: 500,
  },
  degree: {
    color: cyan,
    fontWeight: 500,
  },
  years: {
    color: textDark,
    fontStyle: 'italic',
  },
});
