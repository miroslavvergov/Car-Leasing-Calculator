# Car Leasing Calculator (Vanilla JS)

This is a simple web application for calculating leasing costs for cars. It is built using vanilla JavaScript and utilizes modules and custom components to provide a clean and organized structure.

## Features

- Allows users to input parameters such as car type, car value, lease period, and down payment.
- Calculates leasing details including total cost, monthly installment, down payment, and interest rate.
- Validates user inputs to ensure they are within acceptable ranges.

## Formulas Used

### Total Leasing Cost
The total leasing cost is calculated using the formula:


### Monthly Installment
The monthly installment is calculated using the formula for an annuity payment:

Monthly Installment = (Amount Financed * Monthly Interest Rate) / (1 - (1 + Monthly Interest Rate)^-Lease Period)


Where:
- `Amount Financed` is the car value minus the down payment.
- `Monthly Interest Rate` is the annual interest rate divided by 12.
- `Lease Period` is the total number of months for the lease.

### Down Payment
The down payment is calculated as a percentage of the car value.

## Usage

1. Open `index.html` in a web browser.
2. Fill in the required information:
   - Car Type (New or Used)
   - Car Value (€10,000 - €200,000)
   - Lease Period (12 - 60 months, in increments of 12)
   - Down Payment (10% - 50% of car value)
3. The application will automatically calculate and display the leasing details.

## Directory Structure

.
├── index.html           # Main HTML file
├── style.css            # CSS styles for the application
├── js/
|   ├── app.js           # Main JavaScript file including all module imports
|   ├── components/      # JavaScript modules for custom elements
|   |   ├── car-type.js
|   |   ├── car-value.js
|   |   ├── lease-period.js
|   |   ├── down-payment.js
|   |   ├── leasing-results.js
|   |   └── calculator-form.js
|   ├── inputHandlers/   # JavaScript modules for input event handlers
|   |   ├── carTypeHandler.js
|   |   ├── carValueHandler.js
|   |   ├── leasePeriodHandler.js
|   |   └── downPaymentHandler.js
|   ├── calculations/    # JavaScript modules for calculations
|   |   └── calculateLease.js
|   └── validation/      # JavaScript modules for input validation
|       ├── carValueValidation.js
|       └── leasePeriodValidation.js
└── README.md            # Documentation for the application


## Technology Stack

- **JavaScript:** Vanilla JavaScript is used for the application logic.
- **Modules:** ES6 modules are utilized for modular code organization.
- **Components:** Custom elements and components are implemented for the user interface.

