export type GeneratePasswordFunctionProps = {
  length: number;
  useNumbers: boolean;
  useUppercase: boolean;
  useLowercase: boolean;
  useSymbols: boolean;
  excludeSimilarCharacters: boolean;
  exclude: string;
};
