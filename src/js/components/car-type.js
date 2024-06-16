/**
 * Custom element representing a car type selection input.
 * Renders HTML elements for selecting the type of car (new or used).
 */
class CarType extends HTMLElement {
  /**
   * Callback function invoked when the element is connected to the DOM.
   * Renders the car type selection input.
   */
  connectedCallback() {
      // Set inner HTML content to render the car type selection input.
      this.innerHTML = `
      <div id="divCarType">
        <label for="carType">Car Type:</label>
        <select id="carType">
            <option value="new">Brand New</option>
            <option value="used">Used</option>
        </select>
      </div>

      <style>
        #divCarType {
          margin-bottom: 100px;
        }
      </style>
        `;
  }
}

// Define the custom element 'car-type'.
customElements.define("car-type", CarType);
