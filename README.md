# generate-password-in-client-side

`generate-password-in-client-side` is a customizable, lightweight, and secure password generator library for JavaScript and TypeScript. It allows you to generate random passwords with various options such as length, inclusion of numbers, symbols, uppercase, lowercase letters, and excluding similar characters.

This package support **multiple password generation** and **inbuilt error handling** for enhanced flexibility and reliability.

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

### Importing the Function

```typescript
import { generatePassword } from 'generate-password-in-client-side'
```

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
| `length`                   | number  | `8`           | The length of the password to generate.                              |
| `useNumbers`               | boolean | `true`        | Include numeric characters (0-9).                                    |
| `useUppercase`             | boolean | `true`        | Include uppercase letters (A-Z).                                     |
| `useLowercase`             | boolean | `true`        | Include lowercase letters (a-z).                                     |
| `useSymbols`               | boolean | `false`       | Include symbols (@#$%^&*()_+=<>?/|).                                 |
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

  - **Error Messages:**
    - "Invalid length. Length must be a positive number."
    - "Invalid length. Length must be less than or equal to 50."

- **Invalid Boolean Flags (useNumbers, useUppercase, useLowercase, useSymbols, excludeSimilarCharacters):**

  - **Error Message:** "It must be a boolean value."

- **Invalid Exclude:**

  - **Error Message:** "Invalid exclude. It must be a string."

- **Invalid Count:**

  - **Error Messages:**
    - "Invalid count. Count must be a positive number."
    - "Invalid count. Count must be less than or equal to 10."

- **Unwanted Properties:**

  - **Error Message:**
    - "Invalid prop(s): propName(s). Only the following options are allowed: length, useNumbers, useUppercase, useLowercase, useSymbols, excludeSimilarCharacters, exclude, count."

- **All Options False:**
  - **Error Message:** "At least one of the options must be true."

### Notes

- The function uses the built-in `crypto.getRandomValues()` for secure random number generation, ensuring the generated passwords are cryptographically secure.
- **Enhanced error handling** is built-in to validate input parameters and provide informative error messages.
- Use the `length` and `count` parameters wisely to generate strong, secure passwords suitable for your use case.
- The `exclude` parameter allows you to provide a string of characters that should not appear in the generated password.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests [here](https://github.com/shahadathhs/generate-password) on GitHub.
