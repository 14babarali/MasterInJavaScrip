
// for Loop
console.log('for Loop:');
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}

// while Loop
console.log('while Loop:');
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0 1 2 3 4
    i++;
}

// do...while Loop
console.log('do...while Loop:');
i = 0;
do {
    console.log(i); // Output: 0 1 2 3 4
    i++;
} while (i < 5);

// for...in Loop
console.log('for...in Loop:');
const person = { fname: "John", lname: "Doe", age: 25 };
for (let key in person) {
    console.log(key + ": " + person[key]); // Output: fname: John lname: Doe age: 25
}

// for...of Loop
console.log('for...of Loop:');
const iterable = [10, 20, 30];
for (let value of iterable) {
    console.log(value); // Output: 10 20 30
}

console.log('Loop examples are successfully executed');
