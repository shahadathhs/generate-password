import { PropsEnum } from '../enum/props.enum'
import { GeneratePasswordFunctionProps } from '../types/props.types'
import {
  allOptionsFalseError,
  countError,
  excludeError,
  excludeSimilarCharactersError,
  lengthError,
  unwantedPropsError,
  useLowercaseError,
  useNumbersError,
  useSymbolsError,
  useUppercaseError
} from '../utils/error.message'

export function propValidation(props: GeneratePasswordFunctionProps) {
  const {
    length,
    useNumbers,
    useUppercase,
    useLowercase,
    useSymbols,
    excludeSimilarCharacters,
    exclude,
    count
  } = props

  // * length validation
  if (typeof length !== 'number' || length < 1) {
    throw new Error(lengthError.invalidLength)
  }
  if (length > 50) {
    throw new Error(lengthError.lengthTooLarge)
  }

  // * useNumbers validation
  if (typeof useNumbers !== 'boolean') {
    throw new Error(useNumbersError)
  }

  // * useUppercase validation
  if (typeof useUppercase !== 'boolean') {
    throw new Error(useUppercaseError)
  }

  // * useLowercase validation
  if (typeof useLowercase !== 'boolean') {
    throw new Error(useLowercaseError)
  }

  // * useSymbols validation
  if (typeof useSymbols !== 'boolean') {
    throw new Error(useSymbolsError)
  }

  // * excludeSimilarCharacters validation
  if (typeof excludeSimilarCharacters !== 'boolean') {
    throw new Error(excludeSimilarCharactersError)
  }

  // * exclude validation
  if (typeof exclude !== 'string') {
    throw new Error(excludeError)
  }

  // * count validation
  if (typeof count !== 'number' || count < 1) {
    throw new Error(countError.invalidCount)
  }
  if (count > 10) {
    throw new Error(countError.countTooLarge)
  }

  // * throw error if unwanted props are passed
  const unwantedProps = Object.keys(props).filter(
    key =>
      ![
        PropsEnum.LENGTH,
        PropsEnum.USE_NUMBERS,
        PropsEnum.USE_UPPERCASE,
        PropsEnum.USE_LOWERCASE,
        PropsEnum.USE_SYMBOLS,
        PropsEnum.EXCLUDE_SIMILAR_CHARACTERS,
        PropsEnum.EXCLUDE,
        PropsEnum.COUNT
      ].includes(key as PropsEnum)
  )

  if (unwantedProps.length) {
    throw new Error(unwantedPropsError(unwantedProps))
  }

  // * throw error if all boolean props are false
  if (
    !useNumbers &&
    !useUppercase &&
    !useLowercase &&
    !useSymbols &&
    !excludeSimilarCharacters
  ) {
    throw new Error(allOptionsFalseError)
  }
}
