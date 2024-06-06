// Function expression
const greet = function (name) {
    return "Hello, " + name + "!";
};

console.log(greet("Bob")); // Output: Hello, Bob!

// Arrow function (ES6)
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};

console.log(greetArrow("Charlie")); // Output: Hello, Charlie!

// Concise arrow function
const greetConcise = name => "Hello, " + name + "!";

console.log(greetConcise("David")); // Output: Hello, David!
