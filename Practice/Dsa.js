// implement the binary search

let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 10;
//  find the index of the target in the array using binary search

function binarySearch(array1, target) {
  let low = 0;
  let high = array1.length + 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midvalue = array1[mid];
    if (midvalue == target) {
      return mid + 1;
    } else if (target > midvalue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
function binarySearch2(array1, target) {
  let low = 0;
  let high = array1.length + 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midvalue = array1[mid];

    if (midvalue == target) {
      return mid + 1;
    } else if (target > midvalue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
let array2 = [2, 6, 7, 8, 88, 99, 12];
function linearSearch(array2, target) {
  let length = array2.length;
  for (let i = 0; i < array2.length; i++) {
    if (target == array2[i]) {
      return i + 1;
    }
  }
  return "invalid element";
}
// console.log(linearSearch(array2, 99));
//  count the frequency of the each element of the array

let array3 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 1, 2, 2, 3, 4, 5];
function countfrequency(array3) {
  let freq = {};
  for (let i = 0; i < array3.length; i++) {
    const element = array3[i];
    if (freq[element]) {
      freq[element] += 1;
    } else {
      freq[element] = 1;
    }
  }
  return freq;
}
// console.log(countfrequency(array3));
//  write a function to check whether an given string anagram or not

function checkAnagram(str1, str2) {
  const formatstr1 = str1.replace(/\s/g, "").toLowerCase();
  const formatstr2 = str2.replace(/\s/g, "").toLowerCase();

  if (formatstr1.length !== formatstr2.length) {
    return false;
  }

  // sort the characters in both strings and compare
  const sortedstr1 = formatstr1.split("").sort().join("");
  const sortedstr2 = formatstr2.split("").sort().join("");

  if (sortedstr1 === sortedstr2) {
    return "Anagram";
  } else return "Not Anagram";
}
// console.log(checkAnagram("Sagar", "Sumit"));

//  write a function to implement the Bubblesort

// function Bubblesort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len-1; i++) {
//         for (let j = 0; j < len-1-i; j++) {
//           if (arr[j] > arr[j+1]) {
//             const temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//           }
//         }
//     }
//     return arr;
// }
// let arrs = [10, 5, 8, 9, 11, 14, 12, 16];
// console.log(Bubblesort(arrs));

//  write a function to find the second maximum number in the array;

// let array4 = [10, 20, 40, 50, 70, 80, 90, 110];

// function secondMax(array) {
//     let firstMax = array[0];
//     let secondMax = array[1];
//     for (let i = 2; i < array.length; i++) {
//         if (array[i] > firstMax) {
//             secondMax = firstMax;
//             firstMax = array[i];
//         }
//         else if (array[i] > secondMax && array[i] !== firstMax) {
//             secondMax = array[i];
//         }
//     }
//     return secondMax;
// }
// console.log(secondMax(array4));

//  find the kth largest element of the array

// let array = [5, 7, 77, 99, 10, 20, 11, 33, 56, 77, 34, 22];

// function findKthlargest(array, k) {
//     let sortedArray = array.sort((a,b) => b-a);
//     let element = array[k-1];
//     return element;
// }
// console.log(findKthlargest(array, 3))

// merge two array without having duplicates

// let array4 = [10, 20, 40, 50, 60, 70, 80];
// let array5 = [10, 20, 30, 40, 90, 100, 110, 120, 130, 140, 150, 160];

// let mergedarray = array4.concat(array5);
// let uniqueElement = new Set(mergedarray);
// console.log(Array.from(uniqueElement));

// calculate the total no of vowels a string have;

// function calculateVowels(str) {
//     let vowels = "aeiouAEIOU";
//     var count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (vowels.includes(element)) {
//              count =count+1;
//         }

//     }
//     return count;
// }
// console.log(calculateVowels(""));

// remove the element from the array

// let array = [10, 11, 43, 45, 22, 44];

// function removeelement(array, target) {
//     let removedelement = array.filter((item) => item != target);
//     return removedelement;
// }
// console.log(removeelement(array, 22));

// function Bubblesort(array) {
//     let len = array.length;
//     for (let i = 0; i < len-1; i++) {
//         for (let j = 0; j < len-1-i; j++) {
//             if (array[j] > array[j+1]) {
//                 const temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     return array;
// }
// let arrss = [5, 2, 1, 4];
// console.log(Bubblesort(arrss))

//  array = [5, 10, 15, 20]

// let array = [5, 10, 15, 20, 25];

// let sum = array.reduce((acc, curr)=> acc + curr, 0);
// let arraywithsum = array.map((item) => {
//     return(
//         sum - item
//     )
// })
// console.log(arraywithsum);

//  make an right-angle triangle patter

// const input1 = {a:1, b:2, c:3, d:10, e:12}
// const input2 = {a:2, e:12, f:6, d:10}

// // output---> {d: 10, e: 12};

// function functio(input1, input2) {
//     let obj = {};
//     for(let I in input1){
//         if (input1[I] == input2[I]) {
//             obj[I] = input1[I];
//         }
//     }
//     return obj;
// }
// console.log(functio(input1, input2));

function secondLargestNumber(array) {
  let firstMax = array[0];
  let secondMax = array[1];
  for (let i = 2; i < array.length; i++) {
    if (array[i] > firstMax) {
      secondMax = firstMax;
      firstMax = array[i];
    } else if (array[i] > secondMax && array[i] !== firstMax) {
      secondMax = array[i];
    }
  }
  return secondMax;
}

let scarra = [1, 4, 7, 2, 4, 7];
// console.log(secondLargestNumber(scarra));

function secon(arr) {
  let arrs = new Set(arr);
  let arrnw = Array.from(arrs);
  let k = arrnw.length;

  let sortedArray = arrnw.sort((a, b) => a - b);
  let secondelement = sortedArray[k - 2];
  return secondelement;
}

// console.log(secon(scarra));

const input = [2, 7, 11, 4, -2];
const output = [11, 4, -2, 2, 7];

//  given an array. rotate the array to the right by k steps,
//  where k is non-negative

// Input: nums = [1,2,3,4,5,6,7];
// k = 3;
// step 1: if k=1 nums = [7,1,2,3,4,5,6];
// step 2: if k=2 nums = [6,7,1,2,3,4,5];
// step 3: if k=3 nums = [5,6,7,1,2,3,4];

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;

// function arrayRotation(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
        
//     }
// }


const employee = [
    {name:"Sagar", salary: 35000},
    {name:"Sugar", salary: 15000},
    {name:"Sagar", salary: 45000},
    {name:"Sugar", salary: 55000},
    {name:"Sumit", salary: 55000},
]

// const totalSalaries = employee.reduce((acc, emp) => {
//     const {name, salary} = emp;
//     acc[name] = (acc[name] || 0) + salary;
//     return acc;
// }, {});
// console.log(totalSalaries);


const number = [2, 3, 4, 5, 6, 7, 8, 9];

// const slicedNumbers = number.slice(1, 3);
// console.log(slicedNumbers);

// const removedElement = number.splice(0, 3);
// console.log(removedElement);

// array.shift gives you the first element of the array
// const shiftedelement = number.shift();

// array.pop() elements gives you the last element of the array
// const popedelement = number.pop();
// console.log(popedelement);


//  so basically unshift will add the new element in 
//  the begining of the array

// number.unshift(0);
// console.log(number);

