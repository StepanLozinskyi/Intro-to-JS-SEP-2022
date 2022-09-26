// working with operators from presentation

// Example 1
// ----------------------------- Assingment Operations ---------------------------------------
let a = 5;
let b = 7;
console.log(
  "----------------------------- Assingment Operations ---------------------------------------"
);
console.log("Input values:");
console.log("A = ", a);
console.log("B = ", b);

const assingmentOperations = ["=", "+", "-", "*", "/", "%", "**"];
let isAssingmentOperationsDone = false;
let strAssingmentOperation = "";

let assingmentOperation = "+";
console.log("Assingment operation:", assingmentOperation);

switch (assingmentOperation) {
  case assingmentOperations[0]:
    b = a;
    isAssingmentOperationsDone = true;
    strAssingmentOperation = `\tOperation ${assingmentOperations[0]} selected.\n\tB ${assingmentOperation} A = ${b}`;
    break;
  case assingmentOperations[1]:
    b += a;
    isAssingmentOperationsDone = true;
    strAssingmentOperation = `\tOperation ${assingmentOperations[1]} selected.\n\tB ${assingmentOperation} A = ${b}`;
    break;
  case assingmentOperations[2]:
    b -= a;
    isAssingmentOperationsDone = true;
    strAssingmentOperation = `\tOperation ${assingmentOperations[2]} selected.\n\tB ${assingmentOperation} A = ${b}`;
    break;
  case assingmentOperations[3]:
    b *= a;
    isAssingmentOperationsDone = true;
    strAssingmentOperation = `\tOperation ${assingmentOperations[3]} selected.\n\tB ${assingmentOperation} A = ${b}`;
    break;
  case assingmentOperations[4]:
    b /= a;
    isAssingmentOperationsDone = true;
    strAssingmentOperation = `\tOperation ${assingmentOperations[4]} selected.\n\tB ${assingmentOperation} A = ${b}`;
    break;
  case assingmentOperations[5]:
    b %= a;
    isAssingmentOperationsDone = true;
    strAssingmentOperation = `\tOperation ${assingmentOperations[5]} selected.\n\tB ${assingmentOperation} A = ${b}`;
    break;
  case assingmentOperations[6]:
    b **= a;
    isAssingmentOperationsDone = true;
    strAssingmentOperation = `\tOperation ${assingmentOperations[6]} selected.\n\tB ${assingmentOperation} A = ${b}`;
    break;
  default:
    console.log(`Wrong operation '${assingmentOperation}'!`);
}

if (isAssingmentOperationsDone) {
  console.log(
    "-----------------------------Result Assingment Operations -------------------------------------"
  );
  console.log("Result:");
  console.log(strAssingmentOperation);
  console.log(b);
}

// Example 2
// ----------------------------- Comparison Operations ---------------------------------------
console.log(
  "----------------------------- Comparison Operations ---------------------------------------"
);

const comparisonOperations = [
  { comparisonName: "Equal", operation: "==" },
  { comparisonName: "Not equal", operation: "!=" },
  { comparisonName: "Strict equal", operation: "===" },
  { comparisonName: "Strict not equal", operation: "!==" },
  { comparisonName: "Greater than", operation: ">" },
  { comparisonName: "Greater than or equal", operation: ">=" },
  { comparisonName: "Less than", operation: "<" },
  { comparisonName: "Less than or equal ", operation: "<=" },
];

function comparisonInfo(operation, a, b, result) {
  console.log(
    `\tOperation '${operation}' selected.\n\t${a} ${operation} ${b} -> ${result}`
  );
}

function makeComparison(a, b, operationList, operation) {
  switch (operation) {
    case operationList[0].operation:
      result = a == b;
      comparisonInfo(operation, a, b, result);
      break;
    case operationList[1].operation:
      result = a != b;
      comparisonInfo(operation, a, b, result);
      break;
    case operationList[2].operation:
      result = a === b;
      comparisonInfo(operation, a, b, result);
      break;
    case operationList[3].operation:
      result = a !== b;
      comparisonInfo(operation, a, b, result);
      break;
    case operationList[4].operation:
      result = a > b;
      comparisonInfo(operation, a, b, result);
      break;
    case operationList[5].operation:
      result = a >= b;
      comparisonInfo(operation, a, b, result);
      break;
    case operationList[6].operation:
      result = a < b;
      comparisonInfo(operation, a, b, result);
      break;
    case operationList[7].operation:
      result = a <= b;
      comparisonInfo(operation, a, b, result);
      break;
    default:
      console.log(`Wrong operation '${operation}'!`);
  }
  return result;
}

makeComparison(9, "9", comparisonOperations, "=="); //true
makeComparison(9, "9", comparisonOperations, "==="); //false
makeComparison(20, "20", comparisonOperations, ">="); //true
makeComparison(20, "20", comparisonOperations, "<="); //true
makeComparison(20, "20", comparisonOperations, "!=="); //true

// Example 3
// ----------------------------- Arithmetic Operations ---------------------------------------
let increment = 5;
console.log(
  "----------------------------- Arithmetic Operations ---------------------------------------"
);
console.log("increment++ vs ++increment");
console.log(increment++); // return 5
console.log(increment); // return 6
console.log(++increment); // return 7 instantly
// same with --decrement and decrement --
let decrement = increment; //7
console.log("decrement-- vs --decrement");
console.log(decrement--); // return 7
console.log(decrement); // return 6
console.log(--decrement); // return 5 instantly

let str = "5";
console.log("Unary +");
console.log(+str); // unary + convert str to number

console.log(1 + +"1"); // return 2
// but operator string concatination
console.log(1 + "1"); // return string '11'

// Example 3
// ----------------------------- Logical Operators ---------------------------------------
console.log(
  "----------------------------- Logical Operators ---------------------------------------"
);
// && - AND  --> finds the first falsy value
// || - OR   --> finds the first truthy value
// ! - NOT
console.log("&&");
console.log(1 && 0); // 1 (1 is truthy)
console.log(null && 1); // 1 (1 is the first truthy value)
console.log(null && 0 && 1); // 1 (the first truthy value)
console.log(undefined && null && 0); // 0 (all falsy, returns the last value)

console.log("|| ");
console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

console.log("&& vs || - in falsy chain (undefined null 0)");
console.log(undefined && null && 0); // return first false
console.log(undefined || null || 0); // return last false

console.log("&& vs || - in truthy chain (1 2 3)");
console.log(1 && 2 && 3); // return last true
console.log(1 || 2 || 3); // return first true

// Example 4
// ----------------------------- Relational Operator 'in' and 'instanceof'---------------------------------------
console.log(
  "----------------------------- Relational Operator 'in' and 'instanceof'---------------------------------------"
);
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the index number,
// not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // returns true
"model" in mycar; // returns true

/*
instanceof
The instanceof operator returns true if the specified object is of the specified object type. The syntax is:

objectName instanceof objectType
*/

// Example 5
// ----------------------------- Conditional (ternary) operator'---------------------------------------
console.log(
  "----------------------------- Conditional (ternary) operator'---------------------------------------"
);

let age = 18;
const status = age >= 18 ? "adult" : "minor"; // return adult

// Example 6
// ----------------------------- Nullish coalescing operator '??'---------------------------------------
console.log(
  "----------------------------- Nullish coalescing operator '??'---------------------------------------"
);
// аналогійний || (OR), однак для || - 0 є falsy. Для ?? 0 є truthy
//A ?? B - Якщо операнд A null, або undefiened, повертає B, інакше A
console.log(null ?? 1); // -> 1
console.log(null ?? 0 ?? 1); // -> 0
console.log(null || 1); // -> 1
console.log(null || 0 || 1); // -> 1
