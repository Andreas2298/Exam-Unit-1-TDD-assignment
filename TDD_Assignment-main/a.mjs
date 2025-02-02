import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply(...numbers) {
  let result = 1;

  for (let num of numbers) {
    if (typeof num === "string" && !isNaN(num)) {
      num = Number(num);
    }
    if (typeof num !== "number" || isNaN(num)) {
      return NaN;
    }

    result *= num;
  }

  return result;
}

//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Multiply the function");

//Valid inputs

tests.isEqual(multiply(3, 5), 15, "Multiply 3 and 5 should give 15");
tests.isEqual(multiply(4, 5), 20, "Multiply 4 and 5 should give 20");
tests.isEqual(multiply(6, 7), 42, "Multiply 6 and 7 should give 42");
tests.isEqual(multiply(-2, 5), -10, "Multiply -2 and 5 should give -10");

tests.isEqual(multiply("3", 2), 6, "Multiply '3' and 2 should be 6");
tests.isEqual(multiply("6", 3), 18, "Multiply '6' and 3 should be 18");
tests.isEqual(multiply("8", 4), 32, "Multiply '8' and 4 should be 32");

//Invalid inputs

tests.isNotANumber(
  multiply("andreas", 3),
  "Multiply 'andreas' and 3 should return NaN"
);

tests.isNotANumber(multiply(4, null), "Multiply 4 and null should return NaN");

tests.isNotANumber(
  multiply(undefined, 7),
  "Multiply undefined and 7 should return NaN"
);

tests.isNotANumber(multiply(NaN, 5), "Multiply NaN and 5 should return NaN");

//Edge cases

tests.isEqual(multiply(0, 3), 0, "Multiply 0 and 3 should be 0");
tests.isEqual(multiply(0, -3), 0, "Multiply 0 and -3 should be 0");
tests.isEqual(multiply(0, 0), 0, "Multiply 0 and 0 should be 0");

tests.isEqual(
  multiply(Infinity, 4),
  Infinity,
  "Multiply Infinity and 4 should be Infinity"
);

tests.isEqual(
  multiply(-Infinity, 5),
  -Infinity,
  "Multiply -Infinity and 5 should be -Infinity"
);

tests.isEqual(
  multiply(Infinity, -Infinity),
  -Infinity,
  "Multiply Infinity and -Infinity should be -Infinity"
);

//#endregion
