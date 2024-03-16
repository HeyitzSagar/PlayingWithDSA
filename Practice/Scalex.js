// write a js program to sort the array

// function sortArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// }

// let array = [-2, -4, 5, -1, 3, 7, 9, 11];

// console.log(sortArray(array));

// const array = [-12, 33, 4, 0, -9, 101, -99];

// function sortedArray(array) {
//   let len = array.length;

//     for(let i = 0; i<len; i++)
//     {
//         for(let j = i+1; j<len; j++)
//         {
//             if(array[i] > array[j])
//             {
//                 const temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }

//   return array;
// }
// console.log(sortedArray(array));

let student = [
  { name: "Ram", age: 15, Salary: 60000 },
  { name: "Rahim", age: 16, Salary: 60000 },
  { name: "Sukesh", age: 15, Salary: 60000 },
  { name: "Ram", age: 27, Salary: 60000 },
  { name: "Ram", age: 25, Salary: 80000 },
  { name: "Ram", age: 33, Salary: 90000 },
  { name: "Ram", age: 22, Salary: 30000 },
];

// Calculate the salary of the each employee
// let Salarybyname = {};

// student.forEach((student) => {
//   const { name, Salary } = student;
//   Salarybyname[name] = (Salarybyname[name] || 0) + Salary;
// });

// console.log(Salarybyname);

// return an array of students in which their age is greater than 20

// let newstudent = student.filter((item) => item.age>20);
// console.log(newstudent)

//  increase the salary of the sukesh by two times

// let updatedSalary = student.map(item => {
//     if (item.name === "Sukesh") {
//         return {...item, Salary:item.Salary*2};
//     }
//     return item;
// })
// console.log(updatedSalary);

// find the second largest element in the array

function findsecondLargest(arr) {
  if (arr.length < 2) {
    return "Cannot perform on it";
  }
  let firstMax = arr[0];
  let secondMax = arr[1];

  for (let i = 2; i < array.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== firstMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
function SecondLargest(arr) {
  if (arr.length < 2) {
    return "Array length is less than two";
  }
  let firstMax = arr[0];
  let secondMax = arr[1];
  for (let i = 2; i < array.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== firstMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
// let array = [10, 30, 55, 22, 42, 45, 22]
// console.log(SecondLargest(array));
// implement the binary search of the array

// function binarysearch(array, target)
// {
//     let low = 0;
//     let high  = array.length + 1;

//     while(low <= high)
//     {
//         const mid = Math.floor((low + high ) / 2);
//         const midvalue = array[mid];
//         if (midvalue == target) {
//             return mid + 1;
//         }
//         else if(target > midvalue)
//         {
//             low = mid + 1;
//         }
//         else
//         {
//             high = low - 1;
//         }
//     }
//     return -1;
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// let target = 3;
// console.log(binarysearch(arr, target))

//  write a program to implement Binary search

// let array = [10, 20, 40, 50, 60, 70, 80, 90];
// let target = 90;
// function BinarySearch(array, target) {
//   let low = 0;
//   let high = array.length + 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const midvalue = array[mid];
//     if (midvalue == target) {
//       return mid + 1;
//     } else if (target > midvalue) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(BinarySearch(array, target));

// Calculate vowels in a sentence

// function calculateVowel(str) {
//     let vowels = "aeiouAEIOU";
//     let countVowels = 0;

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (vowels.includes(element)) {
//             countVowels = countVowels +  1;
//         }

//     }
//     return countVowels;
// }
// console.log(calculateVowel("Sagarra"));

// calculate the consonants

// let array = []

// let array9 = [1,2,3,4,5,6,7,1,2,1,2,3,3,4,5,6,2,2,1];

// function occurrenc(array9) {
//     let obj = {}
//     for (let i = 0; i < array9.length; i++) {
//         const element = array9[i];
//         if (obj[element]) {
//             obj[element] += 1;
//         }
//         else
//         obj[element] = 1;
//      }
//      return obj;
// }
// console.log(occurrenc(array9));

// const array = [4,1,2,3];

// const output = [3,0,1,2];

// function func1(array) {
//     let emptyarray = [];
//     for (let i = 0; i < array.length; i++) {
//        let count = 0;
//         for (let j = i+1; j < array.length; j++) {
//             if (array[i] < array[j] ) {
//                 count = count + 1;
//             }
//         }
//         emptyarray.push(count);
//     }
//     return emptyarray;
// }
// console.log(func1(array));

function findRepeatedElements(arr, k) {
  const occurrenc = {};
  for (const nums of arr) {
    occurrenc[nums] = (occurrenc[nums] || 0) + 1;
  }
  let filtered = Object.entries(occurrenc).filter(([key, value]) => value > 1);
  return filtered;
}

let number = [2, 2, 4, 4, 4, 2, 6, 7, 8, 9, 10, 11, 13, 15, 16];
let k = 1;
console.log(findRepeatedElements(number, k));

//  find the second largest element in the array

function SecondLargest(ar) {
  let len = ar.length;
  let firstMax = ar[0];
  let secondMax = ar[1];
  for (let i = 2; i < len; i++) {
    const element = array[i];
    if (element > firstMax) {
      const temp = firstMax;
      secondMax = firstMax;
      firstMax = element;
    } else if (element > secondMax && element !== firstMax) {
      secondMax = element;
    }
  }
  return secondMax;
}

// let occurence = {
//   2: 3,
//   4: 3,
//   6: 1,
//   7: 1,
//   8: 1,
//   9: 1,
//   10: 1,
//   11: 1,
//   13: 1,
//   15: 1,
//   16: 1,
// };

// let filtered = Object.entries(occurence).filter(([key, value]) => value > 1);
// console.log(filtered);

// const employees = [
//     {name: "Sagar", salary: 25999, address: "Gola Bazar"},
//     {name: "Sagar", salary: 35999, address: "Gola Bazar"},
//     {name: "Sumit", salary: 23999, address: "Patna"},
//     {name: "Sumit", salary: 23999, address: "Patna"},
// ];

// reuslt = {name: "Sagar", salary: 71998, address: "Gola Bazar"};

// const result = employees.reduce((acc, employee) => {
//     const key = `${employee.name}-${employee.address}`;
//     if (acc[key]) {
//         acc[key].salary += employee.salary;
//     } else {
//         acc[key] = { ...employee };
//     }
//     return acc;
// }, {});

// const finalResult = Object.values(result);

// console.log(finalResult);
// let totaleachsalary = employees.map((item) => {

// })

// const arrayselements = [2,2,4,5,5,5,3,2,2,5,6];

// function repeatedbykterm(arr, k) {
//     let len = arr.length;
//     let newobject = {};

//     for(const nums of arr)
//     {
//         newobject[nums] = (newobject[nums] || 0) + 1;
//     }
//     console.log(newobject);
//     let filtered = Object.entries(newobject).filter(([key, value]) => value > k);
//     return filtered;
// }

// console.log(repeatedbykterm(arrayselements, 2));

// let objectarray

// function str(s) {
//     let se = s.trim();
//   let str=se.split(" ");
//       return str[str.length-1].length;
// };
// console.log(str("Sagar Kumar Gupta  "))

//  return the index of the first unique character in a string.

let s = "leetcode";
function uniqueelement(str) {
  let obj = {};
  for (const nums of str) {
    obj[nums] = (obj[nums] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      return `${i} and ${str[i]}`;
    }
  }
}
console.log(uniqueelement(s));

let salarybracket = [
  { name: "Sagar", Salary: 30000 },
  { name: "Sagar", Salary: 30000 },
  { name: "Sumit", Salary: 30000 },
  { name: "Sh", Salary: 30000 },
  { name: "sh", Salary: 30000 },
];

function calculatecomnbinedsalary(salarybracket) {
  let combinesalaries = {};
  for (let i = 0; i < salarybracket.length; i++) {
    let employee = salarybracket[i];

    let name = employee.name.toLowerCase();

    if (combinesalaries[name]) {
      combinesalaries[name] += employee.Salary;
    } else {
      combinesalaries[name] = employee.Salary;
    }
  }
  return combinesalaries;
}
console.log(calculatecomnbinedsalary(salarybracket))

// {
// function calculatecombinedsalary(salarybracket) {
//   let combinesalaries = {};

//   for (let i = 0; i < salarybracket.length; i++) {
//     let employee = salarybracket[i];

//     let name = employee.name.toLowerCase();

//     if (combinesalaries[name]) {
//       combinesalaries[name] += employee.Salary;
//     } else {
//       combinesalaries[name] = employee.Salary;
//     }
//   }
//   return combinesalaries;
// }
// // console.log(calculatecombinedsalary(salarybracket));
// }