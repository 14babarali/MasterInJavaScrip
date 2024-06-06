// Stack implementation using an array
class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Method to push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Method to pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Stack is empty
        }
        return this.items.pop();
    }

    // Method to peek the top element of the stack
    peek() {
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the stack
    size() {
        return this.items.length;
    }

    // Method to display the stack elements
    display() {
        console.log(this.items);
    }
}

// Creating a stack and performing operations
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack elements:");
stack.display(); // Output: [1, 2, 3]

console.log("Top element:", stack.peek()); // Output: 3

console.log("Pop:", stack.pop()); // Output: 3
console.log("Stack elements after pop:");
stack.display(); // Output: [1, 2]
