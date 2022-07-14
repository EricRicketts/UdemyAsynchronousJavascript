import {
  print1,
  calculateSquare
} from '../src/javascript/calculate_square';

describe("Test callback in asynchronous function", () => {

  let callback;
  test("print1 to make sure imports are working in Jest", () => {
    expect(print1()).toBe(1);
  });

  test("handle valid input", done => {
    calculateSquare(2, (error, result) => {
      if (error !== null) {
        console.log('Caught Error: ' + String(error));
        return;
      }
      expect(result).toBe(4);
      done();
    });
  });

  test("handle invalid input", done => {
    calculateSquare("bad input", (error) => {
      if (error !== null) {
        expect(error.constructor.name).toEqual("TypeError");
        expect(error.message).toEqual('Argument of type number is expected');
        done();
      }
    })
  });
});
