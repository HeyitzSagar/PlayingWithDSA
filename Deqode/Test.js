//Write a function called sumHoursByRole that takes the projects array as an argument and
//  returns an object. The object should contain roles as keys and the sum of hoursAllocated for each role across all projects as values.

// Input: 
const projects = [
    {
        projectName: "Alpha",
        projectID: "A01",
        team: [
            { name: "Alice", role: "Developer", hoursAllocated: 35 },
            { name: "Bob", role: "Designer", hoursAllocated: 20 }
        ]
    },
    {
        projectName: "Beta",
        projectID: "B01",
        team: [
            { name: "Charlie", role: "Developer", hoursAllocated: 40 },
            { name: "David", role: "Designer", hoursAllocated: 15 },
            { name: "Eve", role: "QA", hoursAllocated: 25 }
        ]
    }
];


// function hourslocaltedbyrole(projects)
// {
//     let obj1 = {};
//     projects.forEach((item) => {
//         let {team} = item;
//         for(const role of team)
//         {
//             obj1[role.role] = (obj1[role.role] || 0) + obj1[role.hoursAllocated];
//         }
//     });
//     return obj1;
// }
// console.log(hourslocaltedbyrole(projects))

//  the diff
// function hourslocaltedbyrole(projects)
// {
//     let obj1 = {};
//     projects.forEach((item) => {
//         let {team} = item;
//         for(const role of team)
//         {
//             obj1[role.role] = (obj1[role.role] || 0) + role.hoursAllocated;
//         }
//     });
//     return obj1;
// }
// console.log(hourslocaltedbyrole(projects))

// Output:

// {
//     Developer: 75,  // Total hours from Alice and Charlie
//     Designer: 35,   // Total hours from Bob and David
//     QA: 25          // Total hours from Eve
// }


// const sortedArray = [1, 2, 4, 4, 6, 6, 4, 6, 6, 7, 7, 9, 7, 10];
// function mostRepeatedAndFreq(arr) {
// 	let obj = {};
//   for(const num of arr)
//   {
//   obj[num] = (obj[num] || 0) + 1;
//   }
//   let sortedarry = Object.entries(obj).filter(([key, value]) => value == 3)
//   let second = sortedarry[0];
//   return second;
// }

// const result = mostRepeatedAndFreq(sortedArray);
// console.log(result); // [4, 3] // Where 4 is the second most repeated element and 3 is the Frequency count


// const sortedArray = [1, 2, 4, 4, 6, 6, 4, 6, 6, 7, 7, 9, 7, 10];

// function mostRepeatedAndFreq(arr) {
//     let obj = {};
//     for (const num of arr) {
//         obj[num] = (obj[num] || 0) + 1;
//     }
//     let sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
//     let secondMostFreq = sortedArr[1];
//     return secondMostFreq;
// }

// const result = mostRepeatedAndFreq(sortedArray);
// console.log(result); // [4, 3] // Where 4 is the second most repeated element and 3 is the Frequency count

// const students = [
//     { name: 'Alice', grade: 'A' },
//     { name: 'Bob', grade: 'B' },
//     { name: 'Charlie', grade: 'A' },
//     { name: 'David', grade: 'C' },
//     { name: 'Eve', grade: 'B' }
// ];


// function groupbygrade(students)
// {
//     let obj1 = {};
//     for(const item of students)
//     {
//         if (!obj1[item.grade]) {
//             obj1[item.grade] = [];
//         }
//         obj1[item.grade].push({name: item.name, grade: item.grade});
//     }
//     return obj1;
// }
// console.log(groupbygrade(students));


// Result:
// {
//     A: [{ name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' }],
//     B: [{ name: 'Bob', grade: 'B' }, { name: 'Eve', grade: 'B' }],
//     C: [{ name: 'David', grade: 'C' }]
// }



// const salesData = [
//     { month: 'January', sales: 100 },
//     { month: 'February', sales: 150 },
//     { month: 'January', sales: 200 },
//     { month: 'March', sales: 120 },
//     { month: 'February', sales: 180 }
// ];

// function salesDatabymonth(salesData) {
//     let obj1 = {};
//     for(const num of salesData)
//     {
//         obj1[num.month] = (obj1.month || 0) + num.sales;
//     }
//     return obj1;
// }
// console.log(salesDatabymonth(salesData));
// Result:
// {
//     January: 300,
//     February: 330,
//     March: 120
// }


// const directory = {
//     name: 'root',
//     type: 'folder',
//     contents: [
//         {
//             name: 'folder1',
//             type: 'folder',
//             contents: [
//                 { name: 'file1.txt', type: 'file' },
//                 { name: 'file2.txt', type: 'file' }
//             ]
//         },
//         {
//             name: 'folder2',
//             type: 'folder',
//             contents: [
//                 { name: 'file3.txt', type: 'file' },
//                 {
//                     name: 'subfolder',
//                     type: 'folder',
//                     contents: [
//                         { name: 'file4.txt', type: 'file' }
//                     ]
//                 }
//             ]
//         },
//         { name: 'file5.txt', type: 'file' }
//     ]
// };

// Result:
// [
//     '/root/folder1/file1.txt',
//     '/root/folder1/file2.txt',
//     '/root/folder2/file3.txt',
//     '/root/folder2/subfolder/file4.txt',
//     '/root/file5.txt'
// ]


// const orders = [
//     { customer: 'Alice', price: 100 },
//     { customer: 'Bob', price: 150 },
//     { customer: 'Alice', price: 200 },
//     { customer: 'Charlie', price: 120 },
//     { customer: 'Bob', price: 180 }
// ];


// function ordergrouped(orders) {
//     let obj1 = {};
//     for(const item of orders)
//     {
//         obj1[item.customer] = (obj1[item.customer] || 0) + item.price;
//     }
//     return obj1;
// }
// console.log(ordergrouped(orders));

// Result:
// {
//     Alice: 300,
//     Bob: 330,
//     Charlie: 120
// }


// Output: [{id:1, value: 24},{id: 2, value: 31},{id:3, value: 2}]


// const input = [
// {id:1, value: 20},
// {id: 2, value: 25},
// {id:3, value: 2},
// {id: 1, value: 4},
// {id: 2, value: 6}];

// const input = [
//     { id: 1, value: 20 },
//     { id: 2, value: 25 },
//     { id: 3, value: 2 },
//     { id: 1, value: 4 },
//     { id: 2, value: 6 }
// ];

// function output(input) {
//     let obj1 = {};
//     for (const item of input) {
//         if (!obj1[item.id]) {
//             obj1[item.id] = 0;
//         }
//         obj1[item.id] += item.value;
//     }
//     // Convert obj1 into the desired output format
//     const result = Object.keys(obj1).map(id => ({ id: parseInt(id), value: obj1[id] }));
//     return result;
// }

// console.log(output(input));


// const numbers = [1, 2, 3, 4, 1, 2, 3, 5, 6, 2,  8, 9, 9];

// Result:
// {
//     1: 2,
//     2: 3,
//     3: 2,
//     9: 2
// }

// function result(num)
// {
//     let obj = {};
//     for(const item of num)
//     {
//         obj[item] = (obj[item] || 0) + 1;
//     }
//     return obj;
// }

// console.log(result(numbers));


// const numbers = [ 1, 3, 5, 6, 7, 4, 2, 6, 7, 8];

// //  output = second most frequent number is ['6', 2]

// // Step 1: Count the frequency of each number
// const frequencyMap = {};
// numbers.forEach(number => {
//     frequencyMap[number] = (frequencyMap[number] || 0) + 1;
// });

// // Step 2: Sort the array of frequencies in descending order
// const frequencyArray = Object.entries(frequencyMap);
// frequencyArray.sort((a, b) => b[1] - a[1]);
// console.log(frequencyArray[1]);


// const numbers = [1, 3, 5, 6, 7, 4, 2, 6, 7, 8];

// function findSecondMostFrequent(numbers) {
//     const frequencyMap = {};
    
//     // Count the frequency of each number
//     for (const num of numbers) {
//         frequencyMap[num] = (frequencyMap[num] || 0) + 1;
//     }
    
//     // Convert frequencyMap to an array of [number, frequency] pairs
//     const frequencyArray = Object.entries(frequencyMap);
    
//     // Sort the frequencyArray by frequency in descending order
//     frequencyArray.sort((a, b) => b[1] - a[1]);
    
//     // Return the second most frequent number and its frequency
//     return frequencyArray[1];
// }

// const secondMostFrequent = findSecondMostFrequent(numbers);
// console.log("Second most frequent number is:", secondMostFrequent);



// const input = [
//     {id:1, value: 20},
//     {id: 2, value: 25},
//     {id:3, value: 2},
//     {id: 1, value: 4},
//     {id: 2, value: 6}
//   ];



//   function grouby(input)
//   {
//     let list = {};
//     for(const item of input)
//     {
//         if (!list[item.id]) {
//             list[item.id] = {id: item.id, value: 0};
//         }
//         list[item.id].value += item.value;
//     }
//     console.log(list);
//     return Object.values(list);
//     // return list;
//   }

//   console.log(grouby(input));

// let object1 = {
//     "name" : "sagar",
//     "name" : "sagar",
//     "name" : "sagar",
//     "name" : "sagar",
//     "name" : "sagar",
// }


// let item = {
//     '1': { id: 1, value: 24 },
//     '2': { id: 2, value: 31 },
//     '3': { id: 3, value: 2 }  
//   };



//   let re = Object.values(item);
//   console.log(re);


// function groupby(input) {
//     let list = {}; // This initializes an empty object called list to store the grouped items.
//     for (const item of input) { // This iterates over each item in the input array.
//         if (!list[item.id]) { // This checks if the id of the current item is not already in the list.
//             list[item.id] = {id: item.id, value: 0}; // If the id is not in the list, it initializes a new object with the id and sets its value to 0.
//         }
//         list[item.id].value += item.value; // This adds the value of the current item to the corresponding id in the list.
//     }
//     console.log(list); // This prints out the list object to see the intermediate result.
//     return Object.values(list); // This converts the values of the list object into an array and returns it.
// }











