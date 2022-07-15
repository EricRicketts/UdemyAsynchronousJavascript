import calculateSquare from '../src/javascript/calculate_square';

// Jest syntax requires one to return a promise for the assertion to work properly
describe('Test Suite', () => {
  describe('Test Promisified Calculate Square', () => {
    const expectedError = new TypeError('Argument should be a number');
    it('should resolve to the square of a number', () => {
      return calculateSquare(4).then((result) => {
        expect(result).toBe(16);
      });
    });

    it('should reject an non-numeric input', () => {
      return calculateSquare('foobar').catch((error) => {
        expect(error).toEqual(expectedError);
      });
    });

    it('should test properly using resolve', () => {
      return expect(calculateSquare(5)).resolves.toBe(25);
    });

    it('should test properly using reject', () => {
      return expect(calculateSquare('fizzbuzz')).rejects.toEqual(expectedError);
    });

    it('should test chained promises', () => {
      return calculateSquare(2).then((result) => {
        return result;
      }).then((result) => {
        return calculateSquare(result);
      }).then((result) => {
        return calculateSquare(result);
      }).then((result) => {
        expect(result).toBe(256);
      });
    });

    it('should catch an error with two argument then', () => {
      return calculateSquare(2).then((result) => {
        return result;
      }).then((result) => {
        return calculateSquare(`foobar${String(result)}`);
        // eslint-disable-next-line no-shadow-restricted-names
      }).then((result) => {
        console.log(result);
      }, (error) => {
        expect(error).toEqual(expectedError);
      });
    });
  });
  describe('Test Promise Methods', () => {
    it('should create a resolved promise from a string', () => {
      const promise = Promise.resolve('Promise from String');
      return expect(promise).resolves.toEqual('Promise from String');
    });

    it('should create a rejected promise from an Error object', () => {
      const promise = Promise.reject(new Error('Promise from Error'));
      return expect(promise).rejects.toEqual(new Error('Promise from Error'));
    });
  });
});
