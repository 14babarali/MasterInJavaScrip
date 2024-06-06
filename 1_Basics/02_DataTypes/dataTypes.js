let age = 30;
let pi = 3.14;
console.log(age); // Output: 30
console.log(pi); // Output: 3.14



let isActive = true;
console.log(isActive); // Output: true

// Null 
let emptyValue = null;
console.log(emptyValue); // Output: null


//Undefined
let notAssigned;
console.log(notAssigned); // Output: undefined


//Symbol
let sym = Symbol('unique');
console.log(sym); // Output: Symbol(unique)


// BigInt
let bigIntNumber = BigInt(9007199254740991);
console.log(bigIntNumber); // Output: 9007199254740991n

//Object

let person = {
    name: "John Doe",
    age: 30
};
console.log(person); // Output: { name: 'John Doe', age: 30 }


//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Function
function greet() {
    return "Hello, World!";
}
console.log(greet()); // Output: Hello, World!
// Now, let's go through the explanation and practice together.

// Primitive Data Types
// String: Used for textual data.
    // Number: Represents numeric values, including both integers and floating - point numbers.
        // Boolean: Represents logical values: true or false.
            // Null: Represents the intentional absence of any value.
                // Undefined: Indicates that a variable has been declared but has not yet been assigned a value.
    // Symbol: Represents a unique identifier(ES6 feature).
                    
                        // BigInt: Allows representation of integers beyond the safe integer limit for numbers(ES2020 feature).