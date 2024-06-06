
// #### 2. Linked Lists

// **Concept**: Linked lists are linear data structures where elements are stored in nodes. Each node contains a data field and a reference to the next node.

// ##### `dsa-in-js/linked-lists/singlyLinkedList.js`
// ```javascript
// Node class representing a node in a singly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly linked list implementation
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the list
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

    // Method to display the linked list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Creating a linked list and adding elements
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.display(); // Output: 1, 2, 3
