import { generatePassword } from '../src/functions/functions'

describe('generatePassword props validation', () => {
  it('should throw an error if length is not a number', () => {
    // @ts-expect-error Ignore the error to test the validation
    expect(() => generatePassword({ length: 'invalid' })).toThrow(
      'Invalid length. Length must be a positive number.'
    )
  })
})
