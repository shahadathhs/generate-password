# generate-password

`generate-password` is a customizable, lightweight, and secure password generator library for JavaScript and TypeScript. It allows you to generate random passwords with various options such as length, inclusion of numbers, symbols, uppercase, lowercase letters, and excluding similar characters.

## Installation

Install the package using npm or yarn:

```bash
npm install generate-password
```

or

```bash
yarn add generate-password
```

## Usage

### Importing the Function

```typescript
import { generatePasswordWithOptions } from 'generate-password';
```

### Example Usage

```typescript
import { generatePasswordWithOptions } from 'generate-password';

const password = generatePasswordWithOptions({
  length: 12,
  useNumbers: true,
  useUppercase: true,
  useLowercase: true,
  useSymbols: false,
  excludeSimilarCharacters: true,
});

console.log('Generated Password:', password);
```

### Parameters

The `generatePasswordWithOptions` function takes an object with the following properties:

| Parameter               | Type    | Description                                                                                   |
|-------------------------|---------|-----------------------------------------------------------------------------------------------|
| `length`                | number  | The length of the password to generate.                                                        |
| `useNumbers`            | boolean | Include numeric characters (0-9).                                                              |
| `useUppercase`          | boolean | Include uppercase letters (A-Z).                                                               |
| `useLowercase`          | boolean | Include lowercase letters (a-z).                                                               |
| `useSymbols`            | boolean | Include symbols (@#$%^&*()_+=<>?/|).                                                           |
| `excludeSimilarCharacters` | boolean | Exclude similar characters (e.g., 'i', 'l', '1', 'o', '0').                                    |

### Example Configurations

1. **Simple password with lowercase and numbers:**

   ```typescript
   const password = generatePasswordWithOptions({
     length: 8,
     useNumbers: true,
     useUppercase: false,
     useLowercase: true,
     useSymbols: false,
     excludeSimilarCharacters: false,
   });
   console.log(password); // Example output: "abc3d5f9"
   ```

2. **Complex password with all options enabled:**

   ```typescript
   const password = generatePasswordWithOptions({
     length: 16,
     useNumbers: true,
     useUppercase: true,
     useLowercase: true,
     useSymbols: true,
     excludeSimilarCharacters: true,
   });
   console.log(password); // Example output: "A#kM@4p*J!h2X&b7"
   ```

### Notes

- The function uses the built-in `crypto.getRandomValues` for secure random number generation.
- Ensure all options are provided to generate a valid password.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

