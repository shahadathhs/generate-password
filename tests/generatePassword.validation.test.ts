import { generatePassword } from '../src/functions/generate.function'
import { lengthError } from '../src/utils/error.message'

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
})
