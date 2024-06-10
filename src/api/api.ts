import axios from 'axios'
import config from '../config.json'

const apiKey: string = config.api_key
const baseUrl = 'https://api.fastforex.io/historical'

/**
 * Fetches the exchange rate from the base currency to the target currency for a specific date.
 *
 * @param {string} date - The date in format YYYY-MM-DD.
 * @param {string} base - The ISO 4217 currency code of the base currency.
 * @param {string} target - The ISO 4217 currency code of the target currency.
 * @returns {Promise<number>} - A promise that resolves to the exchange rate between the base and target currency.
 * @throws {Error} - Throws an error if the API request fails.
 */
export async function getExchangeRate(date: string, base: string, target: string): Promise<number> {
  try {
    const response = await axios.get(`${baseUrl}?date=${date}&from=${base}&to=${target}&api_key=${apiKey}`)
    return response.data.results[target]
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.error || error.message}`)
    } else {
      console.error('Unexpected error:', error)
      throw new Error(`Unexpected Error: ${(error as Error).message}`)
    }
  }
}
