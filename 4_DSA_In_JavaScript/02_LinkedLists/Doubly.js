// Node class representing a node in a doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Reference to the next node
        this.prev = null; // Reference to the previous node
    }
}

// Doubly
// Linked list implementation
class DoublyLinkedList {
    constructor() {
        this.head = null; // Pointer to the head of the list
        this.tail = null; // Pointer to the tail of the list
    }


    // Method to add a new node to the end of the list
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

    // Method to display the linked list in forward direction
    displayForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Method to display the linked list in reverse direction
    displayBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

// Creating a doubly linked list and adding elements
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);

// Displaying the list in forward and backward directions
console.log("Forward:");
list.displayForward(); // Output: 1, 2, 3
console.log("Backward:");
list.displayBackward(); // Output: 3, 2, 1