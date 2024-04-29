//Write a function called sumHoursByRole that takes the projects array as an argument and returns an object. The object should contain roles as keys and the sum of hoursAllocated for each role across all projects as values.

// Input:
// const projects = [
//     {
//         projectName: "Alpha",
//         projectID: "A01",
//         team: [
//             { name: "Alice", role: "Developer", hoursAllocated: 35 },
//             { name: "Bob", role: "Designer", hoursAllocated: 20 }
//         ]
//     },
//     {
//         projectName: "Beta",
//         projectID: "B01",
//         team: [
//             { name: "Charlie", role: "Developer", hoursAllocated: 40 },
//             { name: "David", role: "Designer", hoursAllocated: 15 },
//             { name: "Eve", role: "QA", hoursAllocated: 25 }
//         ]
//     }
// ];

// function groubydevlopers(projects)
// {
//     let groupedobj = {};
//     projects.forEach((item) => {
//         let {team} = item;
//         for(const items of team)
//         {
//             groupedobj[items.role] = (groupedobj[item.role] || 0) + items.hoursAllocated;
//         }
//     });
//     return groupedobj;
// }
// console.log(groubydevlopers(projects));

// Output:

// {
//     Developer: 75,  // Total hours from Alice and Charlie
//     Designer: 35,   // Total hours from Bob and David
//     QA: 25          // Total hours from Eve
// }

const arr1 = [
  { name: "A", parent: 1 },
  { name: "B", parent: 1 },
  { name: "C", parent: 1 },
  { name: "Aa", parent: 2 },
  { name: "Bb", parent: 2 },
  { name: "Abc", parent: 3 },
];

// // output: {
// // 	1: ['A', 'B', C],
// // 	2: ['Aa', 'Bb'],
// // 	3: ['Abc'],
// // }

// let output = {};

// arr1.forEach((items) => {
//   if (!output[items.parent]) {
//     output[items.parent] = [];
//   }
//   output[items.parent].push(items.name);
// });

// console.log(output);

// const object = [
//     {id: 1, empname: "Sagar", salary: 64402},
//     {id: 2, empname: "Sumit", salary: 33244},
//     {id: 3, empname: "Sandeep", salary: 32334},
//     {id: 4, empname: "Shweta", salary: 93822},
//     {id: 5, empname: "Sumit", salary: 32432},
// ]

//  group the total salary based of the employee

// let output = {};

// object.forEach((item) => {
//     if (!output[item.empname]) {
//         output[item.empname] = [];
//     }
//     output[item.empname] += item.salary
// })
// console.log(output)

/*
Input: [{id:1, value: 20},{id: 2, value: 25},{id:3, value: 2},{id: 1, value: 4},{id: 2, value: 6}]

Output: [{id:1, value: 24},{id: 2, value: 31},{id:3, value: 2}]
*/

// const input = [
//     {id:1, value: 20},
//     {id: 2, value: 25},
//     {id:3, value: 2},
//     {id: 1, value: 4},
//     {id: 2, value: 6}];

//     let output = {};

//     input.forEach((item) => {
//     if(!output[item.id])
//     {
//         output[item.id] = [];
//     }
//     output[{id: item.id}] += item.value
//     })
//     console.log(output)

// const input = [
//     {id:1, value: 20},
//     {id: 2, value: 25},
//     {id:3, value: 2},
//     {id: 1, value: 4},
//     {id: 2, value: 6}
// ];

// let output = {};

// input.forEach((item) => {
//     if (!output[item.id]) {
//         output[item.id] = 0;
//     }
//     output[item.id] += item.value;
// });

// output = Object.keys(output).map(id => ({ id: parseInt(id), value: output[id] }));

// console.log(output);

// output
// let output = {}

// employee.forEach((item) => {
//     if (!output[item.name]) {
//         output[item.name] = 0;
//     }
//     output[item.name] += item.salary;
// })

// console.log(output);

// output = Object.keys(output).map((id) => ({ name: id, value: output[id] }));
// console.log(output);

// const employee = [
//     {id: 1, name: "Sagar", salary: 23423},
//     {id: 2, name: "Sumit", salary: 23423},
//     {id: 3, name: "Afghan", salary: 23423},
//     {id: 4, name: "Sagar", salary: 23423},
// ]

// let output = Object.values(employee[name]);
// console.log(output);

const employee = [
  { id: 1, name: "Sagar", salary: 23423 },
  { id: 2, name: "Sumit", salary: 23423 },
  { id: 3, name: "Afghan", salary: 23423 },
  { id: 4, name: "Sagar", salary: 23423 },
];
// [
//     { name: 'Sagar', value: 46846 },
//     { name: 'Sumit', value: 23423 },
//     { name: 'Afghan', value: 23423 }
//   ]

//   let output = {}

//   employee.forEach((item) => {
//     if (!output[item.name]) {
//         output[item.name] = 0;
//     }
//     output[item.name] += item.salary;
//   })

//   let output1 = Object.keys(output).map((item) => ({id: item, value: output[item]}));
//   console.log(output1);

// let output = {}

// employee.forEach((item) => {
//     if (!output[item.name]) {
//         output[item.name] = 0;
//     }
//     output[item.name] += item.salary;
// })

// console.log(output);

// output = Object.keys(output).map((id) => ({ name: id, value: output[id] }));
// console.log(output);

//  Keys, values and entries

// Input:
// const projects = [
//     {
//         projectName: "Alpha",
//         projectID: "A01",
//         team: [
//             { name: "Alice", role: "Developer", hoursAllocated: 35 },
//             { name: "Bob", role: "Designer", hoursAllocated: 20 }
//         ]
//     },
//     {
//         projectName: "Beta",
//         projectID: "B01",
//         team: [
//             { name: "Charlie", role: "Developer", hoursAllocated: 40 },
//             { name: "David", role: "Designer", hoursAllocated: 15 },
//             { name: "Eve", role: "QA", hoursAllocated: 25 }
//         ]
//     }
// ];

// function groupedbyroleandHours(projects)
// {
//     let output = {};
//     projects.forEach(element => {
//         let {team} = element;
//         for(const item of team)
//         {
//             if (!output[item.role]) {
//                 output[item.role] = 0;
//             }
//             output[item.role] +=item.hoursAllocated;
//         }
//     });
//     return output;
// }
// console.log(groupedbyroleandHours(projects));

// Output:

// {
//     Developer: 75,  // Total hours from Alice and Charlie
//     Designer: 35,   // Total hours from Bob and David
//     QA: 25          // Total hours from Eve
// }

// let array = [1, 2, 3, 5, 6, 7, 1, 2, 3, 6, 4];

// function mostRepeatedAndFreq(array)
// {
//     let output = {}
//     for(const num of array)
//     {
//         output[num] = (output[num] || 0) + 1;
//     }
//     return output
// }
// console.log(mostRepeatedAndFreq(array));

// let frequency = { '1': 2, '2': 2, '3': 2, '4': 1, '5': 1, '6': 2, '7': 1 };
// let frequencyArray = Object.entries(frequency);
// console.log(frequencyArray)
// frequencyArray.sort((a, b) => b[1] - a[1]);
// console.log(frequencyArray);
// let highestFrequency = frequencyArray[0][1];
// console.log(highestFrequency);
// let mostFrequentKeys = frequencyArray.filter(pair => pair[1] === highestFrequency).map(pair => pair[0]);

// console.log("Most frequent keys:", mostFrequentKeys);

// let string = "SagarGupta";

// function checkpalindrome(string)
// {
//     for(let i = 0; i<string.length/2; i++)
//     {
//         if(string[i] !== string[string.length - 1- i])
//         {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(checkpalindrome(string));

// const object = [
//     {id: 1, empname: "Sagar", salary: 64402},
//     {id: 2, empname: "Sumit", salary: 33244},
//     {id: 3, empname: "Sandeep", salary: 32334},
//     {id: 4, empname: "Shweta", salary: 93822},
//     {id: 5, empname: "Sumit", salary: 32432},
// ]

// //  group the total salary based of the employee

// let output = {};

// object.forEach((item) => {
//     if (!output[item.empname]) {
//         output[item.empname] = [];
//     }
//     output[item.empname] += item.salary
// })
// console.log(output)

//  java script program to find the most frequent element inside the array

// let arr = [1, 1, 3, 5, 7, 4, 4, 4, 4, 4, 6, 8, 5, 6, 4, 7, 6, 0, 2, 1, 6, 8, 9, 5];

// function mostoccurence(arr) {
//   let obj = {};
//   let max = 0;
//   let element = 0;
//   for(const num of arr)
//   {
//     obj[num] = (obj[num] || 0) + 1;
//   }
//   console.log(obj);
//   for(const i in obj)
//   {
//     if (max < obj[i]) {
//       max = obj[i];
//       element = i;
//       console.log(`value of element at ${obj[i]} and element is ${i}`);
//     }
//   }
//   return element;
// }

// let value = occurence(arr);
// console.log(value);

//  find the second most occurrent element in the array

// let arr = [1, 1, 3, 5, 7, 6, 8, 5, 6, 4, 7, 6, 0, 2, 1, 6, 8, 9, 5];

// function secondMostOccurrence(arr) {
//   let obj = {};
  
//   // Count occurrences of each element
//   for(const num of arr) {
//     obj[num] = (obj[num] || 0) + 1;
//   }
//   console.log(obj);
  
//   // Find the first and second maximum occurrences
//   let max = 0;
//   let secondMax = 0;
  
//   for(const i in obj) {
//     if (obj[i] > max) {
//       secondMax = max;
//       max = obj[i];
//     } else if (obj[i] > secondMax && obj[i] < max) {
//       secondMax = obj[i];
//     }
//   }
  
//   // Find the element with the second most occurrences
//   let secondMostElement;
//   for(const i in obj) {
//     if (obj[i] === secondMax) {
//       secondMostElement = i;
//       break; // Stop when the second most element is found
//     }
//   }
  
//   return secondMostElement;
// }

// console.log(secondMostOccurrence(arr));



// arr.sort((a,b) => a-b);
// console.log(arr);

// let count = 1;
// let max = 0;
// let el = 0;

//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] === arr[i-1]) {
//         count++;
//       }
//       else{
//         count = 1;
//       }
//       if (count > max) {
//         max  = count;
//         // console.log(count);
//         el = arr[i];
//       }
//   };

//   console.log(el);

// JavaScript Program to Find k Most Frequent Elements in Array



// function factorial(n)
// {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   else{

//     return n * factorial(n-1);
//   }

// }
// console.log(factorial(10));