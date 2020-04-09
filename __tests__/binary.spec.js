const binarySeach = require('../index');

describe("Binary", () => {
  it("should return false when array is empty", () => {
    const array = [];
    const target = 10;
    const result = binarySeach(target, array);

    expect(result).toBe(false);
  }),

  it("should return -1 if target is not found", () => {
    const array = [1, 3, 7, 8];
    const target = 9;
    const result = binarySeach(target, array);

    expect(result).toBe(-1);
  })
})