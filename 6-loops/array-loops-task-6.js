const { performance } = require('perf_hooks');
// Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
function sumNumsInArrays(array1, array2) {
  // there is no sense to merge them, but we can do it as
  //return [...array1, ...array2].reduce((a, b) => a + b);
  return array1.reduce((a, b) => a + b) + array2.reduce((a, b) => a + b);
}

console.log("Task 1");
const arrayNums1 = [7, 101, 3, 1, 9, 11, 100, 111]; // 343
const arrayNums2 = [90, 101, 3, 1, 69, 11, 10, 111]; // 396
//const expectedOutput = 739;
console.log("Before actions: ");
console.log("arrayNums1: ", arrayNums1);
console.log("arrayNums2: ", arrayNums2);
console.log("After actions:  sumNumsInArrays(arrayNums1, arrayNums2) is equal");
console.log("Result: ", sumNumsInArrays(arrayNums1, arrayNums2));

// --------------------------------------------------------------

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

function printEvenNumbers(n) {
  let resultString = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      resultString += String(i + ", ");
    }
  }
  // replace last ", " -> ""
  const replaced = resultString.slice(0, -2) + "";
  return replaced;
}

console.log("Task 2");
const n = 22;
//const expectedOutput = "2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22";
console.log("Before actions: ");
console.log("n: ", n);
console.log("After actions:  printEvenNumbers(n) is equal");
console.log("Result: ", printEvenNumbers(n));

// --------------------------------------------------------------

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
function reverseArrayItems(array) {
  //// Solution1
  let reversedArray = [];
  // for (let i = array.length - 1; i >= 0; i--) {
  //   reversedArray.push(array[i]);
  // }
  //// Solution2
  array.forEach((element) => {
    reversedArray.unshift(element);
  });
  return reversedArray;
}

console.log("Task 3");
const array = [43, "what", 9, true, "cannot", false, "be", 3, true];
//const expectedOutput = [true, 3, "be", false, "cannot", true, 9, "what", 43];
console.log("Before actions: ");
console.log("array: ", array);
console.log("After actions:  reverseArrayItems(array) is equal");
console.log("Result: ", reverseArrayItems(array));

// --------------------------------------------------------------

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
function sumNumsSamePosition(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    resultArray.push(array1[i] + array2[i]);
  }
  return resultArray;
}

console.log("Task 4");
const array1 = [4, 6, 7, 10];
const array2 = [8, 1, 9, 20];
//const expectedOutput = [12, 7, 16, 30];
console.log("Before actions: ");
console.log("array1: ", array1);
console.log("array2: ", array2);
console.log("After actions:  sumNumsSamePosition(array1, array2) is equal");
console.log("Result: ", sumNumsSamePosition(array1, array2));

// --------------------------------------------------------------

// Task 5 - find sum of all number in array using 'while' loop
function sumNums(array) {
  let currentIndex = 0;
  let sum = 0;
  while (currentIndex < array.length) {
    // костиль, щоб не відпрацювала конкатинація стрічок, або number + NaN
    if (typeof array[currentIndex] === "number") {
      sum += array[currentIndex];
    } else {
      sum += 0;
    }
    ++currentIndex;
  }
  return sum;
}

console.log("Task 5");
const array5 = [4, 6, 7, 10];
//const expectedOutput = 27;
console.log("Before actions: ");
console.log("array5: ", array5);
console.log("After actions:  sumNums(array5) is equal");
console.log("Result: ", sumNums(array5));

// --------------------------------------------------------------

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length >= 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
function filterArrayWithStrings(array) {
  let maxWordLength = 4;
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= maxWordLength && !array[i].includes("error")) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

console.log("Task 6");
const array6 = [
  "error01",
  "in a galaxy",
  "start-error",
  "far far",
  "away",
  "0994-error"
];
//const expectedOutput = ["in a galaxy", "far far", "away"];
console.log("Before actions: ");
console.log("array6: ", array6);
console.log("After actions:  filterArrayWithStrings(array6) is equal");
console.log("Result: ", filterArrayWithStrings(array6));

// --------------------------------------------------------------

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
function factorial(n) {
  //// Solution1
  // if (n < 0) {
  //   return -1;
  // } else if (n === 0) {
  //   return 1;
  // } else {
  //   return factorial(n - 1) * n;
  // }
  // Solution2
  return n <= 1 ? 1 : factorial(n - 1) * n;
  //// Solution3
  // let res = 1;
  // for (let i = 1; i <= n; i++) {
  //   res *= i;
  // }
  // return res;
  //// Solution4
  // let curr = 1;
  // let res = 1;
  // while (curr <= n) {
  //   res *= curr;
  //   ++curr;
  // }
  // return res;
}

//// Solution5
const factorialCached = (function (n) {
  let cache = [];

  return function (n) {
    if (n === 2) {
      return 2;
    } else {
      if (n in cache) {
        return cache[n];
      } else {
        cache[n] = n * factorialCached(n - 1);
        return cache[n];
      }
    }
  };
})();

console.log("Task 7.1");
console.log("factorial(3) ", factorial(3));
console.log("factorial(5) ", factorial(5));

console.log("Task 7.2");
console.log("factorialCached(3) ", factorialCached(3));
console.log("factorialCached(5) ", factorialCached(5));