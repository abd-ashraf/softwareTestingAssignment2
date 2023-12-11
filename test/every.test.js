import { expect } from "chai";
import every from "../src/every.js";

describe("every", () => {
  it("should return true for an array where all elements pass the predicate check", () => {
    const array = [true, 1, "hello", {}];
    const predicate = Boolean;

    const result = every(array, predicate);

    expect(result).to.be.true;
  });

  it("should return false if any element in the array fails the predicate check", () => {
    const array = [true, 1, null, "yes"];
    const predicate = Boolean;

    const result = every(array, predicate);

    expect(result).to.be.false;
  });

  it("should handle an empty array and return true", () => {
    const array = [];
    const predicate = Boolean;

    const result = every(array, predicate);

    expect(result).to.be.true;
  });

  it("should handle an empty array with a custom predicate and return true", () => {
    const array = [];
    const predicate = (value) => value === undefined;

    const result = every(array, predicate);

    expect(result).to.be.true;
  });

  it("should correctly iterate over elements with the provided index and array arguments", () => {
    const array = [2, 4, 6, 8];
    const predicate = (value, index, arr) => value === arr[index];

    const result = every(array, predicate);

    expect(result).to.be.true;
  });

  it("should handle an array with only falsey values and return false", () => {
    const array = [null, 0, "", false];
    const predicate = Boolean;

    const result = every(array, predicate);

    expect(result).to.be.false;
  });
});
