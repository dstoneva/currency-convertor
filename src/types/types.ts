import currencyCodes from 'currency-codes'

/**
 * Interface representing the exchange rate cache structure.
 */
export interface ExchangeRateCache {
  [base: string]: {
    [date: string]: {
      [target: string]: number
    }
  }
}

/**
 * Type representing a valid ISO 4217 currency code.
 */
export type CurrencyCode = (typeof validCurrencyCodes)[number]

/**
 * Array of valid ISO 4217 currency codes.
 */
export const validCurrencyCodes: string[] = currencyCodes.codes()

export interface ConversionRecord {
  date: string
  amount: number
  base_currency: string
  target_currency: string
  converted_amount: number
}
