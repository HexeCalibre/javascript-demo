export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export function printFirstName(person) {
  console.log(`Person's first name is ${person.firstName}`);
}

export function printLastName(person) {
  console.log(`Person's first last is ${person.lastName}`);
}

// export default Person;
// export {printFirstName, printLastName}
