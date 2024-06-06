// Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Hello, my name is " + this.name;
    }
}

// Creating Objects
let person1 = new Person("John", 30);
console.log(person1.greet()); // Output: Hello, my name is John

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return this.name + " is studying.";
    }
}

// Using Inherited Methods
let student1 = new Student("Alice", 25, "A");
console.log(student1.greet()); // Output: Hello, my name is Alice
console.log(student1.study()); // Output: Alice is studying.
