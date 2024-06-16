/**
 * Custom element representing a car value input.
 * Renders HTML elements for specifying the value of the car.
 */
class CarValue extends HTMLElement {
  /**
   * Callback function invoked when the element is connected to the DOM.
   * Renders the car value input.
   */
  connectedCallback() {
      // Set inner HTML content to render the car value input.
      this.innerHTML = `
      <div id="divCarValue">
          <label for="carValue">Car Value (€10,000 - €200,000):</label>
          <input type="number" id="carValue" min="10000" max="200000" value="100000" />
          <input type="range" id="carValueRange" min="10000" max="200000" step="1000" value="100000" />
      </div>
      `;
  }
}

// Define the custom element 'car-value'.
customElements.define('car-value', CarValue);
