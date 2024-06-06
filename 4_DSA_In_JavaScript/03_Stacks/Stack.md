# Stacks in JavaScript

## Overview
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the same end, known as the top. Stacks are commonly used in various programming scenarios, such as expression evaluation and function call management.

## Detailed Explanation
Stacks support two primary operations: push (adding an element to the top) and pop (removing the top element). Additional operations include peek (viewing the top element without removing it), isEmpty (checking if the stack is empty), and size (getting the number of elements in the stack).

## Code Example (Stack Implementation)
```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    display() {
        console.log(this.items);
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack elements:");
stack.display();

console.log("Top element:", stack.peek());

console.log("Pop:", stack.pop());
console.log("Stack elements after pop:");
stack.display();
