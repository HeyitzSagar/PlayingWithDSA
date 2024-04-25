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

