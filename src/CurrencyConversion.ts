import { convertCurrency, getValidatedInput, saveConversion } from './handlers'
import { ConversionRecord } from './types'
import { validateInput } from './validation'

/**
 * Main function to run the currency conversion application.
 *
 * The function reads a date from the command line arguments, validates it,
 * and then enters a loop to continuously accept inputs for amount, base currency,
 * and target currency. It converts the amount using the specified date's exchange rate,
 * displays the result, and saves the conversion record to a JSON file.
 */
async function main() {
  const date: string | null = process.argv[2]

  if (!date || !validateInput(date, 'date')) {
    console.log('Invalid or missing date. Please provide a valid date in the format YYYY-MM-DD.')
    return
  }

  let amountStr: string | null = await getValidatedInput('amount')
  while (amountStr !== null) {
    const amount = parseFloat(amountStr)

    const baseCurrency = await getValidatedInput('currency')
    if (baseCurrency === null) break

    const targetCurrency = await getValidatedInput('currency')
    if (targetCurrency === null) break

    try {
      const convertedAmount = await convertCurrency(date, amount, baseCurrency, targetCurrency)
      console.log(
        `\x1b[1m${amount.toFixed(2)} ${baseCurrency} is ${convertedAmount.toFixed(2)} ${targetCurrency}\x1b[0m`,
      )

      const conversion: ConversionRecord = {
        date,
        amount,
        base_currency: baseCurrency,
        target_currency: targetCurrency,
        converted_amount: convertedAmount,
      }

      saveConversion(conversion)
    } catch (error) {
      console.error('Error during conversion:', error)
    }

    amountStr = await getValidatedInput('amount')
  }
}

main().catch(error => console.error('An unexpected error occurred:', (error as Error).message))
