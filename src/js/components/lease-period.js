/**
 * Custom element representing a lease period input.
 * Renders HTML elements for specifying the lease period in months.
 */
class LeasePeriod extends HTMLElement {
  /**
   * Callback function invoked when the element is connected to the DOM.
   * Renders the lease period input.
   */
  connectedCallback() {
      // Set inner HTML content to render the lease period input.
      this.innerHTML = `
          <label for="leasePeriod">Lease Period (months):</label>
          <input type="number" id="leasePeriod" min="12" max="60" value="36" />
          <input type="range" id="leasePeriodRange" min="12" max="60" step="12" value="36" />
      `;
  }
}

// Define the custom element 'lease-period'.
customElements.define('lease-period', LeasePeriod);
