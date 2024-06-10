
# Currency Converter CLI

A CLI application for converting currencies using historical exchange rates.

## Features

- Convert currency amounts based on historical exchange rates.
- Cache exchange rates to minimize API calls.
- Continuously validate user inputs.
- Save successful conversions to a JSON file.
- Terminate the application by typing 'END' at any input prompt.

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dstoneva/currency-convertor.git
   cd currency-convertor
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `config.json` file in the root of the project and add your Fast Forex API key:

   **config.json**:
   ```json
   {
     "api_key": "your_api_key_here"
   }
   ```

## Scripts

- `npm run build`: Compile the TypeScript code.
- `npm run lint`: Run ESLint to check for linting errors.

## Usage

Start the application by running:

```bash
npx ts-node src/CurrencyConversion.ts YYYY-MM-DD
```

Replace `YYYY-MM-DD` with the desired date.

**Note**: The historical data is limited to 14 days during the trial period of the Fast Forex API.

The application will prompt you for the following inputs:

1. **Amount**: The amount of money to convert (e.g., `10.23`).
2. **Base Currency**: The ISO 4217 currency code of the base currency (e.g., `USD`).
3. **Target Currency**: The ISO 4217 currency code of the target currency (e.g., `EUR`).

You can terminate the application at any prompt by typing `END`.

### Example

```bash
npx ts-node src/CurrencyConversion.ts 2024-06-01

# Amount
10.23

# Base Currency
USD

# Target Currency
EUR

# Output
10.23 USD is 9.52 EUR
```

### Project structure

- **api/**: Contains the module for fetching exchange rates from the Fast Forex API.
- **cache/**: Contains the module for caching exchange rates.
- **handlers/**: Contains modules for handling application tasks (e.g., file operations, input validation, currency conversion).
- **types/**: Contains TypeScript type definitions.
- **validation/**: Contains input validation functions.
- **index.ts**: Exports modules for easier imports in other parts of the application.
- **CurrencyConversion.ts**: The main application script.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
