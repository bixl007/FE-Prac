function sum(a, b) {
  return a + b;
}

let c = sum(10, 22);

console.log(c);

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Xyz"));

const greet1 = (name) => {
  return "Hello " + name;
};

console.log(greet1("Ramesh"));

let greet2 = function (name) {
  return "Hello " + name;
};

console.log(greet2("Suresh"));

// Callback function
function add(a, b, callback) {
  return callback(a, b);
}

let result = add(10, 20, function (a, b) {
  return a + b;
});

(function Xyz(name) {
  console.log("Hey " + name);
})("John");

