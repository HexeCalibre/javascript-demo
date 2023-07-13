// function getSum(x, y) {
//   let z = -1;

//   return x + y + z;
// }

// console.log(getSum(10, 11));
// console.log("Done debugging");

console.log("\n----------");

function getAverage(arrayNumbers) {
  let total = getTotal(arrayNumbers);
  let avg = total / arrayNumbers.length;
  return avg;
}

function getTotal(arrayNumbers) {
  let total = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    let number = arrayNumbers[i];
    total += number;
  }
  return total;
}

let a = getAverage([10, 11, 12]);
console.log(a);
