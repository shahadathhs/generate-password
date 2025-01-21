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
| -------------------------- | ------- | ------------- | -------------------------------------------------------------------- | --- |
| `length`                   | number  | `8`           | The length of the password to generate.                              |
| `useNumbers`               | boolean | `true`        | Include numeric characters (0-9).                                    |
| `useUppercase`             | boolean | `true`        | Include uppercase letters (A-Z).                                     |
| `useLowercase`             | boolean | `true`        | Include lowercase letters (a-z).                                     |
| `useSymbols`               | boolean | `false`       | Include symbols (@#$%^&\*()\_+=<>?/                                  | ).  |
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
     useSymbols: false
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
     excludeSimilarCharacters: true
   })
   console.log(password) // Example output: "A#kM@4p*J!h2X&b7"
   ```

3. **Multiple passwords generation:**

   ```typescript
   const passwords = generatePassword({
     length: 10,
     useNumbers: true,
     useUppercase: true,
     useLowercase: true,
     useSymbols: false,
     count: 3
   })
   console.log(passwords) // Example output: ["Ab9f3D5kZ1", "J8lMn2Qk9P", "Xa9kL6o4Wb"]
   ```

4. **Password with excluded specific characters:**

   ```typescript
   const password = generatePassword({
     length: 10,
     useNumbers: true,
     useUppercase: true,
     useLowercase: true,
     exclude: 'aeiou' // Exclude vowels
   })
   console.log(password) // Example output: "B5TnWrXb6P"
   ```


### ***Error Handling***
The `generatePassword` function includes enhanced error handling to ensure the generated passwords are secure and meet your requirements. If an error occurs during password generation, the function will throw an error with a descriptive message.
Here are some common error scenarios and their corresponding error messages:
- **Invalid Input Parameters:**
  - **Error Message:** `Invalid input parameters. Please check the provided parameters.`
  - **Description:** This error occurs when the provided input parameters are invalid or do not meet the required criteria.


### Notes

- The function uses the built-in `crypto.getRandomValues()` for secure random number generation, ensuring the generated passwords are cryptographically secure.
- **Enhanced error handling** is built-in to validate input parameters and provide informative error messages.
- Use the `length` and `count` parameters wisely to generate strong, secure passwords suitable for your use case.
- The `exclude` parameter allows you to provide a string of characters that should not appear in the generated password.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
Github: https://github.com/shahadathhs/generate-password-in-client-side
