# Linked Lists in JavaScript

## Overview
Linked lists are linear data structures consisting of nodes where each node contains a data field and a reference to the next node. They offer dynamic memory allocation and efficient insertion and deletion operations.

## Code Explanation
In the provided example:
- The `Node` class represents a node in a singly linked list with a `data` field and a reference to the `next` node.
- The `LinkedList` class implements a singly linked list with methods to append new nodes and display the list.
- An instance of the linked list is created, and elements are appended to it.

## Code
```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.display();
