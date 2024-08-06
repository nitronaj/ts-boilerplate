import { add } from "./calc";

describe("Add function", () => {
  it("should test add function", () => {
    expect(add(0, 0)).toBe(0);
    expect(add(1, 0)).toBe(1);
    expect(add(1, 1)).toBe(2);
    expect(add(1, -1)).toBe(0);
    expect(add(1.1, 0)).toBe(1.1);
  });
});

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

async function delay(delayTime: number = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}
