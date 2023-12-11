import { expect } from "chai";
import clamp from "../src/clamp.js";

describe("clamp", () => {
  it("should clamp a number within the specified range", () => {
    const number = 5;
    const lower = 1;
    const upper = 10;

    const result = clamp(number, lower, upper);

    expect(result).to.equal(5);
  });

  it("should clamp a number below the lower bound to the lower bound", () => {
    const number = 0;
    const lower = 1;
    const upper = 10;

    const result = clamp(number, lower, upper);

    expect(result).to.equal(1);
  });

  it("should clamp a number above the upper bound to the upper bound", () => {
    const number = 15;
    const lower = 1;
    const upper = 10;

    const result = clamp(number, lower, upper);

    expect(result).to.equal(10);
  });

  it("should handle negative numbers", () => {
    const number = -5;
    const lower = -10;
    const upper = 0;

    const result = clamp(number, lower, upper);

    expect(result).to.equal(-5);
  });

  it("should handle NaN values by treating them as 0", () => {
    const number = NaN;
    const lower = 1;
    const upper = 10;

    const result = clamp(number, lower, upper);

    expect(result).to.equal(0);
  });

  it("should handle undefined values by treating them as 0", () => {
    const number = undefined;
    const lower = 1;
    const upper = 10;

    const result = clamp(number, lower, upper);

    expect(result).to.equal(0);
  });
});
