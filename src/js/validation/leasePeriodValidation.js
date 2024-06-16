/**
 * Function to validate the lease period input.
 * Checks if the provided lease period is a valid number within the specified range and increments.
 * Displays an alert message if the value is invalid.
 * 
 * @param {number} leasePeriod - The lease period to be validated.
 * @returns {boolean} True if the lease period is valid, false otherwise.
 */
export function validateLeasePeriod(leasePeriod) {
  if (isNaN(leasePeriod) || leasePeriod < 12 || leasePeriod > 60 || leasePeriod % 12 !== 0) {
    alert("Lease period must be between 12 and 60 months, in increments of 12.");
    return false;
  }
  return true;
}
