// alert("Hello World!");

// ----Console functions----
// console.log("Hello World!");
// console.warn("warning message");
// console.debug("debug message");
// console.dir();
// console.error("error message");

console.log("\n----Variables-----");

var firstName = "Juan";
var lastName = "Dela Cruz";

var firstName = "John";

console.log(firstName);
console.log(lastName);

let fName = "John";
let lName = "Doe";

fName = "Jose";
lName = "Rizal";

console.log(fName);
console.log(lName);

const address = "Malacanang";
//address = "White House"; //error here

console.log("\n----Data Types-----");

const fullName = "Juan Dela Cruz"; //String
const age = 20; // Number Integer
const weight = 88.1; // Number float or decimal
const isOverweight = true; //true or false
const undef = undefined;
const nullValue = null;

console.log("\nData Type typeof");

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof weight);
console.log(typeof isOverweight);
console.log(typeof undef);
console.log(typeof nullValue);

console.log("\nString Manipulation");

console.log("\nOld Style string concatenation");
let speech = "My name is " + fullName + " i am " + age + " years old";
console.log(speech);

console.log("\nString Interpolation");
speech = `My name is ${fullName} i am ${age} years old`;
console.log(speech);

console.log("\nString Method");

let car = "Ferrari";

console.log(`length = ${car.length}`);
console.log(`charAt(0) = ${car.charAt(0)}`);
console.log(`charAt(1) = ${car.charAt(1)}`);
console.log(`indexOf("F") = ${car.indexOf("F")}`);
console.log(`indexOf("e") = ${car.indexOf("e")}`);

console.log(`indexOf("r") = ${car.indexOf("r")}`);
console.log(`lastIndexOf("r") = ${car.lastIndexOf("r")}`);

console.log(`slice(0, 3) = ${car.slice(0, 3)}`);
console.log(`slice(1, 3) = ${car.slice(1, 3)}`);
console.log(`slice(1) = ${car.slice(1)}`);
console.log(`slice() = ${car.slice()}`);

console.log(
  `car.slice(0, car.indexOf("r")) = ${car.slice(0, car.indexOf("r") + 1)}`
);

let newCar = car.concat(" ", "Aventador");
console.log(`concat(" ", "Aventador") = ${newCar}`);

console.log(
  `replace("Aventador", "Roma") = ${newCar.replace("Aventador", "Roma")}`
);

let phoneNumber = "123 123 123 123";
console.log(`replace(" ", "-") = ${phoneNumber.replace(" ", "-")}`);
console.log(`replaceAll(" ", "-") = ${phoneNumber.replaceAll(" ", "-")}`);

console.log(`toLowerCase = ${car.toLowerCase()}`);
console.log(`toUpperCase = ${car.toUpperCase()}`);
