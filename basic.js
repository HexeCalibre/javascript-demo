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

console.log("\n ----------Arrays--------");

let avenger = "Captain America";
const avengers = ["Ironman", "Spiderman", "Thor", "Hulk"];
console.log(avengers);

let avengers2 = [];

console.log(`Array.isArray(avengers) ${Array.isArray(avengers)}`);
console.log(`Array.isArray(avenger) ${Array.isArray(avenger)}`);

console.log(`avengers[0] = ${avengers[0]}`);
console.log(`avengers[1] = ${avengers[1]}`);
console.log(`avengers[4] = ${avengers[4]}`);

console.log(`avengers.indexOf("Thor") = ${avengers.indexOf("Thor")}`);
console.log(
  `avengers.indexOf("Captain America") = ${avengers.indexOf("Captain America")}`
);

avengers.push("Captain America");
console.log(avengers);

avengers2.push("Thor");
avengers2.push("Ironman");
console.log(avengers2);

avengers.pop();
console.log(avengers);

avengers.splice(0, 1);
console.log(avengers);

let rawFullName = "Maria Ibarra Clara";
const myArray = rawFullName.split(" ");
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

let joinFullName = myArray.join(" ");
console.log(joinFullName);

let reverseArray = avengers.reverse();
console.log(reverseArray);

avengers.shift();
console.log(avengers);

avengers.unshift("Captain America");
console.log(avengers);

console.log("\n -----Operators");

let sum = 1 / 1;
console.log(`sum = 1 / 1 = ${sum}`);

let modulusValue = 21 % 2;
console.log(`modulus = ${modulusValue}`);

let exponent = 6 ** 2;
console.log(`exponent = ${exponent}`);

sum += 1; // sum = sum + 1
console.log(`sum += 1 = ${sum}`);

sum -= 1; // sum = sum - 1
console.log(`sum -= 1 = ${sum}`);

sum++; // sum = sum + 1
console.log(`sum++ = ${sum}`);

sum--; // sum = sum - 1
console.log(`sum-- = ${sum}`);

console.log(`++sum = ${++sum}`);

console.log(`sum++ = ${sum++}`);

console.log(`sum = ${sum}`);

const array = ["value1", "value2"];
let index = 0;

array[index++]; //array[0]
array[index]; //array[1]

console.log("\n -----If Statement");

let grade = "100";

if (grade == 100) {
  console.log("You have a perfect grade");
} else if (grade >= 90) {
  console.log("You got a high grade");
} else if (grade < 90 && grade > 80) {
  console.log("You got a average grade");
} else if (grade >= 80 || grade > 70) {
  console.log("You got a low grade");
} else console.log("Keep studying...");

if (grade === 100) {
  console.log("You have a perfect grade");
} else console.log("Keep studying...");

console.log("\n -----Object Literals");

const myCar = {
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
};

console.log(myCar.brand);
console.log(myCar.specifications.transmission);
console.log(myCar.colors[0]);

console.log("\n -----Object Literals Array");

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

console.log(myCars[0].model);
console.log(myCars[1].model);

console.log("\n -----Loops");

console.log("\n -----For Loops");
for (let i = 0; i < 10; i++) {
  console.log(`i = ${i}`);
}

for (let i = 0; i < myCars.length; i++) {
  console.log(`myCars[i].model = ${myCars[i].model}`);
}

for (let i = myCars.length - 1; i >= 0; i--) {
  console.log(`myCars[i].model = ${myCars[i].model}`);
}

console.log("\n -----While Loops");

let stop = false;
let i = 0;
while (!stop) {
  console.log("Keep Looping While");

  if (myCars.length <= i) {
    stop = true;
  }

  i++;
}

i = 0;
do {
  console.log("Keep Looping Do While ");
  i++;
} while (i < 5);

console.log("\n Looping in arrays");
for (let car of myCars) {
  console.log(car.model);
}
