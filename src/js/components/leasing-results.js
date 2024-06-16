/**
 * Custom element representing leasing results.
 * Renders HTML elements to display leasing details.
 */
class LeasingResults extends HTMLElement {
    /**
     * Callback function invoked when the element is connected to the DOM.
     * Renders the leasing results display.
     */
    connectedCallback() {
        // Set inner HTML content to render the leasing results.
        this.innerHTML = `
            <div id="results" class="hidden">
                <h2>Leasing Details</h2>
                <div class="results-container">
                    <div class="leftColumn">
                        <div>
                            <strong>Total Leasing Cost:</strong>
                            <span id="leasingCost"></span>
                        </div>
                        <div>
                            <strong>Down Payment:</strong>
                            <span id="downPaymentResult"></span>
                        </div>
                    </div>
                    <div class="rightColumn">
                        <div>
                            <strong>Monthly Installment:</strong>
                            <span id="monthlyInstallment"></span>
                        </div>
                        <div>
                            <strong>Interest Rate:</strong>
                            <span id="interestRate"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Define the custom element 'leasing-results'.
customElements.define('leasing-results', LeasingResults);
