// Importing individual event handlers and calculation function
import { handleCarValueInput, handleCarValueBlur } from './inputHandlers/carValueHandler.js';
import { handleLeasePeriodInput, handleLeasePeriodBlur } from './inputHandlers/leasePeriodHandler.js';
import { handleDownPaymentInput } from './inputHandlers/downPaymentHandler.js';
import { handleCarTypeChange } from './inputHandlers/carTypeHandler.js';
import { calculateLease } from './calculations/calculateLease.js';

// Function to initialize event listeners and perform initial calculation
function initializeLeaseCalculator() {
    // Adding event listeners to relevant elements
    document.getElementById("carType").addEventListener("change", handleCarTypeChange);
    document.getElementById("carValueRange").addEventListener("input", handleCarValueInput);
    document.getElementById("carValue").addEventListener("blur", handleCarValueBlur);
    document.getElementById("leasePeriodRange").addEventListener("input", handleLeasePeriodInput);
    document.getElementById("leasePeriod").addEventListener("blur", handleLeasePeriodBlur);
    document.getElementById("downPayment").addEventListener("input", handleDownPaymentInput);

    // Performing initial calculation on page load
    calculateLease();
}

// Initializing the lease calculator after the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeLeaseCalculator);
