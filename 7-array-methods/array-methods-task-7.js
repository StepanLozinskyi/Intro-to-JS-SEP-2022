// Task 1 - sort an array with numbers
// const arrayNums = [7,101,3,1,9,11,100,111]
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

console.log("Task 1");
const arNum = [11, 2, 101, 3, 4, 5, 1, 6];
//const expectedOutput = [1, 2, 3, 4, 5, 6, 11, 101];
console.log("Before actions: ");
console.log("arNum: ", arNum);
console.log("After actions:  sortArray(array) is equal");
console.log("Result: ", sortArray(arNum));

// --------------------------------------------------------------

// Task 2 - filter an array of strings and keep only
// a string, that doesn't contain the word 'test'
// const stringsArray = [
//   'one-test', 'cat', 'parrot',
//   'banana', 'test-dog', 'dog'
// ]
function filterStringsArray(array) {
  const word = "test";
  return array.filter((elem) => !elem.includes(word));
}

console.log("Task 2");
const stringsArray = [
  "one-test",
  "cat",
  "parrot",
  "banana",
  "test-dog",
  "dog"
];
//const expectedOutput = ["cat", "parrot", "banana", "dog"];
console.log("Before actions: ");
console.log("stringsArray: ", stringsArray);
console.log("After actions:  filterStringsArray(stringsArray) is equal");
console.log("Result: ", filterStringsArray(stringsArray));

// --------------------------------------------------------------

// Task 3 - find sum of numbers in array using .reduce()
// const numsArray = [
//   1, 3, 5, 10, 19, 100, 200, 33,
// ]
function sumNumbersInArray(array) {
  return array.reduce((a, b) => a + b);
}

console.log("Task 3");
const arNum3 = [11, 2, 101, 3, 4, 5, 1, 6];
//const expectedOutput = 133;
console.log("Before actions: ");
console.log("arNum3: ", arNum3);
console.log("After actions:   sumNumbersInArray(arNum3) is equal");
console.log("Result: ",  sumNumbersInArray(arNum3));

// --------------------------------------------------------------

// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
// const arrayItems = [
//   { a: 1, b: 3 },
//   { a: 3, b: 3 },
//   { a: 6, b: 3 },
//   { a: 10, b: 10 },
//   { a: 41, b: 1 },
//   { a: 0, b: 4 }
// ];
function filterAndExtendArrayItems(array) {
  const mutatedArray = array.filter((elem) => elem.a > 5);
  mutatedArray.forEach((elem) => {
    elem.sum = elem.a + elem.b;
  });
  return mutatedArray;
}

console.log("Task 4");
const inputArray = [
  { a: 7, b: 5 },
  { a: 10, b: 3 },
  { a: 2, b: 3 },
  { a: 0, b: 3 }
];
// const expectedOutput = [
//   { a: 7, b: 5, sum: 12 },
//   { a: 10, b: 3, sum: 13 }
// ];
console.log("Before actions: ");
console.log("inputArray: ", inputArray);
console.log("After actions:  filterAndExtendArrayItems(inputArray) is equal");
console.log("Result: ", filterAndExtendArrayItems(inputArray));

// --------------------------------------------------------------

// Task 5 - merge arrays and remove duplicates
// const arNum = [1, 2, 3, 4, 5, 6];
// const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
  return Array.from(new Set([...array1, ...array2]));
}

console.log("Task 5");
const arNum51 = [1, 2, 3, 4, 5, 6];
const arNum52 = [15, 6, 3, 20, 11];
//const expectedOutput = [1, 2, 3, 4, 5, 6, 15, 20, 11];
console.log("Before actions: ");
console.log("arNum51: ", arNum51);
console.log("arNum52: ", arNum52);
console.log("After actions:  mergeArraysWithoutDuplicates(arNum51, arNum52) is equal");
console.log("Result: ", mergeArraysWithoutDuplicates(arNum51, arNum52));