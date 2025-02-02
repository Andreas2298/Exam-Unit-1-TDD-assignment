import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.

    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
  if (
    typeof target !== "number" ||
    typeof guess !== "number" ||
    target % 1 !== 0 ||
    guess % 1 !== 0
  ) {
    return null;
  }

  if (guess > target) {
    return "Too high";
  } else if (guess < target) {
    return "Too low";
  } else {
    return "Correct!";
  }
}

//#endregion

//#region Tests --------------------------------------------------------------------

const tests = test("Guess number and target");
// Basic cases

tests.isEqual(
  guessNumber(10, 5),
  "Too low",
  "If target is 10 and guess is 5, return 'Too low'"
);

tests.isEqual(
  guessNumber(10, 15),
  "Too high",
  "If target is 10 and guess is 15, return 'Too high'"
);

tests.isEqual(
  guessNumber(10, 10),
  "Correct!",
  "If target is 10 and guess is 10, return 'Correct!'"
);

// Invalid inputs

tests.isEqual(
  guessNumber("19", 5),
  null,
  "If the target is 19 and a string and the guess is valid, return null"
);

tests.isEqual(
  guessNumber(20, 5.5),
  null,
  "If guess is a float number, return null"
);

tests.isEqual(guessNumber(35, "5"), null, "If guess is a string, return null");

tests.isEqual(
  guessNumber(null, 5),
  null,
  "If the target is null, null is returned"
);

tests.isEqual(
  guessNumber(15, undefined),
  null,
  "If the guess is undefined, null is returned"
);

// Edge cases

tests.isEqual(
  guessNumber(200, 0),
  "Too low",
  "if the target is 200 and the guess i 0, Too low is returned"
);

tests.isEqual(
  guessNumber(0, 0),
  "Correct!",
  "if the target is 0 and the guess is 0, return correct!"
);

tests.isEqual(
  guessNumber(50, 300),
  "Too high",
  "If the the target is 50 and the guess is 300, Too High is returned"
);

tests.isEqual(
  guessNumber(500, -500),
  "Too low",
  "If the target is 500 and the guess is -500, Too Low is returned"
);

//#endregion
