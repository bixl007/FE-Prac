let x = 10;
const y = 20;

console.log(x + y);

var a = 10;
console.log(a);

let name = "John";
console.log(name);
let age = 20;
console.log(age);
let isAdult = age >= 18;

if (isAdult) {
  console.log("Adult");
} else {
  console.log("Not Adult");
}

const n = null;
console.log(n);

let person = {
  name: "John",
  age: 20,
  isAdult: true,
};

console.log(person);
console.log(person.name);
console.log(person.age);


// write a program to find the check whether to find the grade for a+ a b+ b c+ c d+ d f
function getGrade(score) {
    if (score >= 90) {
        return 'A+';
    } else if (score >= 80) {
        return 'A';
    } else if (score >= 75) {
        return 'B+';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 65) {
        return 'C+';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D+';
    } else if (score >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}

let score = 85;
console.log(`The grade for score ${score} is ${getGrade(score)}`);