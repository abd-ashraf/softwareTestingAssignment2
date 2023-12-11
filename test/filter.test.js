import { expect } from "chai";
import filter from "../src/filter.js";

describe("filter", () => {
  it("should return a new array with elements that pass the predicate check", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
      { user: "alice", active: true },
    ];
    const predicate = ({ active }) => active;

    const result = filter(users, predicate);

    expect(result).to.deep.equal([
      { user: "barney", active: true },
      { user: "alice", active: true },
    ]);
  });

  it("should return an empty array if no elements pass the predicate check", () => {
    const users = [
      { user: "barney", active: false },
      { user: "fred", active: false },
    ];
    const predicate = ({ active }) => active;

    const result = filter(users, predicate);

    expect(result).to.deep.equal([]);
  });

  it("should handle an empty array and return an empty array", () => {
    const array = [];
    const predicate = () => true;

    const result = filter(array, predicate);

    expect(result).to.deep.equal([]);
  });

  it("should correctly iterate over elements with the provided index and array arguments", () => {
    const array = [2, 4, 6, 8];
    const predicate = (value, index, arr) => value > arr[index - 1];

    const result = filter(array, predicate);

    expect(result).to.deep.equal([4, 6, 8]);
  });

  it("should handle an array with only falsey values and return an empty array", () => {
    const array = [null, 0, "", false];
    const predicate = Boolean;

    const result = filter(array, predicate);

    expect(result).to.deep.equal([]);
  });
});
