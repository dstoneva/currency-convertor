import { existsSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { ConversionRecord } from '../types'

const filePath = path.join(process.cwd(), 'conversions.json')

/**
 * Saves a new conversion record to the JSON file.
 *
 * This function reads the existing conversion records from the JSON file,
 * appends the new conversion record, and writes the updated list back to the file.
 * If the file does not exist, it creates a new file with the conversion record.
 *
 * @param {ConversionRecord} conversion - The conversion record to save.
 */
export function saveConversion(conversion: ConversionRecord): void {
  let conversions: ConversionRecord[] = []
  if (existsSync(filePath)) {
    const data = readFileSync(filePath, 'utf-8')
    conversions = JSON.parse(data)
  }
  conversions.push(conversion)
  writeFileSync(filePath, JSON.stringify(conversions, null, 2))
}
