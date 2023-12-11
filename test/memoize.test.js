import { expect } from "chai";
import memoize from "../src/memoize.js";

describe("memoize", () => {
  it("should memoize the result of the function based on arguments", () => {
    const add = (a, b) => {
      console.log("Calculating sum...");
      return a + b;
    };

    const memoizedAdd = memoize(add);

    const result1 = memoizedAdd(2, 3);
    const result2 = memoizedAdd(2, 3);

    expect(result1).to.equal(5);
    expect(result2).to.equal(5);
  });

  it("should use a custom resolver function if provided", () => {
    const customResolver = (a, b) => a * b;

    const multiply = (a, b) => {
      console.log("Calculating product...");
      return a * b;
    };

    const memoizedMultiply = memoize(multiply, customResolver);

    const result1 = memoizedMultiply(2, 3);
    const result2 = memoizedMultiply(3, 2);

    expect(result1).to.equal(6);
    expect(result2).to.equal(6);
  });

  it("should expose the cache property on the memoized function", () => {
    const square = (n) => {
      console.log("Calculating square...");
      return n * n;
    };

    const memoizedSquare = memoize(square);

    const result1 = memoizedSquare(4);
    const result2 = memoizedSquare(4);

    expect(result1).to.equal(16);
    expect(result2).to.equal(16);

    // Check if cache property is exposed
    expect(memoizedSquare).to.have.property("cache");
    expect(memoizedSquare.cache).to.be.an.instanceOf(Map);
  });

  it("should handle functions with different this bindings", () => {
    function getValue() {
      return this.value;
    }

    const obj1 = { value: 42 };
    const obj2 = { value: 100 };

    const memoizedGetValue = memoize(getValue);

    const result1 = memoizedGetValue.call(obj1);
    const result2 = memoizedGetValue.call(obj2);

    expect(result1).to.equal(42);
    expect(result2).to.equal(100);
  });
});
