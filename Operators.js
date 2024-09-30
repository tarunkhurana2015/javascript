let x = 10;
let y = 3;

console.log(++x);
console.log(x);

// strict equality operator (type + value)
console.log(x === 10);
console.log(x !== 10);

// loose equality operator (value)
console.log(10 == 10);
console.log("10" == 10);

// Ternary operator

let hello = 100 > 101 ? "hello" : "hi";

// Logical operators

// Falsy - Truthy

let userColor = undefined;
let defaultcolor = "blue";
let currentColor = userColor || defaultcolor;
