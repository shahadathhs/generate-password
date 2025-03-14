import {
  GeneratePassphraseFunctionProps,
  GeneratePasswordFunctionProps
} from '../types/props.types'
import { defaultWordList } from '../utils/default.value'

import {
  generatePassphrasePropValidation,
  generatePasswordPropValidation
} from './validation.function'

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
  generatePasswordPropValidation(allProps)

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberChars = '0123456789'
  const symbolChars = '@#$%^&*()_+=<>?/|'
  const similarChars = 'il1Lo0O'

  let charset = ''

  const charsetOptions = [
    { condition: useLowercase, value: lowercaseChars },
    { condition: useUppercase, value: uppercaseChars },
    { condition: useNumbers, value: numberChars },
    { condition: useSymbols, value: symbolChars }
  ]

  // * Use reduce to build the charset based on conditions
  charset = charsetOptions.reduce((acc, { condition, value }) => {
    return condition ? acc + value : acc
  }, '')

  // * Exclude similar characters
  if (excludeSimilarCharacters) {
    charset = charset
      .split('')
      .filter(char => !similarChars.includes(char))
      .join('')
  }

  // * Exclude characters from the exclude prop
  if (exclude) {
    charset = charset
      .split('')
      .filter(char => !exclude.includes(char))
      .join('')
  }

  // * Validate charset
  if (charset.length === 0) {
    throw new Error('No valid characters to generate password.')
  }

  const generateSinglePassword = () => {
    const randomIndices = new Uint32Array(length)
    crypto.getRandomValues(randomIndices)

    const password = Array.from(randomIndices)
      .map(index => charset[index % charset.length])
      .join('')

    return password
  }

  if (count === 1) return generateSinglePassword()

  return Array.from({ length: count }, generateSinglePassword)
}

export function generatePassphrase(
  options: GeneratePassphraseFunctionProps = {}
): string {
  const {
    wordCount = 4,
    separator = ' ',
    wordList = defaultWordList,
    capitalize = false
  } = options

  // * Validate passphrase-specific properties
  generatePassphrasePropValidation(options)

  // * Function to get a secure random index
  const getSecureRandomIndex = (max: number): number => {
    const array = new Uint32Array(1)
    crypto.getRandomValues(array)
    return array[0] % max
  }

  // * Generate the passphrase by selecting random words from the word list
  const passphraseWords: string[] = []
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = getSecureRandomIndex(wordList.length)
    let word = wordList[randomIndex]
    if (capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1)
    }
    passphraseWords.push(word)
  }

  return passphraseWords.join(separator)
}
