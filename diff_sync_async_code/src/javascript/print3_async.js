const fs = require('fs');
const path = require('path');

const results = { resultsArr: [] };
const callback = (error, number) => {
  if (error) throw error;
  results.resultsArr.push(number);
}
const print3 = (callback) => {
  fs.readFile(path.resolve(__dirname, './number3.txt'), 'utf-8', callback);
}

export { results, callback, print3 };
