
// Creating and Accessing Objects
console.log('Creating and Accessing Objects:');
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30

// Modifying Objects
console.log('Modifying Objects:');
person.age = 35;
person['city'] = "San Francisco";
console.log(person); // Output: { name: "John", age: 35, city: "San Francisco" }

// Adding New Properties
console.log('Adding New Properties:');
person.gender = "Male";
person['occupation'] = "Software Engineer";
console.log(person); // Output: { name: "John", age: 35, city: "San Francisco", gender: "Male", occupation: "Software Engineer" }

// Object Methods
console.log('Object Methods:');
let personWithMethod = {
    name: "John",
    age: 30,
    greet: function () {
        return "Hello, my name is " + this.name;
    }
};
console.log(personWithMethod.greet()); // Output: Hello, my name is John

console.log('Object examples are successfully executed');
