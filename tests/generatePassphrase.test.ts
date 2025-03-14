import { generatePassphrase } from '../src/functions/generate.function'

describe('GENERATE PASSPHRASE FUNCTION', () => {
  describe('generatePassphrase function tests', () => {
    it('should generate a passphrase with default options', () => {
      const passphrase = generatePassphrase()
      expect(passphrase).toBeDefined()
      expect(typeof passphrase).toBe('string')
      // Default options use 4 words with space as separator.
      const words = passphrase.split(' ')
      expect(words.length).toBe(4)
    })

    it('should generate a passphrase with the specified word count', () => {
      const wordCount = 6
      const passphrase = generatePassphrase({ wordCount })
      const words = passphrase.split(' ')
      expect(words.length).toBe(wordCount)
    })

    it('should generate a passphrase with a custom separator', () => {
      const separator = '-'
      const passphrase = generatePassphrase({ separator })
      // Ensure the separator is present.
      expect(passphrase.includes(separator)).toBe(true)
      const words = passphrase.split(separator)
      // Default wordCount is 4.
      expect(words.length).toBe(4)
    })

    it('should capitalize words if capitalize is true', () => {
      const passphrase = generatePassphrase({ capitalize: true })
      const words = passphrase.split(' ')
      words.forEach(word => {
        // Check that the first character is uppercase.
        expect(word.charAt(0)).toMatch(/[A-Z]/)
      })
    })

    it('should use a custom word list when provided', () => {
      const customWordList = ['foo', 'bar', 'baz']
      const wordCount = 5
      const passphrase = generatePassphrase({
        wordCount,
        wordList: customWordList
      })
      const words = passphrase.split(' ')
      words.forEach(word => {
        // Allow for lower-case match if capitalize is not enabled.
        const normalizedWord = word.toLowerCase()
        expect(customWordList.includes(normalizedWord)).toBe(true)
      })
    })

    it('should generate a passphrase with the specified options', () => {
      const passphrase = generatePassphrase({
        wordCount: 6,
        capitalize: true,
        separator: '-',
        wordList: ['foo', 'bar', 'baz']
      })

      const words = passphrase.split('-')
      expect(words.length).toBe(6)
      expect(passphrase).toMatch(/[A-Z]/)
      expect(passphrase).toMatch(/-/)
      words.forEach(word => {
        const normalizedWord = word.toLowerCase()
        expect(['foo', 'bar', 'baz']).toContain(normalizedWord)
      })
    })
  })

  // describe('generatePassphrase prop validation tests', () => {
  //   it('should throw an error if wordCount is not a number', () => {
  //     // @ts-expect-error Ignore the error to test the validation
  //     expect(() => generatePassphrase({ wordCount: 'invalid' })).toThrow(
  //       new Error(
  //         'Invalid prop(s): wordCount. Only the following options are allowed: wordCount, separator, wordList, capitalize.'
  //       )
  //     )
  //   })

  //   it('should throw an error if separator is not a string', () => {
  //     // @ts-expect-error Ignore the error to test the validation
  //     expect(() => generatePassphrase({ separator: 123 })).toThrow(
  //       new Error(
  //         'Invalid prop(s): separator. Only the following options are allowed: wordCount, separator, wordList, capitalize.'
  //       )
  //     )
  //   })

  //   it('should throw an error if wordList is not an array', () => {
  //     // @ts-expect-error Ignore the error to test the validation
  //     expect(() => generatePassphrase({ wordList: 'invalid' })).toThrow(
  //       new Error(
  //         'Invalid prop(s): wordList. Only the following options are allowed: wordCount, separator, wordList, capitalize.'
  //       )
  //     )
  //   })

  //   it('should throw an error if capitalize is not a boolean', () => {
  //     // @ts-expect-error Ignore the error to test the validation
  //     expect(() => generatePassphrase({ capitalize: 'invalid' })).toThrow(
  //       new Error(
  //         'Invalid prop(s): capitalize. Only the following options are allowed: wordCount, separator, wordList, capitalize.'
  //       )
  //     )
  //   })

  //   it('should throw an error if wordCount is less than 1', () => {
  //     expect(() => generatePassphrase({ wordCount: 0 })).toThrow(
  //       new Error(
  //         'Invalid prop(s): wordCount. Only the following options are allowed: wordCount, separator, wordList, capitalize.'
  //       )
  //     )
  //   })
  // })
})
