// Initialize the variable 'names' with a boolean value 'true'
var names = true;

// Print the value of 'names' to the console
console.log(names); // Output: true

// Print the type of the variable 'names' to the console
console.log(typeof (names)); // Output: boolean

// Assign a string value to the variable 'names'
names = "Babar Ali Assad";

// Print the type of the variable 'names' after reassignment
console.log(typeof (names)); // Output: string

// Print the new value of 'names' to the console
console.log(names); // Output: Babar Ali Assad

// Assign a number value to the variable 'names'
names = 23;

// Print the value of 'names' to the console
console.log(names); // Output: 23

// Print the type of the variable 'names' after reassignment
console.log(typeof (names)); // Output: number

/*
Additional Notes for Interview Preparation:

1. Dynamic Typing:
    - JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime and can change dynamically.
    - As seen in the example, the 'names' variable is first assigned a boolean, then a string, and finally a number. The type of 'names' is checked using 'typeof'.

2. Type Coercion:
    - Be aware of JavaScript's type coercion, where the language automatically converts types during operations. This can sometimes lead to unexpected results.
    - Example: console.log("5" + 5); // Output: "55" due to string concatenation.

3. Scope:
    - Understand the scope of variables. In the example, 'var' is used, which has function scope. Alternatives like 'let' and 'const' have block scope and can prevent certain types of bugs.

4. Best Practices:
    - Use 'let' and 'const' instead of 'var' to avoid issues related to hoisting and block scoping.
    - 'const' should be used for variables that won't be reassigned, while 'let' is suitable for those that will be.

5. Type Checking:
    - Use 'typeof' to check the type of a variable. This can help in debugging and ensuring that variables hold the expected types.
    - Example: typeof names === 'boolean' to check if 'names' is a boolean.

6. Common Errors:
    - Be aware of common pitfalls like trying to access properties of 'undefined' or 'null' values, which can throw errors.

7. Code Readability:
    - Commenting your code, as done in the example, improves readability and maintenance. This is particularly important in team environments.

8. Debugging:
    - Use 'console.log' effectively to debug and trace variable values and types through the execution of your code.
*/
