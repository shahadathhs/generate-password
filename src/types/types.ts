export type GeneratePasswordFunctionProps = {
  length: number;
  useNumbers: boolean;
  useUppercase: boolean;
  useLowercase: boolean;
  useSymbols: boolean;
  excludeSimilarCharacters: boolean;
  allowSequential: boolean;
};
