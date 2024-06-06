// Encapsulation using private properties
class Car {
    #brand; // Private property

    constructor(brand, model) {
        this.#brand = brand;
        this.model = model;
    }

    getBrand() {
        return this.#brand;
    }

    setBrand(newBrand) {
        this.#brand = newBrand;
    }

    displayInfo() {
        console.log(`Car: ${this.#brand} ${this.model}`);
    }
}

const car1 = new Car('Toyota', 'Corolla');
car1.displayInfo(); // Output: Car: Toyota Corolla
console.log(car1.getBrand()); // Output: Toyota
car1.setBrand('Honda');
car1.displayInfo(); // Output: Car: Honda Corolla
