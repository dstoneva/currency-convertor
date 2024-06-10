import { getExchangeRate } from '../api'
import { getCachedRate, setCachedRate } from '../cache'

/**
 * Converts the given amount from the base currency to the target currency using the specified date.
 *
 * @param {string} date - The date in format YYYY-MM-DD for which to fetch the exchange rate.
 * @param {number} amount - The amount in the base currency to be converted.
 * @param {string} baseCurrency - The ISO 4217 currency code of the base currency.
 * @param {string} targetCurrency - The ISO 4217 currency code of the target currency.
 * @returns {Promise<number>} - A promise that resolves to the converted amount in the target currency.
 * @throws {Error} - Throws an error if the API request fails.
 */
export async function convertCurrency(
  date: string,
  amount: number,
  baseCurrency: string,
  targetCurrency: string,
): Promise<number> {
  let rate = getCachedRate(date, baseCurrency, targetCurrency)
  if (rate === undefined) {
    rate = await getExchangeRate(date, baseCurrency, targetCurrency)
    setCachedRate(date, baseCurrency, targetCurrency, rate)
  }
  return parseFloat((amount * rate).toFixed(2))
}
