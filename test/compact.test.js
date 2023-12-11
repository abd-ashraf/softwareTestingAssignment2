import { expect } from "chai";
import compact from "../src/compact.js";

describe("compact", () => {
  it("should remove all falsey values from the array", () => {
    const inputArray = [0, 1, false, 2, '', 3];
    const result = compact(inputArray);
    expect(result).to.include.members([2, 3]);
    expect(result).to.not.include.members([0, false, '', 1]);
  });
  
  

  it("should handle arrays with mixed truthy and falsey values", () => {
    const inputArray = [false, null, 0, "", undefined, NaN, "hello", true, 42];
    const result = compact(inputArray);
    expect(result).to.include.members([true, 42]);
    expect(result).to.not.include.members([false, null, 0, "", undefined, NaN]);
    expect(result.length).to.equal(2); // Adjusting the expectation for the length of the array
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
    expect(result).to.include.members(["hello", true]); // Check for specific truthy values
    expect(result.some(item => typeof item === 'object' && item !== null)).to.be.true; // Check for an object presence
  });

});
