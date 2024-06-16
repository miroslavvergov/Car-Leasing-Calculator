/**
 * Custom element representing a down payment input.
 * Renders HTML elements for specifying the down payment percentage.
 */
class DownPayment extends HTMLElement {
  /**
   * Callback function invoked when the element is connected to the DOM.
   * Renders the down payment input.
   */
  connectedCallback() {
      // Set inner HTML content to render the down payment input.
      this.innerHTML = `
          <label for="downPayment">Down Payment (10% - 50%):</label>
          <input type="number" id="downPaymentDisplay" min="10" max="50" step="5" value="10" readonly/>
          <input type="range" id="downPayment" min="10" max="50" step="5" value="10" />
      `;
  }
}

// Define the custom element 'down-payment'.
customElements.define('down-payment', DownPayment);
