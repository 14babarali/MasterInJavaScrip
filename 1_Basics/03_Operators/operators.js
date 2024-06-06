


// Arithmetic Operators
let a = 10;
let b = 5;
console.log('Arithmetic Operators:');
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
a++;
console.log(a); // Output: 11
b--;
console.log(b); // Output: 4

// Assignment Operators
let x = 10;
console.log('Assignment Operators:');
x += 5; // x = x + 5
console.log(x); // Output: 15
x -= 3; // x = x - 3
console.log(x); // Output: 12
x *= 2; // x = x * 2
console.log(x); // Output: 24
x /= 4; // x = x / 4
console.log(x); // Output: 6
x %= 3; // x = x % 3
console.log(x); // Output: 0

// Comparison Operators
let c = 10;
let d = 20;
console.log('Comparison Operators:');
console.log(c == d); // Output: false
console.log(c === d); // Output: false
console.log(c != d); // Output: true
console.log(c !== d); // Output: true
console.log(c > d); // Output: false
console.log(c < d); // Output: true
console.log(c >= d); // Output: false
console.log(c <= d); // Output: true

// Logical Operators
let e = true;
let f = false;
console.log('Logical Operators:');
console.log(e && f); // Output: false
console.log(e || f); // Output: true
console.log(!e); // Output: false

// Bitwise Operators
let g = 5; // 0101 in binary
let h = 3; // 0011 in binary
console.log('Bitwise Operators:');
console.log(g & h); // Output: 1 (0001 in binary)
console.log(g | h); // Output: 7 (0111 in binary)
console.log(g ^ h); // Output: 6 (0110 in binary)
console.log(~g); // Output: -6 (inverts the bits)
console.log(g << 1); // Output: 10 (1010 in binary)
console.log(g >> 1); // Output: 2 (0010 in binary)

// Other Operators
let str = "Hello";
console.log('Other Operators:');
console.log(typeof str); // Output: string

class Person { }
let person = new Person();
console.log(person instanceof Person); // Output: true

console.log('Operator examples are successfully executed');
