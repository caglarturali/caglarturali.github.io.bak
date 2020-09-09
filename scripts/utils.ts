import { execSync } from 'child_process';

/**
 * Executes commands and commits changes with the message provided.
 * @param commands Commands to be executed
 * @param msg Commit message.
 */
export const execCommandsAndCommit = (commands: string[], msg: string) => {
  const cmds = commands.slice();
  cmds.push(`git commit -m "${msg}"`);
  execSync(cmds.join(' && '), {
    stdio: [0, 1, 2],
  });
};
