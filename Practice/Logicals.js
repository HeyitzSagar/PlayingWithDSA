// this file is for the practicing purpose of the js

function calculatesum(a, b) {
  return a + b;
}
function maximumnum(arr) {
  let max = arr.reduce((curr, prev) => (curr > prev ? curr : prev));
  return max;
}
// console.log(maximumnum(arr));
let arr = [10, 4, 6, 7, 3, 22, 56];

let string = "Sagar";
let reversed = string.toLocaleLowerCase();
let reverse = reversed.split("").reverse().join("");
// console.log(reverse);

function palindrome(str) {
  let string = str.toLocaleLowerCase();
  let reversedstring = string.split("").reverse().join("");
  if (string === reversedstring) {
    return "Palindrome";
  } else return "Not Palindrome";
}
// let str
// console.log(palindrome("Sagar"));
function reversedstring(str) {
  let reversedstri = str.split("").reverse().join("");
  return reversedstri;
}

// console.log(reversedstring("Sagar"));

//  filter the array with even number only

function filterArray(array) {
  let filterArray = array.filter((item) => item % 2 == 0);
  return filterArray;
}
// let arrs = [1, 2,3,4,5,6,7];
// console.log(filterArray(arrs))

function factorial(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));
function primeNum(n) {
  if (n === 1) {
    return "Given num is neither prime and not composite";
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "Not prime";
    }
  }
  return "prime";
}
// console.log(primeNum(1));
// Write a JavaScript program to find the
// largest element in a nested array.

// Longest Substring Without Repeating Characters

// abcabcbb   ans: abc

function longestSubstring(s) {
  let string = s.toLocaleLowerCase();
  let index;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      let index = string[i + 1];
    }
  }
  return string.split("").splice(0, index).join("");
}

// console.log(longestSubstring("Sags"));
// wap to calculate vowels in the string
function calculateVowels(s) {
  let vowel = "aeiouAEIOU";
  let len = s.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (vowel.includes(s[i])) {
      count += 1;
    }
  }
  return count;
}
// console.log(calculate("Sagar"))
function calculateconsonant(s) {
  let vowel = "aeiouAEIOU";
  let len = s.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (!vowel.includes(s[i])) {
      count += 1;
    }
  }
  return count;
}

// console.log(calculateconsonant("Sagar"));
// wap to find the kth largest element in the javascript

function findKthlargest(array, k) {
  let sortedArray = array.sort((a, b) => b - a);
  let element = sortedArray[k - 1];
  return element;
}

// let array = [10, 5, 60, 30, 40, 50];
// let k = 2;
// console.log(findKthlargest(array, k));

//  find the second maximum element in the array

function secondMaxm(array) {
  let len = array.length;
  let firstMax = array[0];
  let secondMax = array[1];

  if (len < 2) {
    return "cannot return second maximum value";
  }
  for (let i = 0; i < len; i++) {
    if (array[i] > firstMax) {
      secondMax = firstMax;
      firstMax = array[i];
    } else if (array[i] > secondMax && array[i] !== firstMax) {
      secondMax = array[i];
    }
  }
  return secondMax;
}

// let array = [10, 20, 40, 50, 60, 70];
// console.log(secondMaxm(array));

function binarySearch(array, target) {
  let low = 0;
  let high = array.length + 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midvalue = array[mid];
    if (midvalue == target) {
      return mid + 1;
    } else if (target > midvalue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let target = 50

// console.log(binarySearch(array, target))

function Bubblesort(array) {
  let len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// let array = [10, 5, 3, 2, 1, -3];
// console.log(Bubblesort(array));

//  merge two array without having duplicates

function mergearray(array1, array2) {
  let mergearray = array1.concat(array2);
  let uniqueElement = new Set(mergearray);
  return Array.from(uniqueElement);
}
let array1 = [10, 20, 40, 50, 60];
let array2 = [30, 40, 70, 90, 11, 33];
// console.log(mergearray(array1, array2))

const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];
//using reduce array method
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    //if present in array object
    acc[curr.age]++;
  } else {
    //if not present in array object
    acc[curr.age] = 1;
  }
  return acc;
}, {});
// console.log(output);

// let student =[
//   {name:"Smith",rollNumber:31,marks:80},
//   {name:"Jenny",rollNumber:15,marks:69},
//   {name:"John",rollNumber:16,marks:35},
//   {name:"Tiger",rollNumber:7,marks:55}
//  ];

//  const studentname  = student.filter((x) =>  x.marks > 60).map((x) => {
//   return x.name;
//  })
// console.log(studentname);
// .Print total marks for students with marks greater than
// 60 after 20 marks have been added to those who scored less than 60
// let student = [
//   { name: "Smith", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "John", rollNumber: 16, marks: 35 },
//   { name: "Tiger", rollNumber: 7, marks: 55 },
// ];

// let students = student.map((x) => {
//   if (x.marks < 60) {
//     x.marks += 20;
//   }
//   return x;
// })
// let totalmarks = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(totalmarks);

// console.log(name());
// function name() {
//   return 'Sagar';
// }
// const name = () => {
//   return 'Sagar';
// }
// var a = 1042;
// var b = 7;

// var quo, rem;
// quo = Math.floor(a / b);
// rem = a % b;
// console.log(quo , rem)

// const obj1 = {name: 'Sumit soni'};
// const obj2 = obj1;

// obj2.name = 'Akashay Saini';
// console.log(obj1.name);

// let array = new Set();
// console.log(typeof array);

// let array9 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,9];

// function occurrence(array) {
//   let len = array.length;
//   let occurred = {};

//   for (let i = 0; i < len; i++) {
//     const element = array[i];
//     if (occurred[element]) {
//       occurred[element] += 1;
//     }
//     else
//     {
//       occurred[element] = 1;
//     }
//   }
//   return occurred;
// }

// console.log(occurrence(array9))

//  find the missing odd integer

// let oddarray = [1, 3, 5, 7, 9, 11, 13];

// function missingodd(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     const element = array[i];
//     let next = element + 2;
//     if (next !== array[i + 1]) {
//       return next;
//     }
//   }
//   return -1;
// }
// console.log(missingodd(oddarray));

//  reverse the string by each word by word



// let bnm = "This is a Javascript";
// // let newbnm = bnm.split(" ");
// // console.log(newbnm.length);
// function reversebywords(bnm) {
//   let newbnm = bnm.split(" ");
//   let reversedbnm = [];
//   for (let i = 0; i < newbnm.length-1; i++) {
//       let word = newbnm[i];
//       let reverseword = word.reverse;
//       console.log(reverseword);
//   }
//   // return reversedbnm;
// }
// console.log(reversebywords(bnm))

// let myvalue = "This is the Javascript";
// let arrayofelement = myvalue.split(" ");
// // let reversedarraybywords = [];

// let reversedstringsbyword = arrayofelement.map((item) => {
//   return (
//     item = item.split("").reverse().join('')
//   )
// }).join(' ');
// console.log(reversedstringsbyword)
// console.log(arrayofelement[1].split(""));

const ar = [2,7,11,4,-2];
const sum = ar.reduce((a,b) => a+b);  
console.log( ar.map( I => sum-I ));