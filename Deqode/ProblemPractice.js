//  here is the example of the value type

// let a = 10;
// b = a;
// a =20;
// console.log(a)  // a = 20
// console.log(b)  // b = 10

// perfect example of the refernce type of the value

// let obj1 = {
//     name: 'Sagar',
//     salary: 29003,
// }
// obj2 = obj1
// console.log(`Before refernecing the value is ${obj2.salary}`);
// console.log(`Before refernecing the value is ${obj1.salary}`);
// obj1.salary = 34343;

// console.log(`After refernecing the value is ${obj2.salary}`);
// console.log(`After refernecing the value is ${obj1.salary}`);

// let arr = [1, 2, 3, 5, 6, 7];

// array1 = arr;
// console.log(array1);
// arr[3] = 10;

// console.log(array1);

//   ---------------------------  its time to write some code with arrays, string and hashmaps or objects or

// // output: {
// // 	1: ['A', 'B', C],
// // 	2: ['Aa', 'Bb'],
// // 	3: ['Abc'],
// // }

// const arr1 = [
//     { name: 'A', parent: 1 },
//     { name: 'B', parent: 1 },
//     { name: 'C', parent: 1 },
//     { name: 'Aa', parent: 2 },
//     { name: 'Bb', parent: 2 },
//     { name: 'Abc', parent: 3 },
// ]
// let output = {};

// arr1.forEach((item) => {
//     if (!output[item.parent]) {
//         output[item.parent] = [];
//     }
//     output[item.parent].push(item.name);
// })

// console.log(output)

// const employeewithtotalsalary = [
//   {
//     name: "Sagar",
//     salary: 19294,
//   },
//   {
//     name: "Sagar",
//     salary: 32433,
//   },
//   {
//     name: "Shailesh",
//     salary: 19294,
//   },
//   {
//     name: "Shailesh",
//     salary: 19294,
//   },
// ];

// let output = {};

// employeewithtotalsalary.forEach((item) => {
//     if (!output[item.name]) {
//         output[item.name] = 0;
//     }
//     output[item.name] += item.salary;
//     return output;
// })
// console.log(output);


// const employeewithtotalsalary = [
//     {
//       name: "Sagar",
//       salary: 19294,
//     },
//     {
//       name: "Sagar",
//       salary: 32433,
//     },
//     {
//       name: "Shailesh",
//       salary: 19294,
//     },
//     {
//       name: "Shailesh",
//       salary: 19294,
//     },
//   ];
  
//   function groupEmployeesBySalaryRange(employees) {
//       const result = {
//           'Low': [],
//           'Medium': [],
//           'High': [],
//       };
  
//       employees.forEach(employee => {
//           if (employee.salary < 20000) {
//               result['Low'].push(employee);
//           } else if (employee.salary >= 20000 && employee.salary < 30000) {
//               result['Medium'].push(employee);
//           } else {
//               result['High'].push(employee);
//           }
//       });
  
//       return result;
//   }
  
//   const groupedEmployees = groupEmployeesBySalaryRange(employeewithtotalsalary);
//   console.log(groupedEmployees);
  

// let array = [5, 6, 7, 4, 7, 4, 2, 5, 7, 33, 5, 35];

// function frequentelement(array) {
//     let obj = {};
//     for(const num of array)
//     {
//         obj[num] = (obj[num] || 0) + 1;
//     }
//     return obj;
// }
// console.log(frequentelement(array));


// const array = [4, 7, 9, 11]
// // const output = [27, 24, 22, 20]

// function sumofarray(array) {
//     let output = [];
//     let sum = 0;

//     for(let i = 0; i<array.length; i++)
//     {
//         sum = 0;
//         for (let j = 0; j < array.length; j++) {
//            if (i !== j) {
//             sum = sum + array[j];
//            }
//         }
//         output.push(sum);
//     }
//     return output;
// }
// console.log(sumofarray(array));




//  move the zeros to the right side of the element

// const array = [5, 2, 0, 4, 7, 0, 35, 0];
// function moveszero(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if ( array[i] == 0) {
//                 const temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(moveszero(array));


//  find the second largest numbers in a array

// function secondlargest(array) {
//     let firstMax = array[0];
//     let secondMax = array[1];
//     for (let i = 2; i < array.length; i++) {
//         const element = array[i];
//         if (element > firstMax) {
//             secondMax = firstMax;
//             firstMax =  element;
//         }
//         else if(element > secondMax & secondMax !== firstMax)
//         {
//             secondMax = element;
//         }
//     }
//     return secondMax;
// }

// let array = [33, 45, 65, 77, 33, 57, 98];
// console.log(secondlargest(array));

//  find the unique element in the array

// const array = [4, 6, 5, 4, 6, 7, 8, 9, 11, 9, 4];

// function uniqueelement() {
    
// }

// const s = (n) => n;
// console.log(s(5));

// let  a =true;

// if (a) {
//    console.log(a); 
// }
// else
// {
//     console.log(b);
// }

//  find the unique element from the array 

    // let array = [1, 1, 2, 3, 4, 3, 4];
    // // unique element : 1

    // function uniqueelement(arr) {
    //     let obj = {};
    //     for(const num of arr)
    //     {
    //         obj[num] = (obj[num] || 0) + 1;
    //     }

    //     let uniquelement = Object.entries(obj).filter(([key, value]) => value == 1);
    //     let element =  uniquelement[0][0];
    //     return element;
    // }
    // console.log(uniqueelement(array));


// let employee = [
//     {name : 'Suresh', age: 22, salary: 24423},
//     {name : 'Suresh', age: 22, salary: 24423},
//     {name : 'Satish', age: 23, salary: 26323},
//     {name : 'Sandeep', age: 22, salary: 23423},
//     {name : 'Mandeep', age: 23, salary: 87422},
//     {name : 'Sandesh', age: 23, salary: 32432},
// ]

// let totalsalaryByEmployee = {};

// employee.forEach((emp) => {
//     let {name, salary} = emp;;
//     totalsalaryByEmployee[name] = (totalsalaryByEmployee[name] || 0) + salary;
// });
// console.log(totalsalaryByEmployee);


// let totalsalarybyage = {}
// employee.forEach((emp) => {
//     let {age, salary} = emp;
//     totalsalarybyage[age] = (totalsalarybyage[age] || 0) + salary;
// });

// console.log(totalsalarybyage);



// let arr = [22, 34, 2, 343, 22, 454, 33, 323, 45, 22, 33, 44];

// let totalfrequentelement = {};
// arr.forEach((item) => {
//     totalfrequentelement[item] = (totalfrequentelement[item] || 0) + 1;
// })

// console.log(totalfrequentelement);


//  group it by name

// let groupedbyname = {};

// employee.forEach((employee) => {
//     let {name, salary} = employee;
//     if (!groupedbyname[name]) {
//         groupedbyname[name] = [];
//     };

//     groupedbyname[name].push(salary);
// })

// console.log(groupedbyname);
//  group by salary

// let salariesbyage = {};

// employee.forEach((employee) => {
//     let {age, salary} = employee;
//     if (!salariesbyage[age]) {
//         salariesbyage[age] = [];
//     }
//     salariesbyage[age].push(salary);
// });

// console.log("Salaries grouped by:", salariesbyage);

// Given an array of objects representing students and their 
// scores in different subjects, 
// write a function to group the students by their grades. 
// Each student's grade is determined by the average of their 
// scores in all subjects. The grading system is as follows:

// A: Average score >= 90
// B: 70 <= Average score < 90
// C: 50 <= Average score < 70
// D: Average score < 50
// Your task is to implement a function groupByGrade that 
// takes an array of student objects and returns an object 
// where keys are grades (A, B, C, D) and values are arrays
//  containing the names of students who fall into that grade category.

// For example, given the following array of student objects

// let students = [
//     { name: "Alice", scores: { math: 85, science: 92, history: 88 } },
//     { name: "Bob", scores: { math: 70, science: 65, history: 72 } },
//     { name: "Charlie", scores: { math: 45, science: 60, history: 55 } },
//     { name: "David", scores: { math: 95, science: 88, history: 92 } }
// ];


//  output 
// {
//     A: ["Alice", "David"],
//     B: ["Bob"],
//     C: ["Charlie"],
//     D: []
// }


// let output = {};

// function calculateGrade(averageScore) {
//     if (averageScore >= 90) {
//         return "A";
//     } else if (averageScore >= 70) {
//         return "B";
//     } else if (averageScore >= 50) {
//         return "C";
//     } else {
//         return "D";
//     }
// }

// let grades = {}
// students.forEach((item) => {
//     let totalScore = 0;
//     let numSubjects = 0;
//     for(let subject in students.scores)
//     {
//         totalScore += students.scores[subject];
//         numSubjects++;
//     }

//     let averageScore = totalScore / numSubjects;
//     let grade = calculateGrade(averageScore);


//     // Group students by grade
//     if (!grades[grade]) {
//         grades[grade] = [];
//     }
//     grades[grade].push(students.name);

// });

// console.log(grades);

//  Binary search 


// function BinarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length + 1;

//     while(low <= high)
//     {
//         const mid = Math.ceil((low + high)/2);
//         const midvalue = arr[mid];
//         if (midvalue == target) {
//             return mid + 1;
//         }
//         else if(target > midvalue)
//         {
//             low = mid + 1
//         }
//         else {
//             high = mid - 1;
//           }

//     }
//     return -1;
// }

// let arr1 = [10, 20, 40, 50, 70];
// let target = 0
// console.log(BinarySearch(arr1, target))


//  Strings 

// let strings = "A happy man found a girl and become unhappy.";
// console.log(strings.split(''));

// //  write a function to calculate it 

// function totalVowel(strings)
// {
//     let count = 0;
//     let vowel = "AEIOUaeiou";
//     let string = strings.split('');
//     for (let i = 0; i < string.length; i++) {
//         const element = string[i];
//         if (vowel.includes(element)) {
//             count = count + 1;
//         }
        
//     }
//     return count;
// }

// console.log(totalVowel(strings))



// let strings = "A happy man found a girl and become unhappy.";

// //  replace the girl by girlfriend 

// function replaceword(strings) {
//    let str = strings.split(" ");
//    for (let i = 0; i < str.length; i++) {
//     if (str[i] == "girl") {
//         str[i] = "girlfriend";
//     }
//    } 
//    return str.join(" ");
// }

// console.log(replaceword(strings));



// // reverse a string 

//  let string = "I am Sagar";

//  let reversedstring = string.split(" ").reverse().join(' ');
// //  let reversed = reversedstring.join(' ');
//  console.log(reversedstring);


//  reverse the letter of the string 

// let str = "hello mr gupta";
// let reversestr = str.split('').join('').reverse();
// console.log(reversestr);

// let str = "hello mr gupta";
// let reversestr = str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// console.log(reversestr); // Output: "olleh rm atpug"


// let a  = null;
// console.log(a)

//  sort the array

// function sortarray(array) {
//     for (let i = 0; i < array.length; i++) {
//        for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 const temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
        
//        }
//     }
//     return array;
// }

// let array = [10, 33, 1, 5, 76, 2, 34, 45, 6, 3, 43, -99]
// console.log(sortarray(array));



//  Methods of arrays in js

[1,2,3].length;  // 3
[1,2,3].push(4); // [1,2,3,4]
[1,2,3].unshift(0); // [0, 1, 2, 3]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift() // [2, 3]
[1,2,3].at(2) // 3
[1,2,3].indexOf(3) // 2
[1,2,3].includes(3) // true
