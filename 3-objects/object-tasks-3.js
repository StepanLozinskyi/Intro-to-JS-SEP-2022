// Task 1 - add new fields name with value "Felix", and age - 7
const objWithNewFields = {};
console.log("Task 1");
console.log("Before actions: ", objWithNewFields);

// code here
// for 1-2 solution descriptors by default true, for 3 solution we can set them
// --------------------------------------------------------------
//Solution 1.1 for task1
objWithNewFields.name = "Felix";
objWithNewFields.age = 7;
////Solution 1.2 for task1
//objWithNewFields.['name'] = "Felix";
//objWithNewFields['age'] = 7;
// --------------------------------------------------------------
////Solution 2 for task1
// Object.assign(objWithNewFields, { name: "Felix", age: 7 });
// --------------------------------------------------------------
////Solution 3 for task1 with descriptors
// Object.defineProperty(objWithNewFields, "name", {
//   value: "Felix"
// });
// Object.defineProperty(objWithNewFields, "age", {
//   value: 7
// });
// --------------------------------------------------------------
//// how to get descriptor
// const descriptor1 = Object.getOwnPropertyDescriptor(objWithNewFields, "name");
// console.log(
//   "Configurable in objWithNewFields set as ",
//   descriptor1.configurable
// );
// console.log("Writable in objWithNewFields set as ", descriptor1.writable);
// console.log("Enumerable in objWithNewFields set as ", descriptor1.enumerable);
// console.log(descriptor1.value);
// --------------------------------------------------------------
// Task 1 - end
console.log("After actions: ", objWithNewFields);

// Task 2 - add new field sum, that should contain sum of fields a + b
const objWithSum = {
  a: 10,
  b: 10
};
console.log("Task 2");
console.log("Before actions: ", objWithSum);

// code here
// --------------------------------------------------------------
//Solution 1.1 for task2
objWithSum.sum = objWithSum.a + objWithSum.b;
////Solution 1.2 for task2
//objWithSum["sum"] = objWithSum.a + objWithSum.b;
// --------------------------------------------------------------
////Solution 2 for task2
//Object.assign(objWithSum, { sum: objWithSum.a + objWithSum.b });
// --------------------------------------------------------------
////Solution 3 for task2
// Object.defineProperty(objWithSum, "sum", {
//   value: objWithSum.a + objWithSum.b
// });
// --------------------------------------------------------------
// Task 3 - end
console.log("After actions: ", objWithSum);

// Task 3 - rewrite nums array with [2,3] array
const objWithNums = {
  nums: [1]
};
console.log("Task 3");
console.log("Before actions: ", objWithNums);

// code here
// --------------------------------------------------------------
//Solution 1.1 for task3
objWithNums.nums = [2, 3];
////Solution 1.2 for task3
//objWithNums['nums'] = [2, 3];
// --------------------------------------------------------------
////Solution 2 for task3
//Object.assign(objWithNums, { nums: [2, 3] });
// --------------------------------------------------------------
////Solution 3 for task3
// Object.defineProperty(objWithNums, "nums", {
//   value: [2, 3]
// });
// --------------------------------------------------------------
// Task 3 - end
console.log("After actions: ", objWithNums);
