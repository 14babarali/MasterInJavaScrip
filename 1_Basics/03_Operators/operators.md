# Operators in JavaScript

## Introduction
Operators are used to perform operations on variables and values. JavaScript provides various types of operators.

## Types of Operators

### 1. Arithmetic Operators
Used to perform arithmetic on numbers.
- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulus (remainder)
- `++` : Increment
- `--` : Decrement

### 2. Assignment Operators
Used to assign values to variables.
- `=` : Assign
- `+=` : Add and assign
- `-=` : Subtract and assign
- `*=` : Multiply and assign
- `/=` : Divide and assign
- `%=` : Modulus and assign

### 3. Comparison Operators
Used to compare two values.
- `==` : Equal to
- `===` : Strict equal to
- `!=` : Not equal to
- `!==` : Strict not equal to
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

### 4. Logical Operators
Used to combine multiple conditions.
- `&&` : Logical AND
- `||` : Logical OR
- `!` : Logical NOT

### 5. Bitwise Operators
Used to perform bit-level operations.
- `&` : AND
- `|` : OR
- `^` : XOR
- `~` : NOT
- `<<` : Left shift
- `>>` : Right shift

### 6. Other Operators
- `typeof` : Returns the type of a variable
- `instanceof` : Checks if an object is an instance of a class or constructor function

## Examples

### Arithmetic Operators
```javascript
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
a++;
console.log(a); // Output: 11
b--;
console.log(b); // Output: 4
