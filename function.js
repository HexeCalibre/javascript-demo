console.log("\n-------Inefficient code");

let x = 100;
let y = 200;

console.log(`sum =  ${x + y}`);

x = 500;
y = 600;

console.log(`sum =  ${x + y}`);

x = 400;
y = 500;

console.log(`sum =  ${x + y}`);

console.log("\n----------Using function");

function getSum(a, b) {
  //ten lines codes...
  console.log(`sum =  ${a + b}`);
}

getSum(500, 500);
getSum(400, 400);
getSum(300, 300);

function greet() {
  //ten lines codes...
  console.log("Hello");
}

greet();

function displayProfile(name, age = 20) {
  console.log(`Name = ${name} Age = ${age}`);
}

displayProfile("Juan Dela Cruz", 30);

console.log("\n----------Saving function in variable");

const myFunction = function (name) {
  console.log(`My name is ${name}`);
};

myFunction("Juan Dela Cruz");

function callBack(f) {
  f("Juan Dela Cruz");
}

callBack(myFunction);

console.log("\n----------Pass by value and Pass by reference");

let pvalue = 10;

function passByValue(value) {
  value = 11;
}

passByValue(pvalue);
//codes

console.log(`pValue equls ${pvalue}`);

let pReference = {
  x: 10,
  y: 11,
};

function passByReference(obj) {
  obj.x = 11;
}

passByReference(pReference);

console.log(`pReference equls ${pReference.x}`);

console.log("\n------------Foreach");

const myCars = [
  {
    brand: "Toyota",
    model: "Innova",
    year: 2024,
    colors: ["red", "black", "blue"],
    specifications: {
      displacement: "1.5 liters",
      cylinder: 3,
      transmission: "manual",
      horsepower: 100,
      torque: "200 nm",
    },
  },
  {
    brand: "Toyota",
    model: "Veluz",
    year: 2024,
    colors: ["white", "black", "blue"],
    specifications: {
      displacement: "1.5 liters",
      cylinder: 3,
      transmission: "automatic",
      horsepower: 120,
      torque: "250 nm",
    },
  },
];

console.log("Foreach Named function");
function logCar(car) {
  console.log(car.model);
}
myCars.forEach(logCar);

console.log("Foreach Anonymous function");
myCars.forEach(function (car) {
  console.log(car.model);
});

console.log("\n-------------MAP");

const carMap = myCars.map(function (c) {
  return `<td> ${c.brand} </td> <td> ${c.model} </td> <td> ${c.colors} </td>`;
});

console.log("\n-------------FILTER");

const carFilter = myCars.filter(function (c) {
  return c.model == "Veluz";
}); //return myCars model is Veluz

console.log(carFilter);

const carFilterMap = myCars
  .filter(function (c) {
    return c.model == "Veluz";
  }) //return myCars model is Veluz
  .map(function (c) {
    return `<td> ${c.brand} </td> <td> ${c.model} </td> <td> ${c.colors} </td>`;
  }); // Veluz data mapped here

console.log(carFilterMap);

console.log("\n-------------SPREAD OPERATOR");

function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(10, 11, 12));

let numbers = [10, 11, 12];
console.log(sum(...numbers));

let parts = ["shoulder", "knees"];
let song = ["head", ...parts, "and", "toes"];

console.log(song);

let personObject = {
  name: "Juan Dela Cruz",
  age: 20,
};

let customerObject = {
  address: "123 Main Street",
};

let combineObject = { ...personObject, ...customerObject };

console.log("\ncombine object");
console.log(combineObject);

console.log("\n---------DESTRUCTURING");
const vehicle = ["mustang", "ferrari", "lamborghini"];

// let v1 = vehicle[0];
// let v2 = vehicle[1];
// let v3 = vehicle[3];

// const [v1, v2, v3] = vehicle;
const [v1, v2] = vehicle;

console.log(`${v1} ${v2}`);
// console.log(`${v1} ${v2} ${v3}`);

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  year: 2024,
};

const { brand, model, year } = vehicleOne;

console.log(brand);
console.log(model);
console.log(year);

console.log("\n---------Arrow function");

//Traditional function
function getTotal(x, y) {
  return x + y;
}

const getTotalArrowFunction = (x, y) => x + y;

console.log(getTotalArrowFunction(1, 2));
