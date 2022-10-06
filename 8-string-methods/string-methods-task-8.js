// Tasks 1 -  convert array of strings
// from lowercase to uppercase
function convertToUppercase(array) {
  //Solution1
  return array.map((elem) => elem.toUpperCase());

  ////Solution2
  // const copy = [...array];
  // for (let elem = 0; elem < copy.length; elem++) {
  //   copy[elem] = copy[elem].toUpperCase();
  // }
  // return copy;
}

console.log("Task 1");
const input = ["some string"];
//const expectedOutput = ["SOME STRING"];
console.log("Before actions: ");
console.log("input: ", input);
console.log("After actions:  convertToUppercase(input) is equal");
console.log("Result: ", convertToUppercase(input));

// ------------------------------------------------------------

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
function calculateLetters(string, letter) {
  //Solution1
  return string.split("").filter((elem) => elem === letter).length;

  ////Solution2
  // let count = 0;
  // for (let i = 0; i < string.length; i++) {
  //   if (string.charAt(i) === letter) {
  //     count++;
  //   }
  // }
  // return count;
}

console.log("Task 2");
const input2 = "should calculate 'a' letter";
const letter2 = 'a';
//const expectedOutput = 3;
console.log("Before actions: ");
console.log("input2: ", input2);
console.log("letter2: ", letter2);
console.log("After actions:  calculateLetters(input2, letter2) is equal");
console.log("Result: ", calculateLetters(input2, letter2));

// ------------------------------------------------------------

// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
function replaceNumbers(string) {
  //Solution1
  return string.replace(/[0-9]/g, " ");

  ////Solution2
  // let copy = string;
  // for (let i = 0; i < copy.length; i++) {
  //   if (!isNaN(copy[i])) {
  //     copy = copy.substring(0, i) + " " + copy.substring(i + 1);
  //   }
  // }
  // return copy;
}

console.log("Task 3");
const input3 = "should9run7and9replace0all1nums";
//const expectedOutput = "should run and replace all nums";
console.log("Before actions: ");
console.log("input3: ", input3);
console.log("After actions:  replaceNumbers(input3) is equal");
console.log("Result: ", replaceNumbers(input3));

// ------------------------------------------------------------

// Task 4 - sort strings in array
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

console.log("Task 4");
const input4 = [11, 2, 101, 3, 4, 5, 1, 6];
//const expectedOutput = [1, 2, 3, 4, 5, 6, 11, 101];
console.log("Before actions: ");
console.log("input4: ", input4);
console.log("After actions:  sortArray(input4) is equal");
console.log("Result: ", sortArray(input4));

// ------------------------------------------------------------

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// array - ["osmos", "uterque", "water", "crop",
//         "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
function buildStringUsingIndex(array, index) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (index < array[i].length) {
      result += array[i].charAt(index);
    } else {
      result += " ";
    }
  }
  return result;
}

console.log("Task 5");
const input5 = [
  "osmos",
  "uterque",
  "water",
  "crop",
  "&",
  "swap",
  "cat",
  "brew",
  "Esmeralda"
];
const index5 = 1;
//const expectedOutput = "star wars";
console.log("Before actions: ");
console.log("input5: ", input5);
console.log("index5: ", index5);
console.log("After actions:  buildStringUsingIndex(input5, index5) is equal");
console.log("Result: ", buildStringUsingIndex(input5, index5));

// ------------------------------------------------------------

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
function palindromeValidator(str) {
  const positive = "The string is palindrome";
  const negative = "The string is not palindrome";
  //Solution1
  return str === str.split("").reverse().join("") ? positive : negative;

  ////Solution2
  // for (let i = 0; i < str.length / 2; i++) {
  //   if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
  //     return negative;
  //   }
  // }
  // return positive;
}

console.log("Task 6.1");
const input61 = "saippuakivikauppias";
//const expectedOutput = "The string is palindrome";
console.log("Before actions: ");
console.log("input61: ", input61);
console.log("After actions:  palindromeValidator(input61) is equal");
console.log("Result: ", palindromeValidator(input61));

console.log("Task 6.2");
const input62 = "danna";
//const expectedOutput = "The string is palindrome";
console.log("Before actions: ");
console.log("input62: ", input62);
console.log("After actions:  palindromeValidator(input62) is equal");
console.log("Result: ", palindromeValidator(input62));
