// // Original array with nested array
// const originalArray = [1, 2, [3, 4]];

// // Shallow copy using spread syntax
// const shallowCopy = [...originalArray];

// // Deep copy using JSON.stringify and JSON.parse
// const deepCopy = JSON.parse(JSON.stringify(originalArray));

// // Modify the nested array in the original
// originalArray[2][0] = 100;

// console.log("Original Array:", originalArray);   // Output: [1, 2, [100, 4]]
// console.log("Shallow Copy:", shallowCopy);       // Output: [1, 2, [100, 4]]
// console.log("Deep Copy:", deepCopy);             // Output: [1, 2, [3, 4]]

// function unrepeatedvalue(arr) {
//     let obj = {};
//     for(const num of arr)
//     {
//         obj[num] = (obj[num] || 0 ) + 1
//     }
//     let uniqueelement = Object.entries(obj).filter(([key, value]) => value == 1);
//     return uniqueelement;
// }
// let arr = [11, 1, 23, 33, 23, 11, 1];
// console.log(unrepeatedvalue(arr));


// const input = [2,7,11, 4, -2];
// const output = [20, 15, 11, 18, 24];

// //  you can find the total sum of the array and then subtract the ith index of it 

// function desiredoutput(input) {
//     let sum = input.reduce((acc, curr) => acc + curr);
//     let output = input.map((e ) => sum -e);
//     return output;
// }
// console.log(desiredoutput(input));

// const input1 = {a:1, b:2, c:3, d:10, e:12}
// const input2 = {a:2, e:12, f:6, d:10}
// const output = {d:10, e:12}

// function findCommonKeys(obj1, obj2) {
//     const output = {};
//     for (const key in obj1) {
//         if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
//             output[key] = obj1[key];
//         }
//     }
//     return output;
// }

// console.log(findCommonKeys(input1,input2));

// let str = "This is JavaScript";
// let reverse = str.split('').join('').reverse();
// console.log(reverse);

// function reverseString(str) {
    
// }
// let str = "This is JavaScript";
// let reverse = str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// console.log(reverse); // Output: "sihT si tpircSavaJ"


const str = "This is JavaScript Code and you have to find max occured char"

// function findMaxChar(str) {
//     let obj = {};
//     let str1 = str.replace(/\s/g, '').split('');
//     for(const char of str1) {
//         obj[char] = (obj[char] || 0) + 1;
//     }
//     return Object.keys(obj).reduce((maxChar, char) => obj[char] > obj[maxChar] ? char : maxChar, '');
// }

// console.log(findMaxChar(str));

//  sort the array 

// const employees = [
//     {name: "Sagar", salary: 25999, address: "Gola Bazar"},
//     {name: "Sagar", salary: 35999, address: "Gola Bazar"},
//     {name: "Sumit", salary: 23999, address: "Patna"},
//     {name: "Sumit", salary: 23999, address: "Patna"},
// ];

// function totalsum(employees) {
//     let obj = {};
//     for(const num of employees)
//     {
//         obj[num.name] = (obj[num.name] || 0) + num.salary;
//     }
//     return obj;
// }
// console.log(totalsum(employees));

// let arr1 = [2, 4, 6, 8, 10]

// let slice = arr1.slice(1);
// setTimeout(() => {
//     var splice = arr1.splice(1, 2);
//     console.log(splice);
//     console.log(arr1);
// }, 4000);
// console.log(slice);
// console.log(arr1);

// console.log(arr1);


// function BinarySearch( arr, target) {
//     let low = 0
//     let high = arr.length + 1;
//     while (low <= high) {
//         const mid = Math.floor((low + high)/2);
//         const midvalue = arr[mid];
//         if (midvalue == target) {
//             return mid + 1;
//         }
//         else if (target > midvalue)
//         {
//             low = mid + 1;
//         }
//         else{
//             high = mid - 1;
//         }
//     }
//     return -1;

// }

// let arr1 = [1,2,3,4,5,6,7,8,9, 23, 32, 55]
// let target = 55;

// console.log(BinarySearch(arr1, target));

