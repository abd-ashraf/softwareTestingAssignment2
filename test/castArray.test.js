import { expect } from "chai";
import castArray from "../src/castArray.js";

describe("castArray", () => {
  it("should cast a non-array value to an array", () => {
    const value = 1;

    const result = castArray(value);

    expect(result).to.deep.equal([1]);
  });

  it("should not modify an existing array", () => {
    const existingArray = [1, 2, 3];

    const result = castArray(existingArray);

    expect(result).to.equal(existingArray);
  });

  it("should cast an object to an array with that object as the only element", () => {
    const value = { a: 1 };

    const result = castArray(value);

    expect(result).to.deep.equal([{ a: 1 }]);
  });

  it("should cast a string to an array with that string as the only element", () => {
    const value = "abc";

    const result = castArray(value);

    expect(result).to.deep.equal(["abc"]);
  });

  it("should cast null to an array with null as the only element", () => {
    const value = null;

    const result = castArray(value);

    expect(result).to.deep.equal([null]);
  });

  it("should cast undefined to an array with undefined as the only element", () => {
    const value = undefined;

    const result = castArray(value);

    expect(result).to.deep.equal([undefined]);
  });

  it("should return an empty array if no value is provided", () => {
    const result = castArray();

    expect(result).to.deep.equal([]);
  });
});
