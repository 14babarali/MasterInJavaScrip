// Function Declaration and Call
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice")); // Output: Hello, Alice

// Function with Parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20

// Function Expression
const square = function (x) {
    return x * x;
};
console.log(square(4)); // Output: 16

// Arrow Function
const divide = (a, b) => {
    return a / b;
};
console.log(divide(10, 2)); // Output: 5

console.log('Function examples are successfully executed');
