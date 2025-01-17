import { generatePasswordWithOptions } from "../src/functions/functions";

describe("generatePasswordWithOptions", () => {
  it("should generate a password of the specified length", () => {
    const password = generatePasswordWithOptions({
      length: 10,
      useNumbers: true,
      useUppercase: true,
      useLowercase: true,
      useSymbols: true,
      excludeSimilarCharacters: false,
      allowSequential: true,
    });
    expect(password).toHaveLength(10);
  });
});
