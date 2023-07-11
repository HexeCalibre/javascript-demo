console.log("\n------------Try Catch/finally");

//change mouse cursor hourglass
try {
  //   let num = 1;
  let num = "asdfsadf";
  console.log(num.toUpperCase());

  console.log("Code continue...");
} catch (error) {
  console.log(`catch called error message = ${error.message}`);
} finally {
  console.log(`finally called`);

  //change mouse cursor default
}

console.log("\n------------Throw");

try {
  let number = 10;
  let divisor = 0;

  if (divisor == 0) {
    // throw "Division by zero error";
    throw new Error("Division by zero error");
  }

  let quotient = number / divisor;

  console.log(quotient);
} catch (e) {
  console.log(`catch called error message = ${e.message}`);

  //   console.log(`catch called error message = ${error}`);
} finally {
  console.log(`finally called`);
}
