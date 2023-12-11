import { expect } from "chai";
import endsWith from "../src/endsWith.js";

describe("endsWith", () => {
  it("should return true if string ends with the target string", () => {
    const string = "abc";
    const target = "c";

    const result = endsWith(string, target);

    expect(result).to.be.true;
  });

  it("should return false if string does not end with the target string", () => {
    const string = "abc";
    const target = "b";

    const result = endsWith(string, target);

    expect(result).to.be.false;
  });

  it("should return true if string ends with the target string up to a specified position", () => {
    const string = "abc";
    const target = "b";
    const position = 2;

    const result = endsWith(string, target, position);

    expect(result).to.be.true;
  });

  it("should handle position less than 0 by treating it as 0", () => {
    const string = "abc";
    const target = "c";
    const position = -1;

    const result = endsWith(string, target, position);

    expect(result).to.be.true;
  });

  it("should handle position greater than string length by treating it as string length", () => {
    const string = "abc";
    const target = "c";
    const position = 5;

    const result = endsWith(string, target, position);

    expect(result).to.be.true;
  });

  it("should handle position as NaN by treating it as 0", () => {
    const string = "abc";
    const target = "c";
    const position = NaN;

    const result = endsWith(string, target, position);

    expect(result).to.be.true;
  });

  it("should handle undefined position by using the string length", () => {
    const string = "abc";
    const target = "c";

    const result = endsWith(string, target);

    expect(result).to.be.true;
  });
});
