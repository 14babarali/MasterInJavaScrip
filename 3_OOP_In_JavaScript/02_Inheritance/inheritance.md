# Inheritance in JavaScript

## Overview
Inheritance allows one class to inherit the properties and methods of another class. This enables code reusability and hierarchical classification.

## Code Explanation
In the provided example:
- The `Animal` class is the base class with a constructor to initialize the `name` property and a `speak` method.
- The `Dog` class extends `Animal`, inheriting its properties and methods.
- The `Dog` class constructor calls the parent class constructor using `super(name)`.
- The `Dog` class overrides the `speak` method to provide specific behavior.

## Code
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog('Rex', 'German Shepherd');
dog1.speak();
