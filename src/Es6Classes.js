const { func } = require("joi");

// class declaration
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {};
  }

  // instance method
  draw() {
    console.log("draw");
  }

  // static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = new Circle(1);
console.log(c);

const c1 = Circle.parse('{"radius": 5}');
console.log(c1);

// class expression
const Square = class {};

// Hoisting
sayHello();
// Function declaration
function sayHello() {}

// function expression (No hoisted)
const sayGoodbye = function () {};
const number = 1;
