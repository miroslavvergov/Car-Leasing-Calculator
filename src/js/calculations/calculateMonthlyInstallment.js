/**
 * Function to calculate the monthly installment for a financed amount.
 * 
 * @param {number} amountFinanced - The total amount financed.
 * @param {number} interestRate - The annual interest rate (in decimal form, e.g., 0.05 for 5%).
 * @param {number} leasePeriod - The total number of lease periods (e.g., months).
 * @returns {number} The calculated monthly installment.
 */
export function calculateMonthlyInstallment(amountFinanced, interestRate, leasePeriod) {
  // Calculate the monthly interest rate by dividing the annual interest rate by 12.
  const monthlyInterestRate = interestRate / 12;

  // Calculate the monthly installment using the formula for loan or lease payments.
  const monthlyInstallment =
    (amountFinanced * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -leasePeriod));

  // Return the calculated monthly installment.
  return monthlyInstallment;
}
