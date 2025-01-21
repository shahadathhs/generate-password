import { GeneratePasswordFunctionProps } from '../types/props.types'

import { propValidation } from './validation.function'

export function generatePassword(
  props: GeneratePasswordFunctionProps = {}
): string | string[] {
  // * Apply default values to props
  const {
    length = 8,
    useNumbers = true,
    useUppercase = true,
    useLowercase = true,
    useSymbols = false,
    excludeSimilarCharacters = false,
    exclude = '',
    count = 1,
    ...extraProps // * Capture any additional props that were passed
  } = props

  // * Combine all props into a single object for validation
  const allProps = {
    length,
    useNumbers,
    useUppercase,
    useLowercase,
    useSymbols,
    excludeSimilarCharacters,
    exclude,
    count,
    ...extraProps // * Pass additional props for validation
  }

  // * Validate all props, including unwanted ones
  propValidation(allProps)

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
