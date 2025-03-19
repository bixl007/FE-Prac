let car = {
  name: "Maruti",
  model: "800",
  color: "red",
  start: function () {
    console.log("Car is starting");
  },
};

car.start();
console.log(car.name);
console.log(car.model);
console.log(car.color);
console.log(Object.keys(car));
console.log(Object.values(car));

for (let key in car) {
  console.log(key, car[key]);
}

// For each loop
Object.keys(car).forEach((key) => {
  console.log(key, car[key]);
});


// Math object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(4.7));
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.7));
console.log(Math.abs(-4.7));
console.log(Math.min(4, 5, 6, 7, 8));
console.log(Math.max(4, 5, 6, 7, 8));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

// Date object
let today = new Date();
console.log(today);
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleString());
