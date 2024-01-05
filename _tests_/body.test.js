import {
  calculateMissingA,
  calculateMissingB,
  calculateMissingC,
  calculateMissingD,
} from "../src/calculations";

test("calculateMissingA determines the missing proportional value", () => {
  expect(calculateMissingA(4, 12, 16)).toBe("3.00");
});
