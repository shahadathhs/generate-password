import { GeneratePasswordFunctionProps } from '../types/types'

export function generatePassword({
  length = 8, // * Default to 8 characters
  useNumbers = true, // * Default to true
  useUppercase = true, // * Default to true
  useLowercase = true, // * Default to true
  useSymbols = false, // * Default to false
  excludeSimilarCharacters = false, // * Default to false
  exclude = '', // * Default to an empty string
  count = 1 // * Default to generating one password
}: GeneratePasswordFunctionProps = {}): string | string[] {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberChars = '0123456789'
  const symbolChars = '@#$%^&*()_+=<>?/|'
  const similarChars = 'il1Lo0O'

  let charset = ''

  if (useLowercase) charset += lowercaseChars
  if (useUppercase) charset += uppercaseChars
  if (useNumbers) charset += numberChars
  if (useSymbols) charset += symbolChars

  if (excludeSimilarCharacters) {
    charset = charset
      .split('')
      .filter(char => !similarChars.includes(char))
      .join('')
  }

  if (exclude) {
    charset = charset
      .split('')
      .filter(char => !exclude.includes(char))
      .join('')
  }

  const generateSinglePassword = () => {
    const randomIndices = new Uint32Array(length)
    crypto.getRandomValues(randomIndices)

    const password = Array.from(randomIndices)
      .map(index => charset[index % charset.length])
      .join('')

    return password
  }

  if (count === 1) {
    return generateSinglePassword()
  }

  const passwords = []
  for (let i = 0; i < count; i++) {
    passwords.push(generateSinglePassword())
  }

  return passwords.length === 1 ? passwords[0] : passwords
}
