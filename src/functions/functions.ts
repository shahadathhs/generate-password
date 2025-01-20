import { GeneratePasswordFunctionProps } from '../types/types'

export function propValidation(props: GeneratePasswordFunctionProps) {
  const { length, useNumbers, useUppercase, useLowercase, useSymbols, excludeSimilarCharacters, exclude, count } = props

  // * length validation
  if (typeof length !== 'number' || length < 1) {
    throw new Error('Invalid length. Length must be a positive number.')
  }
  if (length > 50) {
    throw new Error('Invalid length. Length must be less than or equal to 100.')
  }

  // * useNumbers validation
  if (typeof useNumbers !== 'boolean') {
    throw new Error('Invalid useNumbers. It must be a boolean value.')
  }

  // * useUppercase validation
  if (typeof useUppercase !== 'boolean') {
    throw new Error('Invalid useUppercase. It must be a boolean value.')
  }

  // * useLowercase validation
  if (typeof useLowercase !== 'boolean') {
    throw new Error('Invalid useLowercase. It must be a boolean value.')
  }

  // * useSymbols validation
  if (typeof useSymbols !== 'boolean') {
    throw new Error('Invalid useSymbols. It must be a boolean value.')
  }

  // * excludeSimilarCharacters validation
  if (typeof excludeSimilarCharacters !== 'boolean') {
    throw new Error(
      'Invalid excludeSimilarCharacters. It must be a boolean value.'
    )
  }

  // * exclude validation
  if (typeof exclude !== 'string') {
    throw new Error('Invalid exclude. It must be a string.')
  }

  // * count validation
  if (typeof count !== 'number' || count < 1) {
    throw new Error('Invalid count. Count must be a positive number.')
  }
  if (count > 10) {
    throw new Error('Invalid count. Count must be less than or equal to 100.')
  }

  // * throw error if unwanted props are passed
  const unwantedProps = Object.keys(props).filter(
    key =>
      ![
        'length',
        'useNumbers',
        'useUppercase',
        'useLowercase',
        'useSymbols',
        'excludeSimilarCharacters',
        'exclude',
        'count'
      ].includes(key)
  )

  if (unwantedProps.length) {
    throw new Error(
      `Invalid prop(s): ${unwantedProps.join(
        ', '
      )}. Only the following options are allowed: length, useNumbers, useUppercase, useLowercase, useSymbols, excludeSimilarCharacters, exclude, count.`
    )
  }

  // * throw error if all boolean props are false
  if (
    !useNumbers &&
    !useUppercase &&
    !useLowercase &&
    !useSymbols &&
    !excludeSimilarCharacters
  ) {
    throw new Error(
      'At least one of the following options must be true: useNumbers, useUppercase, useLowercase, useSymbols, excludeSimilarCharacters'
    )
  }
}

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
  // * Validate the props
  propValidation({
    length,
    useNumbers,
    useUppercase,
    useLowercase,
    useSymbols,
    excludeSimilarCharacters,
    exclude,
    count
  })

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
