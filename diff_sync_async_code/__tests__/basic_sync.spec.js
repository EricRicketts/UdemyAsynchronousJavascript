import {
  results,
  print1,
  print2,
  print3,
  print4
} from "../src/javascript/basic_synchronous_code";

describe('Test basic synchronous functions', () => {

  test("print1", () => {
    expect(print1()).toBe(1);
  });

  test("print2", () => {
    expect(print2()).toBe(2);
  });

  test("print3", () => {
    expect(print3().trim()).toEqual("3");
  });

  test("print4", () => {
    expect(print4()).toBe(4);
  });
});
