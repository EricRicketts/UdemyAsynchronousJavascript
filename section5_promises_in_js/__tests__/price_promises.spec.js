import {
  askFirstDealer, askFourthDealer,
  askSecondDealer,
  askThirdDealer,
} from '../src/javascript/price_promises';

describe('Test Suite', () => {
  let expected; let
    promiseArray;
  it('should run all three promises at once', () => {
    promiseArray = [
      askFirstDealer(), askSecondDealer(), askThirdDealer(),
    ];
    return Promise.all(promiseArray).then((prices) => {
      expected = [8000, 12000, 10000];
      expect(prices).toEqual(expected);
    });
  });

  it('should return given array if not given array of promises', () => {
    const array = [1, 'foo', true];
    return Promise.all(array).then((values) => {
      expect(values).toEqual(array);
    });
  });

  it('should return an empty array if given an empty array', () => {
    const emptyArray = [];
    return Promise.all(emptyArray).then((values) => {
      expect(values).toEqual(emptyArray);
    });
  });

  it('should only take rejected promise from array of promises', () => {
    promiseArray = [askFirstDealer(), askSecondDealer(), askFourthDealer()];
    return Promise.all(promiseArray).then((values) => {
      expect(values).toEqual([800, 1200]);
    }, (error) => {
      expect(error).toEqual(new Error('Not a suitable car'));
    });
  });

  it('should take all values if all promises can return errors', () => {
    promiseArray = [
      askFirstDealer().catch((error) => error),
      askFourthDealer().catch((error) => error),
      askThirdDealer().catch((error) => error),
    ];
    return Promise.all(promiseArray).then((values) => {
      expected = [8000, new Error('Not a suitable car'), 10000];
      expect(values).toEqual(expected);
    });
  });
});
