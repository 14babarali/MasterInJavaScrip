// Using abstract class concept with base class
class Employee {
    constructor(name, age, position) {
        if (this.constructor === Employee) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // Abstract method
    work() {
        throw new Error("Abstract method 'work' must be implemented");
    }

    getDetails() {
        return `${this.name}, ${this.age} years old, works as a ${this.position}.`;
    }
}

// Derived class
class Developer extends Employee {
    constructor(name, age, position, programmingLanguage) {
        super(name, age, position);
        this.programmingLanguage = programmingLanguage;
    }

    // Implementing the abstract method
    work() {
        return `${this.name} is writing code in ${this.programmingLanguage}.`;
    }
}

const dev1 = new Developer('John', 25, 'Developer', 'JavaScript');
console.log(dev1.getDetails()); // Output: John, 25 years old, works as a Developer.
console.log(dev1.work()); // Output: John is writing code in JavaScript.
