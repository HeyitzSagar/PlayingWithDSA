// Original array with nested array
const originalArray = [1, 2, [3, 4]];

// Shallow copy using spread syntax
const shallowCopy = [...originalArray];

// Deep copy using JSON.stringify and JSON.parse
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// Modify the nested array in the original
originalArray[2][0] = 100;

console.log("Original Array:", originalArray);   // Output: [1, 2, [100, 4]]
console.log("Shallow Copy:", shallowCopy);       // Output: [1, 2, [100, 4]]
console.log("Deep Copy:", deepCopy);             // Output: [1, 2, [3, 4]]
