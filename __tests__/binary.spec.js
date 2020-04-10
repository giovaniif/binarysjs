const getIndex = require('../index');

describe("Binary", () => {
  it("should return false when array is empty", () => {
    const array = [];
    const target = 10;
    const result = getIndex(target, array);

    expect(result).toBe(false);
  }),

  it("should return -1 if target is not found", () => {
    const array = [1, 3, 7, 8];
    const target = 9;
    const result = getIndex(target, array);

    expect(result).toBe(-1);
  })

  it("should return the right index", () => {
    const array = [1, 3, 7, 8];
    const target = 7;
    const result = getIndex(target, array);

    expect(result).toBe(2);
  })
})