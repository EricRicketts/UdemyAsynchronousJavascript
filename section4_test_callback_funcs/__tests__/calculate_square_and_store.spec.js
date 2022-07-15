import {
  result,
  calculateSquareAndStore,
} from '../src/javascript/calculate_square_and_store';

describe('Test Calculate and Store Square', () => {
  it('should set the result array', (done) => {
    calculateSquareAndStore(4, (err, res) => {
      if (err !== null) {
        // eslint-disable-next-line no-console
        console.log(`Caught error: ${err.message}`);
        return;
      }
      // eslint-disable-next-line consistent-return
      result.resultArray.push(res);
      expect(result.resultArray[0]).toBe(16);
      done();
    });
  });

  it('should throw an error with non-numeric input', (done) => {
    calculateSquareAndStore('foobar', (err) => {
      if (err !== null) {
        expect(err.constructor.name).toEqual("TypeError");
        expect(err.message).toEqual('Argument should be a number');
        done();
      }
    })
  });
});
