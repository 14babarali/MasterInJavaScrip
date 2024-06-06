// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function with default parameters
function greetWithDefault(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greetWithDefault()); // Output: Hello, Guest!
console.log(greetWithDefault("Bob")); // Output: Hello, Bob!
