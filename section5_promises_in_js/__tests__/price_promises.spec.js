import {
  askFirstDealer,
  askSecondDealer,
  askThirdDealer,
} from '../src/javascript/price_promises';

describe('Test Suite', () => {
  let expected;
  it('should run all three promises at once', () => {
    const promiseArray = [
      askFirstDealer(), askSecondDealer(), askThirdDealer()
    ];
    return Promise.all(promiseArray).then((prices) => {
      expected = [8000, 12000, 10000];
      expect(prices).toEqual(expected);
    });
  });
});
