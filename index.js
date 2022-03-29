const fromOpeningSigns = {
  "{": "}",
  "(": ")",
  "[": "]",
};
const fromClosingSigns = {
  "}": "{",
  ")": "(",
  "]": "[",
};

var isValid = function (enteredValue) {
  // Check if the string is not even
  if (enteredValue.length % 2 != 0) return false;

  // Check if no value has been entered from the string parameter
  if (enteredValue.length == 0) return true;

  // Check if there is any entered value not matching the required ones
  if (!enteredValue.match(/[\{\}\[\]\(\)]/)) return false;

  var copiedValue = enteredValue;

  // Loop through the string entered
  for (subIndex = 0; subIndex < enteredValue.length; subIndex++) {
    // Get the next value in the string
    var nextValue = enteredValue[subIndex + 1];

    // Check if this is not the last value
    if (nextValue) {
      // Loop from the beginning of the remaining enteredValue and check for equality
      for (let subIndex = 0; subIndex < copiedValue.length; subIndex++)
        // Check if this value is an opening sign
        if (fromOpeningSigns[copiedValue[subIndex]]) {
          // Check if this current value is similar to its inverted next value
          if (
            copiedValue[subIndex] == fromClosingSigns[copiedValue[subIndex + 1]]
          ) {
            // Remove any similarity found if these two charactes are the same
            copiedValue = copiedValue.split("");
            copiedValue.splice(subIndex, 1);
            copiedValue.splice(subIndex, 1);

            copiedValue = copiedValue.join("");
          }
        }
    }
  }
  // Return true if the copiedValue is empty and return false if it still has unmatched characters
  return !!!copiedValue.length;
};

var testCases = [
  "()",
  "{}()",
  "[()]",
  "()()",
  "[)",
  "([])]",
  "{}([}]",
  "(([]))",
  "{()()[({})](){}}()()(){()[()]}",
];

for (let index = 0; index < testCases.length; index++) {
  if (isValid(testCases[index])) console.log(testCases[index], "=> Valid");
  else console.log(testCases[index], "=> Invalid");
}
