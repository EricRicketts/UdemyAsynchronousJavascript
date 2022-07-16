import calculateSquare from '../src/javascript/calculate_square';

describe('Test Suite', () => {
  let expected;
  it('should resolve if given a number', async () => {
    expected = 81;
    const result = await calculateSquare(9);
    expect(result).toBe(expected);
  });

  it('should invoke an error in the argument is not a number', async () => {
    expected = new TypeError('Argument should be a number');
    try {
      await calculateSquare('foo');
    } catch (error) {
      expect(error).toEqual(new TypeError('Argument should be a number'));
    }
  });
});
