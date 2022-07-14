const calculateSquare = (number, callback) => {
  setTimeout(() => {
    if (typeof number !== 'number') {
      callback(new TypeError('Argument of type number is expected'));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}

const print1 = () => 1;

export { calculateSquare, print1 };
