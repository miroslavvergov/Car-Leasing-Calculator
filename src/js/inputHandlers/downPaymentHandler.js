import { calculateLease } from '../calculations/calculateLease.js';

/**
 * Function to handle input changes in the down payment input field.
 * Updates the display value and invokes the calculateLease function.
 */
export function handleDownPaymentInput() {
  const downPaymentRange = document.getElementById("downPayment");
  const downPaymentDisplay = document.getElementById("downPaymentDisplay");
  
  downPaymentDisplay.value = downPaymentRange.value;
  calculateLease();
}
