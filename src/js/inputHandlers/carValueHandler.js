import { validateCarValue } from '../validation/carValueValidation.js';
import { calculateLease } from '../calculations/calculateLease.js';

/**
 * Function to handle input changes in the car value input field.
 * Updates the input value and invokes the calculateLease function.
 */
export function handleCarValueInput() {
  const carValueInput = document.getElementById("carValue");
  const carValueRange = document.getElementById("carValueRange");
  carValueInput.value = carValueRange.value;
  calculateLease();
}

/**
 * Function to handle blur events in the car value input field.
 * Validates the input value, updates it if necessary, and invokes the calculateLease function.
 */
export function handleCarValueBlur() {
  const carValueInput = document.getElementById("carValue");
  const carValueRange = document.getElementById("carValueRange");
  let carValue = parseFloat(carValueInput.value);

  // Validate car value input and adjust if necessary.
  if (!validateCarValue(carValue)) {
    carValueInput.value = Math.max(10000, Math.min(carValue, 200000));
    carValueRange.value = carValueInput.value;
  }

  calculateLease();
}
