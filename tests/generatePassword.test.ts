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
    });
    expect(password).toHaveLength(10);
  });

  it("should generate a password with numbers", () => {
    const password = generatePasswordWithOptions({
      length: 10,
      useNumbers: true,
      useUppercase: false,
      useLowercase: false,
      useSymbols: false,
      excludeSimilarCharacters: false,
    });
    expect(password).toMatch(/[0-9]/);
  });

  it("should generate a password with uppercase characters", () => {
    const password = generatePasswordWithOptions({
      length: 10,
      useNumbers: false,
      useUppercase: true,
      useLowercase: false,
      useSymbols: false,
      excludeSimilarCharacters: false,
    });
    expect(password).toMatch(/[A-Z]/);
  });

  it("should generate a password with lowercase characters", () => {
    const password = generatePasswordWithOptions({
      length: 10,
      useNumbers: false,
      useUppercase: false,
      useLowercase: true,
      useSymbols: false,
      excludeSimilarCharacters: false,
    });
    expect(password).toMatch(/[a-z]/);
  });

  it("should generate a password with symbols", () => {
    const password = generatePasswordWithOptions({
      length: 10,
      useNumbers: false,
      useUppercase: false,
      useLowercase: false,
      useSymbols: true,
      excludeSimilarCharacters: false,
    });
    expect(password).toMatch(/[@#$%^&*()_+=<>?/|]/);
  });

  it("should exclude similar characters", () => {
    const password = generatePasswordWithOptions({
      length: 10,
      useNumbers: true,
      useUppercase: true,
      useLowercase: true,
      useSymbols: true,
      excludeSimilarCharacters: true,
    });
    expect(password).not.toMatch(/[il1Lo0O]/);
  });

  it("should generate a password with the specified options", () => {
    const password = generatePasswordWithOptions({
      length: 10,
      useNumbers: true,
      useUppercase: true,
      useLowercase: true,
      useSymbols: true,
      excludeSimilarCharacters: false,
    });
    expect(password).toMatch(/[0-9A-Za-z@#$%^&*()_+=<>?/|]/);
  });
});
