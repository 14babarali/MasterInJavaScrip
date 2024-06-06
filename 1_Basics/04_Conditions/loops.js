// For loop
for (let i = 0; i < 5; i++) {
    console.log("Number: " + i); // Output: Number: 0, Number: 1, ..., Number: 4
}

// For-of loop
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit); // Output: apple, banana, orange
}

// For-in loop (useful for objects)
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]); // Output: name: John, age: 30, city: New York
}

// While loop
let count = 0;
while (count < 5) {
    console.log("Count: " + count); // Output: Count: 0, Count: 1, ..., Count: 4
    count++;
}

// Do-while loop
let num = 0;
do {
    console.log("Num: " + num); // Output: Num: 0, Num: 1, ..., Num: 4
    num++;
} while (num < 5);
