import { promises as fs } from 'fs';
import path from 'path';

const SOURCE_DIR = process.argv[2];
const DIPLOMA_PATH = path.join(__dirname, '..', 'src', 'data', 'diploma.json');

const getDirectories = async (targetPath: string) => {
  const result: { [key: string]: any } = {};
  const entries = await fs.readdir(targetPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      // Build result recursively.
      result[entry.name] = await getDirectories(
        path.join(targetPath, entry.name),
      );
    }
  }

  return result;
};

const populateDiplomaData = async () => {
  const contents = await getDirectories(SOURCE_DIR);
  const contentsJson = JSON.stringify(contents, null, 2);

  fs.writeFile(DIPLOMA_PATH, contentsJson, {
    encoding: 'utf-8',
  }).catch((e: any) => console.log(e));
};

// populateDiplomaData();
