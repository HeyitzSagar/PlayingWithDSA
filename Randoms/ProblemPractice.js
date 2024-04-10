// console.log(this);

// var name = "Sagar";
// console.log(name);
// let arr = [10, 20, 5, 6, -99];

//  sort the above arrays

// function sortarray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (element > arr[j]) {
//         const temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sortarray(arr));

//  find the not repeated element in the array
//  let arr = [1,1,2,2,3,4,4,5,5,9];

// out : 3

// function nonrepeatedq(arr) {
//     let arr2 = {};
//     // let result = [];
//     for(const num of arr)
//     {
//         arr2[num] = (arr2[num] || 0) + 1;
//     }
//     const filteredelement = Object.entries(arr2).filter(([key, value]) => value == 1)
//     return filteredelement.flat();
// }
// console.log(nonrepeatedq(arr));1

// function nonrepeatedelement(num) {
//     let obj = {};
//     for(const key of num)
//     {
//         obj[key] = (obj[key] || 0) + 1;
//     }
//     let nonrepeated = Object.entries(obj).filter(([key, value]) => value == 1);
//     return nonrepeated;
// }
// console.log(nonrepeatedelement(arr));

//  find the occurrence of each element in the array in js

// let array1  = [1, 2, 4, 6, 7, 8, 9, 11, 12, 13, 15, 33, 13, 15]

// function occurence(array)
// {
//     let obj = {}
//     for(const num of array)
//     {
//         obj[num] = (obj[num] || 0) + 1
//     }
//     return obj;
// }
// console.log(occurence(array1));

//  move zeros to the right  side of the array

// let arraywithzeros = [2, 0, 4, 0, 6, 0, 8, 0];

// function movezeros(arraywithzeros) {
//   for (let i = 0; i < arraywithzeros.length; i++) {
//     for (let j = i + 1; j < arraywithzeros.length; j++) {
//       if (arraywithzeros[i] == 0) {
//         const temp = arraywithzeros[i];
//         arraywithzeros[i] = arraywithzeros[j];
//         arraywithzeros[j] = temp;
//       }
//     }
//   }
//   return arraywithzeros;
// }
// console.log(movezeros(arraywithzeros));
// [
//     2, 4, 6, 8,
//     0, 0, 0, 0
//   ]


// function SecondLargest(ar) {
//     let len = ar.length;
//     let firstMax = ar[0];
//     let secondMax = ar[1];
//     for (let i = 2; i < len; i++) {
//       const element = array[i];
//       if (element > firstMax) {
//         const temp = firstMax;
//         secondMax = firstMax;
//         firstMax = element;
//       } else if (element > secondMax && element !== firstMax) {
//         secondMax = element;
//       }
//     }
//     return secondMax;
//   }

//  find the second largest elemnet in the array

// let arr = [2, 4, 5, 6, 7, 8, 9, 0, 22, 22, 55, 69, 55, 69];

// function SecondLargest(arr) {
//     let firstMax = arr[0];
//     let secondMax = arr[1];
//     for (let i = 2; i < arr.length; i++) {
//         const element = arr[i];
//         if (element > firstMax) {
//             const temp = firstMax;
//             secondMax = firstMax;
//             firstMax = element;
//         } else if (element > secondMax && element!== firstMax) {
//             secondMax = element;
//         }
//     }
//     return secondMax;
// }
// console.log(SecondLargest(arr));


// function SecondLargest(arr) {
//     let firstMax = arr[0];
//     let secondMax = arr[1];
//     for (let i = 2; i < arr.length; i++) {
//         const element = arr[i];
//         if (element > firstMax) {
//             const temp = firstMax;
//             secondMax = firstMax;
//             firstMax = element;
//         } else if (element > secondMax && element!== firstMax) {
//             secondMax = element;
//         }
//     }
//     return secondMax;
// }
// console.log(SecondLargest(arr));

// implement the binary searcch algorithm 

// let arr = [10, 20, 30, 50, 70, 80, 90, 100]
// target = 90;
// // output  = ?

// function binarysearch(arr, target) {
//     let low = 0;
//     let high = arr.length + 1;
//     while (low <= high) {
//         const mid = Math.floor((low + high) / 2);
//         const midvalue = arr[mid];
//         if (midvalue == target) {
//             return mid + 1;
//         }
//         else if(target > midvalue)
//         {
//             low = mid + 1;
//         }
//         else{
//             high = mid - 1;
//         }
//     }
//     return -1;
// }
// console.log(binarysearch(arr, target));


//  find all the pairs of elements who sum
// equals to target

// let array = [20, 2, 4, 18, 34, 55, 64, 9, 13];

// let target = 22;

// function Twosum(array, target) {
//   let pair = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if (array[i] + array[j] == target) {
//         pair.push(array[i], array[j]);
//       }
//     }
//   }
//   return pair;
// }

// console.log(Twosum(array, target));


// let name = "Sagar";
// //  total no of the vowel is 2 // a, a

// function countVowels(input) {
//   const vowels = "aeiouAEIOU";

//   let vowelCount = 0;

//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }
// console.log(countVowels(name));


//  merge two sorted array 

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// function merge(arr1, arr2) {
//     let merge = arr1.concat(arr2);
//     return merge;
// }
// console.log(merge(arr1, arr2));

//  factorial 

// function factorial(n)
// {
//     if(n == 0 || n == 1) 
//     {
//         return 1;
//     }
//     else
//     return n * factorial(n-1);
// }
// console.log(factorial(5));






