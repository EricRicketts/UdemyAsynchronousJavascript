import {
  results,
  callback,
  print3
} from "../src/javascript/print3_async";

describe('Test basic asynchronous code', () => {

  let testCallback;
  afterEach(() => {
    results.resultsArr = [];
  });

  // in order to test callbacks with something line a readFile I have to break the test down
  // into two operations.  The first operation checks that readFile actually worked and read
  // from the "number3.txt" file.  In order to do this I had to pass it a unique callback function
  // "testCallback" which would have the same arguments as the original callback.  I can then test
  // if number is read from the file.  In the second operation I have to pass the test the original
  // callback to make sure it sets the array.  In doing so I pass false as the first argument so
  // the check error branch is bypassed.
  test("The given callback function is invoked", done => {
    testCallback = (error, number) => {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(number).toEqual("3\n");
        done();
      } catch (error) {
        done(error);
      }
    }
    print3(testCallback);
  });

  test("The actual callback functions sets the array", () => {
    callback(false, 3);
    expect(results.resultsArr[0]).toBe(3);
  });
});
