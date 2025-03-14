# generate-password-in-client-side

`generate-password-in-client-side` is a customizable, lightweight, and secure password generator library for JavaScript and TypeScript. It allows you to generate random passwords with various options such as length, inclusion of numbers, symbols, uppercase, lowercase letters, and excluding similar characters. Additionally, it now includes a passphrase generator that creates secure and memorable passphrases.

This package supports **multiple password generation**, **passphrase generation**, and **inbuilt error handling** for enhanced flexibility and reliability.

## Installation

Install the package using npm or yarn:

```bash
npm install generate-password-in-client-side
```

or

```bash
yarn add generate-password-in-client-side
```

## Usage

### Importing the Functions

```typescript
import { generatePassword, generatePassphrase } from 'generate-password-in-client-side'
```

---

## Password Generation

The `generatePassword` function generates a random password based on the provided options.

### Example Usage

```typescript
import { generatePassword } from 'generate-password-in-client-side'

const password = generatePassword({
  length: 12,
  useNumbers: true,
  useUppercase: true,
  useLowercase: true,
  useSymbols: false,
  excludeSimilarCharacters: true,
  exclude: 'abc' // Optionally exclude specific characters
})

console.log('Generated Password:', password)
```

### Generating Multiple Passwords

To generate multiple passwords at once, use the `count` parameter:

```typescript
const passwords = generatePassword({
  length: 10,
  useNumbers: true,
  useUppercase: true,
  useLowercase: true,
  count: 5 // Generates 5 passwords
})

console.log('Generated Passwords:', passwords)
```

### Parameters

The `generatePassword` function takes an object with the following properties:

| Parameter                  | Type    | Default Value | Description                                                          |
| -------------------------- | ------- | ------------- | -------------------------------------------------------------------- |
| `length`                   | number  | `8`           | The length of the password to generate.                            |
| `useNumbers`               | boolean | `true`        | Include numeric characters (0-9).                                    |
| `useUppercase`             | boolean | `true`        | Include uppercase letters (A-Z).                                     |
| `useLowercase`             | boolean | `true`        | Include lowercase letters (a-z).                                     |
| `useSymbols`               | boolean | `false`       | Include symbols (@#$%^&*()_+=<>?/|).                                  |
| `excludeSimilarCharacters` | boolean | `false`       | Exclude visually similar characters (e.g., 'i', 'l', '1', 'o', '0'). |
| `exclude`                  | string  | `""`          | Exclude specific characters from the generated password.             |
| `count`                    | number  | `1`           | Number of passwords to generate.                                     |

### Example Configurations

1. **Simple password with lowercase and numbers:**

   ```typescript
   const password = generatePassword({
     length: 8,
     useNumbers: true,
     useUppercase: false,
     useLowercase: true,
     useSymbols: false,
     excludeSimilarCharacters: false,
     exclude: ''
   })
   console.log(password) // Example output: "abc3d5f9"
   ```

2. **Complex password with all options enabled:**

   ```typescript
   const password = generatePassword({
     length: 16,
     useNumbers: true,
     useUppercase: true,
     useLowercase: true,
     useSymbols: true,
     excludeSimilarCharacters: true,
     exclude: ''
   })
   console.log(password) // Example output: "A#kM@4p*J!h2X&b7"
   ```

3. **Password with excluded specific characters:**

   ```typescript
   const password = generatePassword({
     length: 10,
     useNumbers: true,
     useUppercase: true,
     useLowercase: true,
     useSymbols: true,
     excludeSimilarCharacters: true,
     exclude: 'aeiou' // Exclude vowels
   })
   console.log(password) // Example output: "B5Tn%rW6!p0"
   ```

4. **Generating multiple passwords:**

   ```typescript
   const passwords = generatePassword({
     length: 12,
     count: 3,
     useNumbers: true,
     useUppercase: true,
     useLowercase: true,
     useSymbols: true
   })
   console.log(passwords) // Example output: ["X9a@lBn!r23*", "Q4pR^5kLm@7!", "Zx%8v#Tg!23$"]
   ```

### Error Handling

The `generatePassword` function includes enhanced error handling to ensure the generated passwords are secure and meet your requirements. If an error occurs, a descriptive error message will be thrown.

#### Common Error Messages

- **Invalid Length:**
  - "Invalid length. Length must be a positive number."
  - "Invalid length. Length must be less than or equal to 50."
- **Invalid Boolean Flags (useNumbers, useUppercase, useLowercase, useSymbols, excludeSimilarCharacters):**
  - "It must be a boolean value."
- **Invalid Exclude:**
  - "Invalid exclude. It must be a string."
- **Invalid Count:**
  - "Invalid count. Count must be a positive number."
  - "Invalid count. Count must be less than or equal to 10."
- **Unwanted Properties:**
  - "Invalid prop(s): propName(s). Only the following options are allowed: length, useNumbers, useUppercase, useLowercase, useSymbols, excludeSimilarCharacters, exclude, count."
- **All Options False:**
  - "At least one of the options must be true."

### Notes

- The function uses the built-in `crypto.getRandomValues()` for secure random number generation, ensuring the generated passwords are cryptographically secure.
- Enhanced error handling is built in to validate input parameters and provide informative error messages.
- Use the `length` and `count` parameters wisely to generate strong, secure passwords suitable for your use case.
- The `exclude` parameter allows you to provide a string of characters that should not appear in the generated password.

---

## Passphrase Generation

The new `generatePassphrase` function generates a secure, memorable passphrase by concatenating randomly selected words from a list. This approach creates an easy-to-remember alternative to traditional random character passwords.

### Example Usage

```typescript
import { generatePassphrase } from 'generate-password-in-client-side'

const passphrase = generatePassphrase({
  wordCount: 4,           // Number of words; default is 4.
  separator: ' ',         // Separator between words; default is a space.
  wordList: ['apple', 'orange', 'banana', 'kiwi'], // Custom word list (optional).
  capitalize: true        // Capitalize the first letter of each word; default is false.
})

console.log('Generated Passphrase:', passphrase)
```

### Parameters

The `generatePassphrase` function accepts an options object with the following properties:

| Parameter    | Type      | Default Value                                             | Description                                                                       |
| ------------ | --------- | --------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `wordCount`  | number    | `4`                                                     | The number of words in the passphrase.                                            |
| `separator`  | string    | `" "`                                                   | The string used to separate words.                                                |
| `wordList`   | string[]  | A built-in list of common words (e.g., fruits, etc.)      | The list of words to choose from. If not provided, a default list is used.         |
| `capitalize` | boolean   | `false`                                                 | If true, capitalizes the first letter of each word.                               |

### Passphrase Example Configurations

1. **Default Passphrase:**

   ```typescript
   const passphrase = generatePassphrase()
   console.log(passphrase) // Example output: "apple orange banana kiwi"
   ```

2. **Custom Passphrase:**

   ```typescript
   const passphrase = generatePassphrase({
     wordCount: 6,
     separator: '-',
     capitalize: true,
     wordList: ['foo', 'bar', 'baz', 'qux', 'quux', 'corge']
   })
   console.log(passphrase) // Example output: "Foo-Bar-Baz-Qux-Quux-Corge"
   ```

### Error Handling

The `generatePassphrase` function includes validation to ensure the options are valid. If invalid properties are provided, it will throw an error with a descriptive message.

#### Common Error Messages

- **Invalid `wordCount`:**  
  - "Invalid wordCount. It must be a positive number between 1 and 100."
  
- **Invalid `separator`:**  
  - "Invalid separator. It must be a string."

- **Invalid `wordList`:**  
  - "Invalid wordList. It must be a non-empty array."

- **Invalid `capitalize`:**  
  - "Invalid capitalize. It must be a boolean value."


### Notes on Passphrase Generation

- The function uses `crypto.getRandomValues()` for secure random selection.
- You can supply your own word list for tailored passphrase generation.
- This feature is designed to produce passphrases that are both secure and easy to remember.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on [GitHub](https://github.com/shahadathhs/generate-password).

