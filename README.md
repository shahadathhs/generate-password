# generate-password-in-client-side

`generate-password-in-client-side` is a customizable, lightweight, and secure password generator library for JavaScript and TypeScript. It allows you to generate random passwords with various options such as length, inclusion of numbers, symbols, uppercase, lowercase letters, and excluding similar characters.

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
import { generatePassword } from 'generate-password-in-client-side';
```

### Example Usage

```typescript
import { generatePassword } from 'generate-password-in-client-side';

const password = generatePassword({
  length: 12,
  useNumbers: true,
  useUppercase: true,
  useLowercase: true,
  useSymbols: false,
  excludeSimilarCharacters: true,
  exclude: "abc", // Optionally exclude specific characters
});

console.log('Generated Password:', password);
```

### Parameters

The `generatePassword` function takes an object with the following properties:

| Parameter                    | Type    | Default Value | Description                                                                                   |
|------------------------------|---------|---------------|-----------------------------------------------------------------------------------------------|
| `length`                     | number  | `8`           | The length of the password to generate.                                                        |
| `useNumbers`                 | boolean | `true`        | Include numeric characters (0-9).                                                              |
| `useUppercase`               | boolean | `true`        | Include uppercase letters (A-Z).                                                               |
| `useLowercase`               | boolean | `true`        | Include lowercase letters (a-z).                                                               |
| `useSymbols`                 | boolean | `false`       | Include symbols (@#$%^&*()_+=<>?/|).                                                           |
| `excludeSimilarCharacters`   | boolean | `false`       | Exclude visually similar characters (e.g., 'i', 'l', '1', 'o', '0').                           |
| `exclude`                    | string  | `""`          | Exclude specific characters from the generated password. (default is an empty string)         |

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
     exclude: "",
   });
   console.log(password); // Example output: "abc3d5f9"
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
     exclude: "",
   });
   console.log(password); // Example output: "A#kM@4p*J!h2X&b7"
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
     exclude: "aeiou", // Exclude vowels
   });
   console.log(password); // Example output: "B5Tn%rW6!p0"
   ```

### Notes

- The function uses the built-in `crypto.getRandomValues()` for secure random number generation, ensuring the generated passwords are cryptographically secure.
- Ensure to adjust the `length` and other parameters according to your needs for valid and strong passwords.
- The `exclude` parameter allows you to provide a string of characters that should not appear in the generated password.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

