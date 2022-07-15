const result = { resultArray: [] };
const calculateSquareAndStore = (number, callback) => {
  setTimeout(() => {
    if (typeof number !== 'number') {
      callback(new TypeError('Argument should be a number'));
    }
    const square = number * number;
    callback(null, square);
  });
};

export { result, calculateSquareAndStore };
