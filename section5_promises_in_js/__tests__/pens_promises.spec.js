import {
  askJohn,
  askSusy,
  askEugene,
  askFailArmy,
} from '../src/javascript/pens_promises';

describe('Test Suite', () => {
  let promiseArray;
  describe('Test Promise race method', () => {
    it('should take the promise which is quickest to resolve', () => {
      promiseArray = [
        askJohn(), askEugene(), askSusy(),
      ];
      return Promise.race(promiseArray).then((result) => {
        expect(result).toEqual('Sure, I have a pen for you');
      });
    });

    it('should the reject be the quickest that will be the return value', () => {
      promiseArray = [
        askJohn(), askSusy(), askFailArmy(),
      ];
      return Promise.race(promiseArray).then((result) => {
        expect(result).toEqual('incorrect answer to make sure the other branch is taken');
      }).catch((error) => {
        expect(error).toEqual(new Error('Sorry, you asked the Fail Army!'));
      });
    });
  });
});
