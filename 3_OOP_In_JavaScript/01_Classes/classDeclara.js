// Class declaration
class Person {
    // The constructor method is called when a new object is created
    constructor(name, age) {
        this.name = name; // Assigning the name property
        this.age = age;   // Assigning the age property
    }

    // Method to greet, demonstrating encapsulation of behavior
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the class
const person1 = new Person('Alice', 30);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
