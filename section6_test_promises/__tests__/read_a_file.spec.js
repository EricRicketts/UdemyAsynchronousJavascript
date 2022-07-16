import {
  fileString,
  readAFile
} from '../src/javascript/read_a_file';

describe('Test Suite for read_a_file', () => {
  let filename;
  it('should read input.txt', () => {
    filename = 'input.txt';
    return readAFile(filename).then((result) => {
      const expected = "This is the text from the input file.\n";
      expect(fileString.fileContents).toEqual(expected);
    });
  });

  it('should return an error object for file not found', () => {
    filename = 'foo.txt';
    return readAFile(filename).then((error) => {
      expect(error.message).toEqual('File not found');
    });
  });
});
