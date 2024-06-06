
//  2. Inheritance

// ** Concept **: Inheritance is a mechanism for one class to inherit the properties and methods of another class.

// ##### `oopin-javascript/inheritance/prototypeInheritance.js`
// ```javascript
// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method in the base class
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Derived class that inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    // Method overriding the base class method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog('Rex', 'German Shepherd');
dog1.speak(); // Output: Rex barks.
