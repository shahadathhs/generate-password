export function generatePasswordWithOptions({
  length,
  useNumbers,
  useUppercase,
  useLowercase,
  useSymbols,
  excludeSimilarCharacters,
  allowSequential,
}: {
  length: number;
  useNumbers: boolean;
  useUppercase: boolean;
  useLowercase: boolean;
  useSymbols: boolean;
  excludeSimilarCharacters: boolean;
  allowSequential: boolean;
}): string {
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

  if (!allowSequential) {
    charset = charset
      .split("")
      .filter(
        (char) =>
          !charset.includes(String.fromCharCode(char.charCodeAt(0) + 1))
      )
      .join("");
  }

  const randomIndices = new Uint32Array(length);
  crypto.getRandomValues(randomIndices);

  const password = Array.from(randomIndices)
    .map((index) => charset[index % charset.length])
    .join("");

  return password.toString();
}
