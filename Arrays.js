let cart = ["red", "blue"];
cart[2] = "green";
cart[3] = 1;
console.log(cart);
console.log(cart.length);

const numbers = [3, 4];
numbers.push(5, 6);
console.log(numbers);
numbers.unshift(1);
console.log(numbers);
numbers.splice(2, 0, "a", "b");
console.log(numbers);

numbers.indexOf("a");

// arrow fucntions
const array1 = [5, 12, 8, 130, 44];
var found = array1.find((num) => {
  num > 10;
});
console.log(found);

// combine using spread

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

// iterate an array
array1.forEach((num) => console.log(num));

// filter
let data = array1.filter((number) => number > 100);
console.log(data);

// map
let mapped = array1.map((number) => number * 10);
console.log(mapped);

// reduce
let reduced = array1.reduce((acc, value) => acc + value);
console.log(reduced);

//
const movies = [
  { title: "a", year: 2008, rating: 4.5 },
  { title: "b", year: 2008, rating: 4.5 },
  { title: "c", year: 2008, rating: 4.5 },
  { title: "d", year: 2007, rating: 4.5 },
];
