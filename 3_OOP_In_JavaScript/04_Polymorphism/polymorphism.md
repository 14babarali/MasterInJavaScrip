# Polymorphism in JavaScript

## Overview
Polymorphism allows methods to do different things based on the object it is acting upon. It is a key concept in object-oriented programming that enables objects to be treated as instances of their parent class.

## Code Explanation
In the provided example:
- The `Shape` class has a base method `area`.
- The `Circle` and `Rectangle` classes extend `Shape` and override the `area` method to provide specific calculations for their shapes.
- An array of shapes is created, and the overridden `area` method is called for each shape, demonstrating polymorphism.

## Code
```javascript
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(10), new Rectangle(5, 10)];
shapes.forEach(shape => {
    console.log(shape.area());
});
