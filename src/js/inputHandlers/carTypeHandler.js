import { calculateLease } from '../calculations/calculateLease.js';

/**
 * Function to handle changes in the car type selection.
 * Invokes the calculateLease function to recalculate leasing details.
 */
export function handleCarTypeChange() {
  calculateLease();
}
