import { expect } from "chai";
import map from "../src/map.js";

describe("map", () => {
  it("should return a new array with values transformed by the iteratee function", () => {
    const array = [4, 8];
    const square = (n) => n * n;

    const result = map(array, square);

    expect(result).to.deep.equal([16, 64]);
  });

  it("should return an empty array if the input array is empty", () => {
    const array = [];
    const square = (n) => n * n;

    const result = map(array, square);

    expect(result).to.deep.equal([]);
  });

  it("should correctly iterate over elements with the provided index and array arguments", () => {
    const array = [2, 4, 6, 8];
    const multiply = (value, index, arr) => value * arr[index - 1];

    const result = map(array, multiply);

    expect(result).to.deep.equal([0, 8, 24, 48]);
  });

  it("should handle an array with only falsey values and return an array of falsey values", () => {
    const array = [null, 0, false];
    const identity = (value) => value;

    const result = map(array, identity);

    expect(result).to.deep.equal([null, 0, false]);
  });

  it("should handle undefined values and return an array with undefined values", () => {
    const array = [undefined, 42, "hello"];
    const identity = (value) => value;

    const result = map(array, identity);

    expect(result).to.deep.equal([undefined, 42, "hello"]);
  });
});
