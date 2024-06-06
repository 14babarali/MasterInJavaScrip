# Arrays in JavaScript

## Overview
Arrays are a fundamental data structure in JavaScript used to store elements at contiguous memory locations. They provide various operations for manipulation, such as insertion, deletion, and access.

## Code Explanation
In the provided example:
- An array `arr` is initialized with elements `[1, 2, 3, 4, 5]`.
- Various array manipulation operations like accessing elements, inserting at the end and beginning, and removing from the end and beginning are demonstrated.

## Code
```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr[0]);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
