
// #### 4. Polymorphism

// ** Concept **: Polymorphism allows methods to do different things based on the object it is acting upon.

// ##### `oopin-javascript/polymorphism/methodOverriding.js`
// ```javascript
// Base class
class Shape {
    // Base method to calculate area
    area() {
        return 0;
    }
}

// Derived class Circle
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Overriding the base class method
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Derived class Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Overriding the base class method
    area() {
        return this.width * this.height;
    }
}

// Array of shapes
const shapes = [new Circle(10), new Rectangle(5, 10)];

// Iterating through the shapes and calculating area
shapes.forEach(shape => {
    console.log(shape.area()); // Output: 314.1592653589793 and 50
});
