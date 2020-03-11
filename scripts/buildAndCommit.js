/**
 * Based on https://stackoverflow.com/a/55494338
 */
const execSync = require('child_process').execSync;
const msg =
  'BUILD: ' + (process.argv[2] ? process.argv[2] : new Date().toUTCString());
execSync(`npm run build && git add . && git commit -m "${msg}"`, {
  stdio: [0, 1, 2],
});
