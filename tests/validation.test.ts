import { generatePassword } from '../src/functions/generate.function'
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
} from '../src/utils/error.message'

describe('generatePassword props validation', () => {
  describe('length validation', () => {
    it('should throw an error if length is not a number', () => {
      // @ts-expect-error Ignore the error to test the validation
      expect(() => generatePassword({ length: 'invalid' })).toThrow(
        lengthError.invalidLength
      )
    })

    it('should throw an error if length is less than 1', () => {
      expect(() => generatePassword({ length: 0 })).toThrow(
        lengthError.invalidLength
      )
    })

    it('should throw an error if length is greater than 100', () => {
      expect(() => generatePassword({ length: 101 })).toThrow(
        lengthError.lengthTooLarge
      )
    })
  })

  describe('boolean options validation', () => {
    it('should throw an error if useNumbers options is not a boolean', () => {
      // @ts-expect-error Ignore the error to test the validation
      expect(() => generatePassword({ useNumbers: 'invalid' })).toThrow(
        useNumbersError
      )
    })

    it('should throw an error if useSymbols options is not a boolean', () => {
      // @ts-expect-error Ignore the error to test the validation
      expect(() => generatePassword({ useSymbols: 'invalid' })).toThrow(
        useSymbolsError
      )
    })

    it('should throw an error if useUppercase options is not a boolean', () => {
      // @ts-expect-error Ignore the error to test the validation
      expect(() => generatePassword({ useUppercase: 'invalid' })).toThrow(
        useUppercaseError
      )
    })

    it('should throw an error if useLowercase options is not a boolean', () => {
      // @ts-expect-error Ignore the error to test the validation
      expect(() => generatePassword({ useLowercase: 'invalid' })).toThrow(
        useLowercaseError
      )
    })

    it('should throw an error if excludeSimilarCharacters option is not a boolean', () => {
      expect(() =>
        // @ts-expect-error Ignore the error to test the validation
        generatePassword({ excludeSimilarCharacters: 'invalid' })
      ).toThrow(excludeSimilarCharactersError)
    })

    it('should throw an error if all boolean options are false', () => {
      expect(() =>
        generatePassword({
          useNumbers: false,
          useSymbols: false,
          useUppercase: false,
          useLowercase: false
        })
      ).toThrow(allOptionsFalseError)
    })
  })

  describe('string options validation', () => {
    it('should throw an error if exclude option is not a string', () => {
      // @ts-expect-error Ignore the error to test the validation
      expect(() => generatePassword({ exclude: 123 })).toThrow(excludeError)
    })
  })

  describe('count validation', () => {
    it('should throw an error if count is not a number', () => {
      // @ts-expect-error Ignore the error to test the validation
      expect(() => generatePassword({ count: 'invalid' })).toThrow(
        countError.invalidCount
      )
    })

    it('should throw an error if count is less than 1', () => {
      expect(() => generatePassword({ count: 0 })).toThrow(
        countError.invalidCount
      )
    })

    it('should throw an error if count is greater than 10', () => {
      expect(() => generatePassword({ count: 11 })).toThrow(
        countError.countTooLarge
      )
    })
  })

  describe('unwanted props validation', () => {
    it('should throw an error if unwanted props are passed', () => {
      expect(() => {
        // @ts-expect-error Ignore the error to test the validation
        generatePassword({ invalid: 'invalid', invalid2: 'invalid2' })
      }).toThrow(unwantedPropsError(['invalid', 'invalid2']))
    })
  })
})
