import fs from 'fs/promises';
import path from 'path';

export const saveCsvFile = async (csvContent) => {
  const filePath = path.resolve('src/db/beers.csv');
  await fs.writeFile(filePath, csvContent, 'utf-8');
  return filePath;
};