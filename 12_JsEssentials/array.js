let fruit = ["apple", "banana", "orange", "grapes", "mango"];
console.log(fruit);
console.log(fruit[0]);

let number = new Array(1, 2, 3, 4, 5);
console.log(number);

console.log(number.length);
console.log(number.indexOf(3));

number.push(6);
console.log(number);

number.pop();
console.log(number);

number.shift();
console.log(number);

number.unshift(0);
console.log(number);

let vegetables = ["tomato", "potato", "onion"];
vegetables.splice(1, 1, "brinjal");
console.log(vegetables);
