import { expect } from "chai";
import isObject from "../src/isObject.js";

describe("isObject", () => {
  it("should return true for an object literal", () => {
    const value = {};

    const result = isObject(value);

    expect(result).to.be.true;
  });

  it("should return true for an array", () => {
    const value = [1, 2, 3];

    const result = isObject(value);

    expect(result).to.be.true;
  });

  it("should return true for a function", () => {
    const value = function () {};

    const result = isObject(value);

    expect(result).to.be.true;
  });

  it('should return true for an object created with "new Number(0)"', () => {
    const value = new Number(0);

    const result = isObject(value);

    expect(result).to.be.true;
  });

  it("should return true for an object created with \"new String('')\"", () => {
    const value = new String("");

    const result = isObject(value);

    expect(result).to.be.true;
  });

  it("should return false for null", () => {
    const value = null;

    const result = isObject(value);

    expect(result).to.be.false;
  });

  it("should return false for a primitive value (number)", () => {
    const value = 42;

    const result = isObject(value);

    expect(result).to.be.false;
  });

  it("should return false for a primitive value (string)", () => {
    const value = "hello";

    const result = isObject(value);

    expect(result).to.be.false;
  });
});
