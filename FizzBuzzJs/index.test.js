const fizzBuzzer = require("./index");

describe("FizzBuzzer should", () => {
  const numbersDivisibleBy3 = [3, 6];
  const numbersDivisibleBy5 = [5, 10];
  const defaultNumbers = [
    {
      number: 1,
      expect: "1",
    },
    {
      number: 2,
      expect: "2",
    },
  ];

  defaultNumbers.forEach((testData) => {
    it(`return ${testData.expect}`, () => {
      expect(fizzBuzzer(testData.number)).toBe(testData.expect);
    });
  });

  test("return Fizz if divisible by 3", () => {
    numbersDivisibleBy3.forEach((number) => {
      expect(fizzBuzzer(number)).toBe("Fizz");
    });
  });

  test("return Buzz if divisible by 5", () => {
    expect(fizzBuzzer(5)).toBe("Buzz");
    expect(fizzBuzzer(10)).toBe("Buzz");
  });

  test("return Buzz if divisible by 5", () => {
    numbersDivisibleBy5.forEach((number) => {
      expect(fizzBuzzer(number)).toBe("Buzz");
    });
  });
});
