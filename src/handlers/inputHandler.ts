import readlineSync from 'readline-sync'
import { validateInput } from '../validation'

/**
 * Generalized function to get and validate user input.
 *
 * @param {string} inputType - The type of input for constructing the error message and validation: 'amount', 'currency', 'date'.
 * @returns {Promise<string | null>} - The validated user input or null if 'end' is typed.
 */
export async function getValidatedInput(inputType: string): Promise<string | null> {
  const input = readlineSync.question('')
  if (input.toLowerCase() === 'end') return null
  if (validateInput(input, inputType)) {
    return input.toUpperCase()
  } else {
    console.log(`Please enter a valid ${inputType}`)
    return getValidatedInput(inputType)
  }
}

export default getValidatedInput
