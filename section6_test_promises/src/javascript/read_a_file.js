const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const fileString = { fileContents: '' };

const readAFile = (filename) => {
  return fsPromises.readFile(path.resolve(__dirname, ('../../' + filename)), 'utf-8')
    .then((result) => fileString.fileContents = result)
    .catch((error) => new Error('File not found'));
}

export { fileString, readAFile };
