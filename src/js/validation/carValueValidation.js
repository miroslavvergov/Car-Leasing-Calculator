/**
 * Function to validate the car value input.
 * Checks if the provided car value is a valid number within the specified range.
 * Displays an alert message if the value is invalid.
 * 
 * @param {number} carValue - The car value to be validated.
 * @returns {boolean} True if the car value is valid, false otherwise.
 */
export function validateCarValue(carValue) {
  if (isNaN(carValue) || carValue < 10000 || carValue > 200000) {
    alert("Car value must be between €10,000 and €200,000.");
    return false;
  }
  return true;
}
