# Classes in JavaScript

## Overview
A class is a blueprint for creating objects. It encapsulates data with code to work on that data. Classes in JavaScript can contain properties and methods.

## Code Explanation
In the provided example:
- The `Person` class is defined with a constructor method to initialize the properties `name` and `age`.
- The `greet` method is defined to return a greeting message.
- An instance of the `Person` class is created, and the `greet` method is called to display a message.

## Code
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person('Alice', 30);
console.log(person1.greet());
