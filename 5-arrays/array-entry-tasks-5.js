// Task 1 - add next numbers to the 3, 4, 5, 6
const nums = [1, 2];
// write code just down below
console.log("Task 1");
console.log("Before actions: ", nums);

// with mutating array
//Solution1 for task1
nums.push(3, 4, 5, 6);
// --------------------------------------------------------------
////Solution2 for task1
//nums.splice(nums.length, 0, 3, 4, 5, 6);
// --------------------------------------------------------------
// Another mutating way is setting each value by indexing, but it is not a good way
// --------------------------------------------------------------

//without mutation (by creating new array)
////Solution3 for task1
// const newArray = nums.concat(3, 4, 5, 6);
// console.log(newArray);
// --------------------------------------------------------------
////Solution4 for task1
// const newArray2 = [...nums, 3, 4, 5, 6];
// console.log(newArray2);
// --------------------------------------------------------------
console.log("After actions: ", nums);

// Task 2 - add new user Dmytro and his age is 18
const users = [
  {
    name: "Borys",
    age: 101
  }
];
// write code just down below
console.log("Task 2");
console.log("Before actions: ", users);

//Solution1 for task2
users.push({
  name: "Dmytro",
  age: 18
});
// --------------------------------------------------------------
////Solution2 for task2
// users.splice(users.length, 0, {
//   name: "Dmytro",
//   age: 18
// });
// --------------------------------------------------------------
console.log("After actions: ", users);

// Task 3 - remove first 2 elements
const extraFirstNums = [101, 100, 1, 2, 3, 4];
// write code just down below
console.log("Task 3");
console.log("Before actions: ", extraFirstNums);

//Solution1 for task3
let countRFB = 2; // count to remove from begin array
const removedItemsRFB = [];
for (let i = 0; i < countRFB; i++) {
  removedItemsRFB.push(extraFirstNums.shift());
}
// --------------------------------------------------------------
////Solution2 for task3
// const removedItemsRFB = extraFirstNums.splice(0, countRFB);
// --------------------------------------------------------------
console.log("After actions: ", extraFirstNums);
console.log("Removed items: ", removedItemsRFB);

// Task 4 - remove last 2 elements
const extraLastNums = [1, 2, 3, 4, 100, 101];
// write code just down below
console.log("Task 4");
console.log("Before actions: ", extraLastNums);

//Solution1 for task4
let countRFE = 2; // count to remove from end array
const removedItemsRFE = [];
for (let i = 0; i < countRFE; i++) {
  removedItemsRFE.push(extraLastNums.pop());
}
// --------------------------------------------------------------
////Solution2 for task4
// const removedItemsRFE = extraLastNums.splice(
//   extraLastNums.length - countRFE,
//   countRFE
// );
// --------------------------------------------------------------
console.log("After actions: ", extraLastNums);
console.log("Removed items: ", removedItemsRFE);

// Task 5- add 2 nums 0 and 1 at the start of array
const extraFirstElements = [2, 3, 4];
// write code just down below
console.log("Task 5");
console.log("Before actions: ", extraFirstElements);

extraFirstElements.unshift(0, 1);
console.log("After actions: ", extraFirstElements);

// Task 6 - swap elements, that have indexes 0 and 3
const sortedArray = [4, 2, 3, 1];
// write code just down below
console.log("Task 5");
console.log("Before actions: ", sortedArray);
const firstIndex = 0;
const secondIndex = 3;

////Solution1 for task6
// let temp = sortedArray[firstIndex];
// sortedArray[firstIndex] = sortedArray[secondIndex];
// sortedArray[secondIndex] = temp;

////Solution2 for task6 using Array Destructuring Assignment
[sortedArray[firstIndex], sortedArray[secondIndex]] = [sortedArray[secondIndex], sortedArray[firstIndex]]; 

////Solution3 for task6 using splice (advanced, but hard to read)
//// sortedArray.splice(secondIndex, 1, sortedArray[firstIndex]) -> повертає масив значень, як замінюємо на позиції secondIndex, 
//// другий параметр 1 - оскільки "затираємо" одне значення
//// sortedArray.splice(secondIndex, 1, sortedArray[firstIndex])[0] -> на місці нашого другого елемента, який змінимо вставить перший елемент,
//// першому елементу присвоїмо видалене значення (другий елемент)
//sortedArray[firstIndex] = sortedArray.splice(secondIndex, 1, sortedArray[firstIndex])[0];
console.log("After actions: ", sortedArray);