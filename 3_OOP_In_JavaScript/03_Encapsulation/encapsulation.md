# Encapsulation in JavaScript

## Overview
Encapsulation is a concept in object-oriented programming that restricts access to certain components of an object and can be achieved using private properties and methods.

## Code Explanation
In the provided example:
- The `Car` class has a private property `#brand` and a public property `model`.
- Getter and setter methods are provided to access and modify the private property.
- The `displayInfo` method displays the car's information, showing how private and public properties can be used together.

## Code
```javascript
class Car {
    #brand;

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
car1.displayInfo();
console.log(car1.getBrand());
car1.setBrand('Honda');
car1.displayInfo();
