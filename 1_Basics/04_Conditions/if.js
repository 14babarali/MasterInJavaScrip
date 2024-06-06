// If statement
let score = 85;
if (score > 80) {
    console.log("Excellent!"); // Output: Excellent!
}

// If-else statement
let temperature = 30;
if (temperature > 35) {
    console.log("It's hot!");
} else {
    console.log("It's comfortable."); // Output: It's comfortable.
}

// If-else-if statement
let grade = 'B';
if (grade === 'A') {
    console.log("Outstanding!");
} else if (grade === 'B') {
    console.log("Good job!"); // Output: Good job!
} else if (grade === 'C') {
    console.log("You passed!");
} else {
    console.log("Keep trying!");
}

// Switch statement
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana is good!");
        break;
    case "apple":
        console.log("Apple is healthy!"); // Output: Apple is healthy!
        break;
    case "orange":
        console.log("I like oranges!");
        break;
    default:
        console.log("Unknown fruit!");
}
