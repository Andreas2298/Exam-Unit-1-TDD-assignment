import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
  if (typeof name !== "string") {
    return null;
  }

  name = name.trim();

  if (name === "") {
    return "";
  }

  if (/[^a-zA-Z\s]/.test(name)) {
    return null;
  }

  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Format names function");

//Valid inputs

tests.isEqual(
  formatName("john doe"),
  "John Doe",
  "The format 'john doe' should be 'John Doe'"
);

tests.isEqual(
  formatName("   andreas ness   "),
  "Andreas Ness",
  "The format '   andreas ness   ' should be 'Andreas Ness'"
);

tests.isEqual(
  formatName("CHRISTIAN SIMONSEN"),
  "Christian Simonsen",
  "The format 'CHRISTIAN SIMONSEN' should be 'Christian Simonsen'"
);

tests.isEqual(
  formatName("o'neil "),
  null,
  "The format 'o'neil' should give null because of the special character"
);

//Edge cases

tests.isEqual(
  formatName(""),
  "",
  "The format empty string should return empty string"
);

tests.isEqual(
  formatName("   "),
  "",
  "The format spaces should only return empty string"
);

tests.isEqual(
  formatName("andreas-ness"),
  null,
  "The format 'andreas-ness' should return null due special dash character"
);

tests.isEqual(
  formatName("62863572"),
  null,
  "The format '2863572' should return null because of the numbers"
);

tests.isEqual(formatName(null), null, "The format null should return null");

tests.isEqual(
  formatName(undefined),
  null,
  "The format undefined should return null"
);

tests.isEqual(
  formatName(38),
  null,
  "The format 38 should return null because it is not a string"
);

//#endregion
