import { formatEuro } from '../utils/formatEuro.js';
import { calculateMonthlyInstallment } from './calculateMonthlyInstallment.js';

/**
 * Function to calculate leasing costs based on user input.
 * Retrieves user input from HTML elements, calculates leasing costs,
 * and displays the results.
 */
export function calculateLease() {
  // Retrieve HTML elements for user input and result display.
  const carTypeSelect = document.getElementById("carType");
  const carValueInput = document.getElementById("carValue");
  const leasePeriodInput = document.getElementById("leasePeriod");
  const downPaymentRange = document.getElementById("downPayment");
  const resultsDiv = document.getElementById("results");

  // Extract user input values.
  const carType = carTypeSelect.value;
  let carValue = parseFloat(carValueInput.value);
  let leasePeriod = parseInt(leasePeriodInput.value);
  const downPaymentPercent = parseFloat(downPaymentRange.value);

  // Determine interest rate based on the selected car type.
  const interestRate = (carType === "new") ? 0.0299 : 0.037;

  // Calculate the down payment amount.
  const downPayment = (downPaymentPercent / 100) * carValue;

  // Calculate the amount financed for the lease.
  const amountFinanced = carValue - downPayment;

  // Calculate the monthly installment using the imported function.
  const monthlyInstallment = calculateMonthlyInstallment(amountFinanced, interestRate, leasePeriod);

  // Calculate the total leasing cost over the lease period.
  const totalCost = downPayment + (monthlyInstallment * leasePeriod);

  // Display results in HTML elements formatted as Euros.
  document.getElementById("leasingCost").textContent = formatEuro(totalCost);
  document.getElementById("downPaymentResult").textContent = formatEuro(downPayment);
  document.getElementById("monthlyInstallment").textContent = formatEuro(monthlyInstallment);
  document.getElementById("interestRate").textContent = (interestRate * 100).toFixed(2) + "%";

  // Make the results section visible.
  resultsDiv.classList.remove("hidden");
}
