
This example demonstrates the implementation of a doubly linked list with methods to append new nodes and display the list in both forward and backward directions.

#### README.md
Let's create a README.md file for the `doubly-linked-lists` section to provide an overview of doubly linked lists, explanation of the data structure, and the code example with detailed comments.

```markdown
# Doubly Linked Lists in JavaScript

## Overview
Doubly linked lists are linear data structures consisting of nodes, where each node contains a data field and references to the next and previous nodes. They support bidirectional traversal, allowing efficient insertion and deletion operations in both forward and backward directions.

## Detailed Explanation
Each node in a doubly linked list contains two pointers: one pointing to the next node and another pointing to the previous node. This bidirectional linkage facilitates traversal and manipulation of the list in both forward and backward directions.

## Code Example (Doubly Linked List)
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    displayForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    displayBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log("Forward:");
list.displayForward();
console.log("Backward:");
list.displayBackward();
