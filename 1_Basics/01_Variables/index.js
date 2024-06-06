// Declaring a variable with var
var name = "John";
console.log(name); // Output: John

// Redeclaring a variable with var
var name = "Jane";
console.log(name); // Output: Jane

// Declaring a variable with let
let age = 25;
console.log(age); // Output: 25

// let allows reassignment but not redeclaration
age = 26;
console.log(age); // Output: 26
// let age = 30; // Error: Identifier 'age' has already been declared

// Declaring a constant with const
const pi = 3.14;
console.log(pi); // Output: 3.14

// const does not allow reassignment or redeclaration
// pi = 3.14159; // Error: Assignment to constant variable
// const pi = 3.14159; // Error: Identifier 'pi' has already been declared

// Scope differences

// var is function-scoped
function varTest() {
    var x = 1;
    if (true) {
        var x = 2; // same variable
        console.log(x); // Output: 2
    }
    console.log(x); // Output: 2
}
varTest();

// let and const are block-scoped
function letConstTest() {
    let y = 1;
    const z = 1;
    if (true) {
        let y = 2; // different variable
        const z = 2; // different variable
        console.log(y); // Output: 2
        console.log(z); // Output: 2
    }
    console.log(y); // Output: 1
    console.log(z); // Output: 1
}
letConstTest();
