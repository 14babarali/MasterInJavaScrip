// Closure example
//Closures are a powerful feature in JavaScript where an inner function
// has access to its outer function's variables.
//  This is possible even after the outer function has executed
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Output:
// Outer Variable: outside
// Inner Variable: inside

// Another example with counter
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
