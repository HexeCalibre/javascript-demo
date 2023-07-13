import Person, { Person2, printFirstName, printLastName } from "./person.js";

let p = new Person("Juan", "Dela Cruz");
let p2 = new Person2("John", "Doe");

console.log(p.fullName);
console.log(p2.fullName);

printFirstName(p);
printLastName(p);
