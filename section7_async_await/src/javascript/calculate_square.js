const calculateSquare = (number) => new Promise((resolve, reject) => {
  // eslint-disable-next-line consistent-return
  setTimeout(() => {
    if (typeof number !== 'number') {
      return reject(new TypeError('Argument should be a number'));
    }
    const result = number * number;
    resolve(result);
  }, 1000);
});

export default calculateSquare;
