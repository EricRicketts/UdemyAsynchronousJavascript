import calculateSquare from '../src/javascript/calculate_square';

// Jest syntax requires one to return a promise for the assertion to work properly
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
});
