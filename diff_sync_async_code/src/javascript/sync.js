const print3 = () => {
  const fs = require('fs');
  const path = require('path');
  console.log('Path of file in parent dir:', require('path').resolve(__dirname, './number3.txt'));
  const data = fs.readFileSync(path.resolve(__dirname, './number3.txt'), {encoding: 'utf-8', flag: 'r'});
  console.log(data);
}

print3();
