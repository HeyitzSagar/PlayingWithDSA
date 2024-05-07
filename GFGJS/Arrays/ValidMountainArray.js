// Valid Mountain Array:
// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Example: Input: [0, 3, 2, 1], Output: true.

let arr1 = [10, 2, 4, 10, 2, 4, 6, 7, 5, 7, 4];

//  find the occurrence of the each element of the array

function occurrence(arr1) {
  let obj1 = {};
  for (const num of arr1) {
    obj1[num] = (obj1[num] || 0) + 1;
  }

  return obj1;
}
console.log(occurrence(arr1));

// find the maximum occurred element in the array
// output = 4

function findMaxOccurredElement(arr) {
  let countmap = {};
  for (const num of arr) {
    countmap[num] = (countmap[num] || 0) + 1;
  }
  let maxOccurredElement;
  let maxCount = 0;
  for (let num in countmap) {
    if (countmap[num] > maxCount) {
      maxCount = countmap[num];
      maxOccurredElement = num;
    }
  }
  return maxOccurredElement;
}

// console.log(findMaxOccurredElement(arr1));

let arr2 = [1, 1, 2, 2, 3, 5, 6, 5, 6, 7];

//  firstnonrepeating = 3

function FirstNonRepeating(arr) {
  let obj1 = {};
  for (const num of arr) {
    obj1[num] = (obj1[num] || 0) + 1;
  }
  let nonrepeating = Object.entries(obj1).filter(([key, value]) => value == 1);
  let firstnonrepeating = nonrepeating[0][0];
  return firstnonrepeating;
}
console.log(FirstNonRepeating(arr2));
