

// Creating and Accessing Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log('Creating and Accessing Arrays:');
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Modifying Arrays
console.log('Modifying Arrays:');
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Array Properties and Methods
console.log('Array Properties and Methods:');

// Length
console.log(fruits.length); // Output: 3

// push
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

// pop
fruits.pop();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// shift
fruits.shift();
console.log(fruits); // Output: ["Blueberry", "Cherry"]

// unshift
fruits.unshift("Apricot");
console.log(fruits); // Output: ["Apricot", "Blueberry", "Cherry"]

// indexOf
console.log(fruits.indexOf("Blueberry")); // Output: 1

// splice
fruits.splice(1, 1, "Banana");
console.log(fruits); // Output: ["Apricot", "Banana", "Cherry"]

// slice
let newFruits = fruits.slice(1, 2);
console.log(newFruits); // Output: ["Banana"]

// concat
let moreFruits = fruits.concat(["Date", "Elderberry"]);
console.log(moreFruits); // Output: ["Apricot", "Banana", "Cherry", "Date", "Elderberry"]

console.log('Array examples are successfully executed');
