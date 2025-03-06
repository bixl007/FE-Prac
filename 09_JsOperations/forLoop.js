for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

let x = 0;
while (x < 5) {
  console.log(x++);
}

let i = 0;

do {
  console.log(i++);
} while (i < 5);
