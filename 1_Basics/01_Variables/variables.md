# Variables in JavaScript

## Introduction
Variables are containers for storing data values. In JavaScript, we can declare variables using `var`, `let`, or `const`.

## var
- **Scope**: Function scoped.
- **Re-declaration**: Can be re-declared and updated.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope.

## let
- **Scope**: Block scoped.
- **Re-declaration**: Cannot be re-declared in the same scope but can be updated.
- **Hoisting**: Variables declared with `let` are hoisted to the top of their block but are not initialized.

## const
- **Scope**: Block scoped.
- **Re-declaration**: Cannot be updated or re-declared in the same scope.
- **Hoisting**: Variables declared with `const` are hoisted to the top of their block but are not initialized.

## Examples
```javascript
// var example
var x = 10;
console.log(x); // Output: 10

// let example
let y = 20;
console.log(y); // Output: 20

// const example
const z = 30;
console.log(z); // Output: 30


