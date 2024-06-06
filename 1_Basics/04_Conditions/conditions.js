
// if Statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult."); // Output: You are an adult.
}

// if...else Statement
age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor."); // Output: You are a minor.
}

// if...else if...else Statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

console.log('Condition examples are successfully executed');
