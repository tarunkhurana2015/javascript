const { func } = require("joi");

// Object-oriented programming (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};
circle.draw(); // method call.

// FActory Function
function createCircle(radius, location) {
  return {
    radius,
    draw() {
      console.log("draw - " + radius);
    },
  };
}

const circle1 = createCircle(10);
console.log(circle1.draw());
const circle2 = createCircle(20);
console.log(circle2.draw());

// Constructio fucntions
// pascal notation
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw" + radius);
  };
}
const circle3 = new Circle(30);
console.log(circle3.draw());

// referece types

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);

// for-in/ for-of
const circle11 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle11) console.log(key, circle11[key]);
for (let key of Object.keys(circle11)) console.log(key);

// copy object
const another = Object.assign(
  {
    color: "yellow",
  },
  circle11
);
console.log(another);
// spread operator
const another1 = { ...circle11 };
console.log(another1);

let address = {
  street: "a",
  city: "b",
  zip: "c",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
