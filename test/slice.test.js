import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice", () => {
  it("should create a slice of an array from start to end", () => {
    const array = [1, 2, 3, 4];

    const result = slice(array, 1, 3);

    expect(result).to.deep.equal([2, 3]);
  });

  it("should create a slice from the beginning if start is not provided", () => {
    const array = [1, 2, 3, 4];

    const result = slice(array);

    expect(result).to.deep.equal([1, 2, 3, 4]);
  });

  it("should create a slice up to the end if end is not provided", () => {
    const array = [1, 2, 3, 4];

    const result = slice(array, 2);

    expect(result).to.deep.equal([3, 4]);
  });

  it("should handle negative start and end indices correctly", () => {
    const array = [1, 2, 3, 4, 5];

    const result = slice(array, -3, -1);

    expect(result).to.deep.equal([3, 4]);
  });

  it("should return an empty array if the input array is empty", () => {
    const array = [];

    const result = slice(array, 1, 3);

    expect(result).to.deep.equal([]);
  });

  it("should handle start greater than end by returning an empty array", () => {
    const array = [1, 2, 3, 4];

    const result = slice(array, 3, 1);

    expect(result).to.deep.equal([]);
  });
});
