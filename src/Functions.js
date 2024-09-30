function great(name) {
  console.log("hello " + name);
}

great("John");

// fucntion declaration
function square(number) {
  return number * number;
}
square(2);

// Function expression
let run = function () {
  // fucntion are object
  console.log("run");
};
run();
let move = run;
move();

// hoisting - javascrip engine places the functiona declaration on top of the file.

// arguments
function SubmitEvent() {
  let total = 0;
  arguments.array.forEach((element) => {
    total += element;
  });
  console.log(arguments);
  return a + b;
}

function sum(...args) {}

// default value
function interest(principal, rate = 3.5, years = 5) {}
interest(100, (years = 10));

// getters setters

const person = {
  firstName: "tony",
  lastName: "ku",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    try {
      const parts = value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    } catch {}
  },
};
console.log(person.fullName);
person.fullName = "";

// Try/ Catch

// var/ let
// var is accessible within the fucntion scope

// defining the var object in the global space attches the object to the windows object.
const video = {
  title: "a",
  tags: [1, 2, 3],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};

video.showTags();
