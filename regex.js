// let text =
//   "The quick brown fox jumps over the lazy dog. Then the fox spat the Cat ran down the street searching for something to eat.";

// let text = "juandelacruz@email.com";
let text = "02-63-917853919";
// let regEx = /(\d{2})-(\d{2})-(\d{9})/g;
let regEx = /(?<countrycode>\d{2})-(?<areacode>\d{2})-(?<phone>\d{9})/g;

console.log("\n---------------Match");

let arr = text.match(regEx);
console.log(arr);

console.log("\n---------------MatchAll");

let textMatches = text.matchAll(regEx);

console.log("\n---------------loop");
for (const match of textMatches) {
  console.log(match);
}

console.log("\n---------------loop with group name");
textMatches = text.matchAll(regEx);

for (const match of textMatches) {
  console.log(match.groups["countrycode"]);
  console.log(match.groups["areacode"]);
  console.log(match.groups["phone"]);
}

console.log("\n---------------spread operator with group name");
const matchesArray = [...text.matchAll(regEx)];

console.log(matchesArray[0].groups["countrycode"]);
console.log(matchesArray[0].groups["areacode"]);
console.log(matchesArray[0].groups["phone"]);

console.log("\n---------------spread operator with index");
console.log(matchesArray[0][0]);
console.log(matchesArray[0][1]);
console.log(matchesArray[0][2]);
console.log(matchesArray[0][3]);

console.log("\n-------Country Code");

console.log("\n---------------Test");
console.log(regEx.test(text));

console.log("\n---------------Search");
console.log(text.search(regEx));
