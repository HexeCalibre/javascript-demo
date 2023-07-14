// let text =
//   "The quick brown fox jumps over the lazy dog. Then the fox spat the Cat ran down the street searching for something to eat.";

// let text = "juandelacruz@email.com";
let text = "02-63-917853919";
let regEx = /(?<countrycode>\d{2})-(\d{2})-(\d{9})/g;

console.log("\n---------------Match");

let arr = text.match(regEx);
console.log(arr);

console.log("\n---------------MatchAll");

let textMatches = text.matchAll(regEx);
let arr2 = Array.from(textMatches, (m) => m);
console.log(arr2[0]);

console.log("\n-------Country Code");

console.log("\n---------------Test");
console.log(regEx.test(text));

console.log("\n---------------Search");
console.log(text.search(regEx));
