/**
 * Function to format a numerical value as Euros.
 * Uses the Intl.NumberFormat API to format the amount as currency in Euro (€).
 * 
 * @param {number} amount - The numerical value to be formatted.
 * @returns {string} The formatted amount in Euro currency.
 */
export function formatEuro(amount) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}
