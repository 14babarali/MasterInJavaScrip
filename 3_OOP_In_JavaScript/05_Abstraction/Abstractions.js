
// #### 5. Abstraction

// ** Concept **: Abstraction hides the complex implementation details and shows only the necessary features of an object.

// ##### `oopin-javascript/abstraction/abstractClass.js`
// ```javascript
// Abstract base class
class Employee {
    constructor(name, age, position) {
        if (this.constructor === Employee) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // Abstract method
    work() {
        throw new Error("Abstract method 'work' must be implemented");
    }

// Method to get details of the employee
// getDetails()
