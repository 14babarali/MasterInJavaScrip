# Queues in JavaScript

## Overview
A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front. Queues are commonly used in various programming scenarios, such as task scheduling and breadth-first search.

## Detailed Explanation
Queues support two primary operations: enqueue (adding an element to the rear) and dequeue (removing the front element). Additional operations include peek (viewing the front element without removing it), isEmpty (checking if the queue is empty), and size (getting the number of elements in the queue).

## Code Example (Queue Implementation)
```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    peek() {
        return this.items[0];
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

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue elements:");
queue.display();

console.log("Front element:", queue.peek());

console.log("Dequeue:", queue.dequeue());
console.log("Queue elements after dequeue:");
queue.display();
