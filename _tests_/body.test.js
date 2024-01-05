import {
  calculateMissingA,
  calculateMissingB,
  calculateMissingC,
  calculateMissingD,
} from "../src/calculations";

describe("calculateMissingA", () => {
  test("determines the missing proportional value", () => {
    expect(calculateMissingA(4, 12, 16)).toBe("3.00");
  });
  test("returns NaN if b, c or d are invalid", () => {
    expect(calculateMissingA(4, 16)).toBe("NaN");
  });
});

describe("calculateMissingB", () => {
  test("determines the missing proportional value", () => {
    expect(calculateMissingB(3, 6, 12)).toBe("6.00");
  });
  test("returns NaN if a, c or d are invalid", () => {
    expect(calculateMissingA(32, 1)).toBe("NaN");
  });
});

describe("calculateMissingC", () => {
  test("determines the missing proportional value", () => {
    expect(calculateMissingC(7, 12, 16)).toBe("9.33");
  });
  test("returns NaN if a, b or d are invalid", () => {
    expect(calculateMissingA(4, 17)).toBe("NaN");
  });
});

describe("calculateMissingD", () => {
  test("determines the missing proportional value", () => {
    expect(calculateMissingD(3.2, 4.53, 16)).toBe("22.65");
  });
  test("returns NaN if a, b, or c are invalid", () => {
    expect(calculateMissingA(12, 13)).toBe("NaN");
  });
});
