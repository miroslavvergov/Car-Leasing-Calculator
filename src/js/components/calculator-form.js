/**
 * Custom element representing a car leasing calculator form.
 * Renders HTML elements for input fields related to car leasing.
 */
class CalculatorForm extends HTMLElement {
    /**
     * Callback function invoked when the element is connected to the DOM.
     * Renders the leasing calculator form with input fields.
     */
    connectedCallback() {
        // Set inner HTML content to render the leasing calculator form.
        this.innerHTML = `
        <h1>Car Leasing Calculator</h1>
            <form id="leasingForm">
                <div>
                    <car-type></car-type>
                    <car-value></car-value>
                </div>
                <div>
                    <lease-period></lease-period>
                    <down-payment></down-payment>
                </div>
            </form>
        `;
    }
}

// Define the custom element 'calculator-form'.
customElements.define('calculator-form', CalculatorForm);
