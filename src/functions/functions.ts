import { GeneratePasswordFunctionProps } from "../types/types";

export function generatePassword({
  length = 8,
  useNumbers = true,
  useUppercase = true,
  useLowercase = true,
  useSymbols = false,
  excludeSimilarCharacters = false,
  exclude = ""
}: GeneratePasswordFunctionProps): string {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "@#$%^&*()_+=<>?/|";
  const similarChars = "il1Lo0O";

  let charset = "";

  if (useLowercase) charset += lowercaseChars;
  if (useUppercase) charset += uppercaseChars;
  if (useNumbers) charset += numberChars;
  if (useSymbols) charset += symbolChars;

  if (excludeSimilarCharacters) {
    charset = charset
      .split("")
      .filter((char) => !similarChars.includes(char))
      .join("");
  }

  if (exclude) {
    charset = charset
      .split("")
      .filter((char) => !exclude.includes(char))
      .join("");
  }

  const randomIndices = new Uint32Array(length);
  crypto.getRandomValues(randomIndices);

  const password = Array.from(randomIndices)
    .map((index) => charset[index % charset.length])
    .join("");

  return password.toString();
}
