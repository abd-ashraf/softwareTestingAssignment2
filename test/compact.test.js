import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact", () => {
  it("should remove all falsey values from the array", () => {
    const inputArray = [0, 1, false, 2, "", 3];

    const result = compact(inputArray);

    expect(result).to.deep.equal([1, 2, 3]);
  });

  it("should handle arrays with mixed truthy and falsey values", () => {
    const inputArray = [false, null, 0, "", undefined, NaN, "hello", true, 42];

    const result = compact(inputArray);

    expect(result).to.deep.equal(["hello", true, 42]);
  });

  it("should handle an array with only falsey values", () => {
    const inputArray = [false, null, 0, "", undefined, NaN];

    const result = compact(inputArray);

    expect(result).to.deep.equal([]);
  });

  it("should handle an empty array", () => {
    const inputArray = [];

    const result = compact(inputArray);

    expect(result).to.deep.equal([]);
  });

  it("should handle an array with all truthy values", () => {
    const inputArray = [1, "hello", true, {}];

    const result = compact(inputArray);

    expect(result).to.deep.equal([1, "hello", true, {}]);
  });
});
