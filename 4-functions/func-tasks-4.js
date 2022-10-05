// aditional check for calling function with parameter
function isParamExist(param) {
  return param === undefined ? false : true;
  // if (param === undefined) {
  //   return false;
  // }
  // else {
  //   return true;
  // }
}

// Task 1 - should return the string "Hello, World!"
function sayHelloWorld() {
  const greeting = "Hello, World!";
  return greeting;
}
console.log("Task 1 : sayHelloWorld()");
console.log(sayHelloWorld());

// Task 2 - should return the string "Hello, Somename!"
function sayHello(name) {
  if (isParamExist(name)) {
    const greeting = `Hello, ${name}!`;
    //// Example 2
    //const greeting2 = "Hello, " + name + "!";
    return greeting;
  }
  else {
    const message = "Missed name parameter when we called sayHello(name) function!";
    const error = new Error(message);
    return error;
  }
}
const name1 = "Steve";
console.log("Task 2 : sayHello(name) where name = \"Steve\"");
console.log(sayHello(name1));

// Task 3 - should return sum of two numbers
// a + b
function sumNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    const sum = a + b;
    return sum;
  } else {
    const message = "Parameter a or b is not a number";
    const error = new Error(message);
    return error;
  }
}
console.log("Task 3 : sumNumbers(a, b) where a = 4, b = 5");
console.log(sumNumbers(4, 5));

// Task 4 - should return a value by key in provided object
// provided object - { name: 'Name' }
// result - 'Name'
function valueByKeyInObject(key, obj = {}) {
  const myValue = obj[key];
  return myValue;
}
console.log("Task 4 : valueByKeyInObject(key, obj = {}) where obj = {name: 'Steve', age: 21}, key = 'age'");
console.log(valueByKeyInObject('age', obj = {name: 'Steve', age: 21}));

// Task 5 - should return an object with new field and value
// without object - { name: 'Name' }
// with an object - { name: 'Name', age: 100 }
function extendObject(key, value, obj = {}) {
  const copy = JSON.parse(JSON.stringify(obj));
  copy[key] = value;
  return copy;
}
console.log("Task 5 : extendObject(key, value, obj = {}) where obj = {name: 'Steve', age: 21}, key = 'hasDog', value = true");
console.log(extendObject('hasDog', true, obj = {name: 'Steve', age: 21}));

// Task 6 - should return a larger argument increased by 100
// with (10, 7) output - 110
// with (10, 77) output - 177
function increaseBiggerArg(a, b) {
  //Solution1
  if (typeof a === "number" && typeof b === "number") {
    return a > b ? a + 100 : b + 100;
  } else {
    const message = "Parameter a or b is not a number";
    const error = new Error(message);
    return error;
  }
  ////Solution2
  // if (typeof a === "number" && typeof b === "number") {
  //   if (a > b) {
  //     return a + 100;
  //   } else {
  //     return b + 100;
  //   }
  // } else {
  //   const message = "Parameter a or b is not a number";
  //   const error = new Error(message);
  //   return error;
  // }
}

console.log("Task 6.1 : increaseBiggerArg(a, b) where a = 5, b = 25");
console.log(increaseBiggerArg(5, 25));
console.log("Task 6.2 : increaseBiggerArg(a, b) where a = 23, b = 3");
console.log(increaseBiggerArg(23, 3));

// Task 7 - calculate the area of a figure using
// provided type: "square", "circle", or "rectangle"
// for circle "a" is radius
// for square only "a" needed

function calculateFigureArea(figureType, a, b) {
  let figureTypeLowCase = figureType.toLocaleLowerCase();
  let currentArea = 0;

  // check that both a and b exists when calling calculateFigureArea,
  // because numbers * undefind -> return NaN
  if (!isParamExist(a) && !isParamExist(b) && figureTypeLowCase != "rectangle") {
    const message = `Wrong parameter input a = ${a}, b = ${b} for figureType = ${figureTypeLowCase}!`;
    const error = new Error(message);
    return error;
  }
  
  switch (figureTypeLowCase) {
    case "square": {
      currentArea = a * a;
      break;
    }
    case "circle": {
      currentArea = Math.PI * a * a;
      break;
    }
    case "rectangle": {
      currentArea = a * b;
      break;
    }
    default: {
      const message = `We can't calculate area for ${figureType}!`;
      const error = new Error(message);
      return error;
    }
  }
  return currentArea;
}

console.log("Task 7.1 : calculateFigureArea(figureType, a, b) where figureType = 'square', a = 5");
console.log(calculateFigureArea('square', 5));
console.log("Task 7.2 : calculateFigureArea(figureType, a, b) where figureType = 'SQUARE', a = 5");
console.log(calculateFigureArea('SQUARE', 5));
console.log("Task 7.3 : calculateFigureArea(figureType, a, b) where figureType = 'circle', a = 5");
console.log(calculateFigureArea('circle', 5));
console.log("Task 7.4 : calculateFigureArea(figureType, a, b) where figureType = 'rectangle', a = 5, b = 25");
console.log(calculateFigureArea('rectangle', 5, 2));
//console.log("Task 7.5 : calculateFigureArea(figureType, a, b) where figureType = 'squirrel', a = 5, b = 25");
//console.log(calculateFigureArea('squirrel', 5, 2)); //throw Error: We can't calculate area for squirrel!