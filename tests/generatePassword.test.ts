import { generatePassword } from '../src/functions/functions'

describe('generatePassword', () => {
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
})
