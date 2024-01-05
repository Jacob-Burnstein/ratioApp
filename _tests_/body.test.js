import {
  calculateMissingA,
  calculateMissingB,
  calculateMissingC,
  calculateMissingD,
} from "../src/calculations";

test("calculateMissingA determines the missing proportional value", () => {
  expect(calculateMissingA(4, 12, 16)).toBe("3.00");
});

test("calculateMissingB determines the missing proportional value", () => {
  expect(calculateMissingA(3, 6, 12)).toBe("6.00");
});

test("calculateMissingC determines the missing proportional value", () => {
  expect(calculateMissingA(7, 12, 16)).toBe("9.33");
});

test("calculateMissingD determines the missing proportional value", () => {
  expect(calculateMissingA(3.2, 4.53, 16)).toBe("22.65");
});
