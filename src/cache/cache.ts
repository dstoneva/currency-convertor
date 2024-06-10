import { ExchangeRateCache } from 'types'

const cache: ExchangeRateCache = {}

/**
 * Retrieves a cached exchange rate for a given date and currency pair.
 *
 * @param {string} date - The date in format YYYY-MM-DD.
 * @param {string} base - The ISO 4217 currency code of the base currency.
 * @param {string} target - The ISO 4217 currency code of the target currency.
 * @returns {number | undefined} - The cached exchange rate, or undefined if not found.
 */
export function getCachedRate(date: string, base: string, target: string): number | undefined {
  return cache[date]?.[base]?.[target]
}

/**
 * Caches the exchange rate for a given date and currency pair.
 *
 * @param {string} date - The date in format YYYY-MM-DD.
 * @param {string} base - The ISO 4217 currency code of the base currency.
 * @param {string} target - The ISO 4217 currency code of the target currency.
 * @param {number} rate - The exchange rate to cache.
 */
export function setCachedRate(date: string, base: string, target: string, rate: number): void {
  if (!cache[date]) {
    cache[date] = {}
  }
  if (!cache[date][base]) {
    cache[date][base] = {}
  }
  cache[date][base][target] = parseFloat(rate.toFixed(6))
  console.log(cache, 'cache')
}
