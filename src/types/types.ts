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

