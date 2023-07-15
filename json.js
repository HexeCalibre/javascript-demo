let = guests = [
  {
    firstName: "Juan",
    lastName: "Dela Cruz",
    age: 20,
    isVIP: true,
    cars: ["Ferrari", "Lamborghini", "Mustang"],
    visitors: [
      {
        name: "Visitor1",
        age: 25,
        isVIP: true,
        cars: ["Honda", "Toyota"],
      },
      {
        name: "Visitor2",
        age: 25,
        isVIP: true,
        cars: ["Honda", "Toyota"],
      },
    ],
  },

  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    isVIP: true,
    cars: ["Ferrari", "Lamborghini", "Mustang"],
    visitors: [
      {
        name: "Visitor1",
        age: 25,
        isVIP: false,
        cars: ["Mitsubishi", "Toyota"],
      },
      {
        name: "Visitor2",
        age: 25,
        isVIP: false,
        cars: [],
      },
    ],
  },
];

let jsonStr = JSON.stringify(guests);
console.log(typeof jsonStr);

let jsonObj = JSON.parse(jsonStr);
console.log(typeof jsonObj);
console.log(jsonObj[0].firstName);
