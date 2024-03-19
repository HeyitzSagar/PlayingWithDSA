// code to write function
// to find nearest number closest to 0

// let Input = [-4, 4, 2, 1,6]
// // output = 1
// function closesttozero(array) {
//   let newarr = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (array[i] < 0) {
//         array[i] = -(array[i]);
//     }
//     const diff = array[i] -0;
//     newarr.push(diff);
//   }
//   let sortedArray = newarr.sort((a, b) => a-b);
//   return sortedArray[0];
// }
// console.log(closesttozero(Input));

//  Medium level Leetcode 2177. Find Three Consecutive Integers That Sum to
//  a Given Number

// let num = 30;
// let output = [10, 11, 12]; // 10+11+12 = 33;

// function func2(num) {
//   let arr = [];
//   let emptyarray = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(func2(num));

// let arr = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   22, 23, 24, 25, 26, 27, 28, 29,
// ];

// function func(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i] + arr[i+1] + arr[i+2];
//         if (element == num) {
//             return `${arr[i]} and ${arr[i+1]} and ${arr[i+2]}`
//         }
//     }
//     return 'not found';
// }

//  the efficient way to solve the problem is
//  num / 3  = x and then store x-1, x, x; please check x-1, x, x+1 !> num
// console.log(func(arr, 30));

// function func1(num) {
//     let x = Math.ceil(num/3);
//     let arr1 = [];
//     let emptyarray = [];
//     let sum = 0;
//     for(let i = -1; i<2; i++)
//     {
//         let number = (x + i);
//         sum = sum + number;
//         console.log(sum);
//         if (number < num && sum <= num) {
//             arr1.push(number);
//         }
//         if (sum > num) {
//             return emptyarray;
//         }
//     }
//     return arr1;
// }

// console.log(func1(4));

// function factorial(n)
// {
//     if (n <= 1) {
//         return 1;
//     }

//     return n * factorial(n-1);
// }
// console.log(factorial(5));

//  Binary search

// function BinarySearch(arr, t) {
//   let low = 0;
//   let high = arr.length + 1;
//   while (low <= high) {
//     const mid = Math.ceil((low + high) / 2);
//     const midvalue = arr[mid];
//     if (midvalue == target) {
//       return mid + 1;
//     } else if (midvalue > target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let target = 0;
// console.log(BinarySearch(arr, target));

// const arr = [2, 3, 4, 5, 6, 2, 2, 4, 5, 6, 4, 2, 4, 6, 3, 9];
// function func1(array) {
//   let object = {};
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     object[element] = (object[element] || 0) + 1;
//   }
//   let uniqueelement = Object.entries(object).filter(
//     ([key, value]) => value === 1
//   );
//   return uniqueelement.flat();
// }

// console.log(func1(arr));

// let arr = [2, 2, 4, 4, 5, 5, 5, 6, 6];
// function nonrepeatable(arr) {
//   let object = {};
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     object[element] = (object[element] || 0) + 1;
//     if (object[element] <= 1) {
//       arr1.push(element);
//     }
//   }
//   return arr1;
// }

//  Write a generic function to add an array object in a
// json object

// function addArrayToObject(jsonObject, array) {
//     if (!Array.isArray(array)) {
//         throw new Error('The second parameter must be an array.');
//     }
//     if (!jsonObject || typeof jsonObject !== 'object') {
//         throw new Error('The first parameter must be a valid JSON object.');
//     }
//     if (!jsonObject.hasOwnProperty('data')) {
//         jsonObject.data = [];
//     }
//     jsonObject.data.push(...array);
//     return jsonObject;
// }
// const jsonObject = { data: [{ id: 1, name: 'John' }] };
// const arrayToAdd = [{ id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }];

// jsonObject.data.push(...arrayToAdd);
// console.log(jsonObject);
// const updatedJsonObject = addArrayToObject(jsonObject, arrayToAdd);
// console.log(updatedJsonObject);

// console.log(b)
// console.log(a)
// console.log(c)
// var b = 11;
// let a = 10;
// const c = 12;

// let a = 10;
// a= 12;
// console.log(a);
// var b = 20;
// b =21;
// console.log(b);
// const c = 30;
// c = 25;
// console.log(c);

// function generatePattern() {
//     let pattern = [];
//     let start = 11;
//     let step = -5;

//     for (let i = 0; i < 4; i++) {
//         pattern.push(start);
//         start += step;
//         step = -step; // alternate between adding and subtracting 5
//     }
//     return pattern;
// }

// // Generate the pattern
// const result = generatePattern();

// console.log(result); // Output: [11, 6, 1, -4, 1, 6, 11, 16]

// 347. Top K Frequent Elements
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// let nums = [1,1,1,2,2,3]
// let k = 2

// // output : [1,2]
// let num2 = [1]
// let k2 = 1;
// // output = [1]

// function topKfrequent(nums, K) {
//     let object = {};
//     for(const num of nums)
//     {
//         object[num] = (object[num] || 0) + 1;
//         console.log(object[num]);
//     }
//     let entries = Object.entries(object);
//     console.log(entries);
//     let sorted = entries.sort((a, b) => b[1] - a[1]).slice(0, K);
//    return sorted.map(subArray => subArray[0]);
// }

// console.log(topKfrequent(num2, k2));

// 128. Longest Consecutive Sequence
// Medium
// Topics
// Companies
// Given an unsorted array of integers nums, return the
//  length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// let arr = [1, 2, 3, 4, 11, 14];
//  output = 4    as // [1,2, 3, 4];

// 125. leetcode valid Palindrome

// function validpalindrome(s) {
//   const regex = /[^a-zA-Z0-9\s]/g;
//   let str = s.replace(regex, "");
//   console.log(str);
//   let string = str.trim(" ");
//   console.log(string);
//   let string1 = string.toLowerCase().trim();
//   let string2 = string1.split("").reverse().join("");
//   console.log(string1);
//   console.log(string2);
//   if (string1 == string2) {
//     return true;
//   }
//   return false;
// }
// console.log(validpalindrome("A man, a plan, a canal: Panama"));

// let arr = [];
// arr.push(1);
// arr.push(2);
// console.log(arr);







