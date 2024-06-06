

// ** Concept **: Encapsulation restricts direct access to some of an object's components, which can be achieved using private properties and methods.

// `oopin-javascript/encapsulation/privateProperties.js`
// ```javascript
// Class with encapsulation using private properties
class Car {
    // Private property
    #brand;

    constructor(brand, model) {
        this.#brand = brand; // Private property
        this.model = model;  // Public property
    }

    // Getter method for private property
    getBrand() {
        return this.#brand;
    }

    // Setter method for private property
    setBrand(newBrand) {
        this.#brand = newBrand;
    }

    // Method to display car information
    displayInfo() {
        console.log(`Car: ${this.#brand} ${this.model} `);
    }
}

const car1 = new Car('Toyota', 'Corolla');
car1.displayInfo(); // Output: Car: Toyota Corolla
console.log(car1.getBrand()); // Output: Toyota
car1.setBrand('Honda');
car1.displayInfo(); // Output: Car: Honda Corolla
