import { CurrencyCode, validCurrencyCodes } from '../types'

const dateRegex = /^\d{4}-\d{2}-\d{2}$/
const amountRegex = /^\d+(\.\d{1,2})?$/

/**
 * Validates the input based on the specified type.
 *
 * @param {string} input - The input string to validate.
 * @param {string} type - The type of validation to perform: 'date', 'amount', or 'currency'.
 * @returns {boolean} - True if the input is valid, false otherwise.
 */
export function validateInput(input: string, type: string): boolean {
  switch (type) {
    case 'date': {
      return dateRegex.test(input)
    }
    case 'amount': {
      const amount = parseFloat(input)
      return amountRegex.test(input) && !isNaN(amount) && amount > 0
    }
    case 'currency': {
      return validCurrencyCodes.includes(input.toUpperCase() as CurrencyCode)
    }
    default: {
      throw new Error(`Unknown validation type: ${type}`)
    }
  }
}
