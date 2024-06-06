// Queue implementation using an array
class Queue {
    constructor() {
        this.items = []; // Array to store queue elements
    }

    // Method to enqueue an element into the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to dequeue an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; // Queue is empty
        }
        return this.items.shift();
    }

    // Method to peek the front element of the queue
    peek() {
        return this.items[0];
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the queue
    size() {
        return this.items.length;
    }

    // Method to display the queue elements
    display() {
        console.log(this.items);
    }
}

// Creating a queue and performing operations
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue elements:");
queue.display(); // Output: [1, 2, 3]

console.log("Front element:", queue.peek()); // Output: 1

console.log("Dequeue:", queue.dequeue()); // Output: 1
console.log("Queue elements after dequeue:");
queue.display(); // Output: [2, 3]
