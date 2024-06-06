// Polymorphism using method overriding
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
    console.log(shape.area()); // Output: 314.1592653589793 and 50
});
