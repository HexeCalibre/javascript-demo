console.log("\n-------------Functional Code");

let firstName = "";
let lastName = "";
let currentAge = 0;

function getFullName() {
  return `${firstName} ${lastName}`;
}

firstName = "Juan";
lastName = "Dela Cruz";
currentAge = 20;

console.log(getFullName());

firstName = "John";
lastName = "Doe";
currentAge = 23;

console.log(getFullName());

console.log("\n-------------Class");

class Person {
  constructor(firstName, lastName, age) {
    console.log("constructor called");

    //Public Properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //method
  getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

let p = new Person("Juan", "Dela Cruz", 20); //instantiation
console.log(p.getFullName());
console.log(p.firstName);
console.log(p.lastName);
console.log(p.age);

let p2 = new Person("John", "Doe", 23);
console.log(p2.getFullName());

console.log("\n------------------Abstraction");

class House {
  vips = [];
  visitors = [];

  constructor(address, price) {
    this.address = address;
    this.price = price;
  }

  enterVisitor(person) {
    let fullName = person.getFullName();

    if (fullName.toLowerCase() == "iron man") {
      this.vips.push(person);
    } else {
      this.visitors.push(person);
    }
  }
}

let house1 = new House("123 Main Street Manila", 2000000);
let ironMan = new Person("Iron", "Man", 20);
let juan = new Person("Juan", "Dela Cruz", 20);
let john = new Person("John", "Doe", 21);

house1.enterVisitor(ironMan);
house1.enterVisitor(juan);
house1.enterVisitor(john);

//Backdoor
let davy = new Person("Davy", "Yabut", 25);
house1.vips.push(davy);

console.log("VIPS");
console.log(house1.vips);
console.log("VISITORS");
console.log(house1.visitors);

console.log("\n------------------Encapsulation");

class SafeHouse {
  #vips = [];
  #visitors = [];

  #address = "";
  #price = 0;

  constructor(address, price) {
    this.#address = address;
    this.#price = price;
  }

  enterVisitor(person) {
    let fullName = person.getFullName();

    if (fullName.toLowerCase() == "iron man") {
      this.#vips.push(person);
    } else {
      this.#visitors.push(person);
    }
  }

  get address() {
    return this.#address;
  }

  set address(currentAddress) {
    this.#address = currentAddress;
  }

  // get visitors() {
  //   let r = [];

  //   for (let v of this.#visitors) {
  //     r.push(v);
  //   }

  //   return r;
  // }
}

let safeHouse1 = new SafeHouse("123 Main Street Manila", 2000000);
safeHouse1.enterVisitor(ironMan);
safeHouse1.enterVisitor(juan);
safeHouse1.enterVisitor(john);

console.log("VIPS");
console.log(safeHouse1.vips);
console.log("VISITORS");
console.log(safeHouse1.visitors);
console.log("address");

safeHouse1.address = "New York City";
console.log(safeHouse1.address);

console.log("\n-------------Inheritance");
class Engineer extends Person {
  constructor(firstName, lastName, age, salary, company) {
    super(firstName, lastName, age);
    this.salary = salary;
    this.company = company;
  }

  getFullName() {
    return `Engr. ${firstName} ${lastName}`;
  }
}

console.log("\n-------------Protected");

class Employee {
  constructor(firstName, lastName, age, salary, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this._salary = salary;
    this.company = company;
  }
}

class Programmer extends Employee {
  constructor(firstName, lastName, age, salary, company) {
    super(firstName, lastName, age, salary, company);

    this._salary = 20000;
  }
}

let programmer = new Programmer("davy", "yabut", 20, 10000, "kodego");
programmer._salary = 20000;

console.log("---------------Polymorphism----------");

class Doctor extends Person {
  constructor(firstName, lastName, age, position, salary, company) {
    super(firstName, lastName, age);
    this.position = position;
    this.salary = salary;
    this.company = company;
  }

  getFullName() {
    return `Dr. ${this.firstName} ${this.lastName}`;
  }
}

function printFullName(p) {
  console.log(p.getFullName());
}

let person = new Person("Juan", "Dela Cruz", 20);
let doctor = new Doctor("Jose", "Rizal", 10000, "hero", 50000, "n/a");
let engr = new Engineer("Alvin", "Castor", 10000, "lead", 50000, "n/a");

console.log("printFullName");

printFullName(person);
printFullName(doctor);
printFullName(engr);
