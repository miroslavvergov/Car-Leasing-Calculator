import { validateLeasePeriod } from "../validation/leasePeriodValidation.js";
import { calculateLease } from "../calculations/calculateLease.js";

/**
 * Function to handle input changes in the lease period input field.
 * Updates the input value and invokes the calculateLease function.
 */
export function handleLeasePeriodInput() {
  const leasePeriodInput = document.getElementById("leasePeriod");
  const leasePeriodRange = document.getElementById("leasePeriodRange");

  leasePeriodInput.value = leasePeriodRange.value;
  calculateLease();
}

/**
 * Function to handle blur events in the lease period input field.
 * Validates the input value, updates it if necessary, and invokes the calculateLease function.
 */
export function handleLeasePeriodBlur() {
  const leasePeriodInput = document.getElementById("leasePeriod");
  const leasePeriodRange = document.getElementById("leasePeriodRange");

  // Validate lease period input and adjust if necessary.
  if (!validateLeasePeriod(leasePeriodInput.value)) {
    leasePeriodInput.value = Math.max(12, Math.min(leasePeriodInput.value, 60));
    leasePeriodRange.value = leasePeriodInput.value;
  }

  calculateLease();
}
