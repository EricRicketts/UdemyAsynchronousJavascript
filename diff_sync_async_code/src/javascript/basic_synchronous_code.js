const results = { resultArr: [] };
const print1 = () => 1;

const print2 = () => {
  const get2 = () => 2;
  const number2 = get2();
  return number2;
};

const print3 = () => {
  const fs = require('fs');
  const path = require('path');
  const data = fs.readFileSync(path.resolve(__dirname, './number3.txt'), {encoding: 'utf-8', flag: 'r'});
  return data;
}

const print4 = () => {
  const number4 = 4;
  return number4;
};

export {
  results, print1, print2, print3, print4
};
