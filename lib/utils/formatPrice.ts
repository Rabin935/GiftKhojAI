/**
 * Utility: Price Formatter
 * 
 * A simple helper function to consistently format numerical values into currency strings
 * (e.g., converting 1500 to 'Rs. 1,500') for display in the UI.
 */

export function formatPrice(priceStr: string): string {
  // Try to parse out numbers, or just return the raw string if it's already a range
  if (!priceStr) return "N/A";
  return priceStr.includes("NPR") ? priceStr : `${priceStr} NPR`;
}
