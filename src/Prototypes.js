let person = { name: "Tony" };
Object.defineProperty(person, "name", {
  writable: false,
});
person.name = "John";
console.log(person);

// Inheritance

function Shape() {}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// inherit from Shape
Circle.prototype = Object.create(Shape.prototype);

const s = new Shape();
const c = new Circle();
console.log(c.duplicate());
