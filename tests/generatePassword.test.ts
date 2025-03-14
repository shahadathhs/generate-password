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

describe('GENERATE PASSWORD FUNCTION', () => {
  describe('generatePassword function tests', () => {
    it('should generate a password with default options', () => {
      const password = generatePassword()
      expect(password).toBeDefined()
    })

    it('should return a string when generating single password', () => {
      expect(typeof generatePassword()).toBe('string')
    })

    it('should generate a password of the specified length', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: true,
        useUppercase: true,
        useLowercase: true,
        useSymbols: true,
        excludeSimilarCharacters: false,
        exclude: ''
      })
      expect(password).toHaveLength(10)
    })

    it('should generate a password with numbers', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: true,
        useUppercase: false,
        useLowercase: false,
        useSymbols: false,
        excludeSimilarCharacters: false,
        exclude: ''
      })
      expect(password).toMatch(/[0-9]/)
    })

    it('should generate a password with uppercase characters', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: false,
        useUppercase: true,
        useLowercase: false,
        useSymbols: false,
        excludeSimilarCharacters: false,
        exclude: ''
      })
      expect(password).toMatch(/[A-Z]/)
    })

    it('should generate a password with lowercase characters', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: false,
        useUppercase: false,
        useLowercase: true,
        useSymbols: false,
        excludeSimilarCharacters: false,
        exclude: ''
      })
      expect(password).toMatch(/[a-z]/)
    })

    it('should generate a password with symbols', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: false,
        useUppercase: false,
        useLowercase: false,
        useSymbols: true,
        excludeSimilarCharacters: false,
        exclude: ''
      })
      expect(password).toMatch(/[@#$%^&*()_+=<>?/|]/)
    })

    it('should exclude similar characters', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: true,
        useUppercase: true,
        useLowercase: true,
        useSymbols: true,
        excludeSimilarCharacters: true,
        exclude: ''
      })
      expect(password).not.toMatch(/[il1Lo0O]/)
    })

    it('should exclude characters specified in the exclude string', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: true,
        useUppercase: true,
        useLowercase: true,
        useSymbols: true,
        excludeSimilarCharacters: false,
        exclude: 'a'
      })
      expect(password).not.toMatch(/[a]/)
    })

    it('should generate a password with the specified options', () => {
      const password = generatePassword({
        length: 10,
        useNumbers: true,
        useUppercase: true,
        useLowercase: true,
        useSymbols: true,
        excludeSimilarCharacters: false,
        exclude: ''
      })
      expect(password).toMatch(/[0-9A-Za-z@#$%^&*()_+=<>?/|]/)
    })

    it('should generate multiple passwords as an array', () => {
      const passwords = generatePassword({
        length: 10,
        useNumbers: true,
        useUppercase: true,
        useLowercase: true,
        useSymbols: true,
        excludeSimilarCharacters: false,
        exclude: '',
        count: 3
      })
      expect(Array.isArray(passwords)).toBe(true)
      expect(passwords.length).toBe(3)
    })
  })

  describe('generatePassword props validation tests', () => {
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
})
