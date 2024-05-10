// // Valid Mountain Array:
// // Given an array of integers arr, return true if and only if it is a valid mountain array.
// // Example: Input: [0, 3, 2, 1], Output: true.

// let arr1 = [10, 2, 4, 10, 2, 4, 6, 7, 5, 7, 4];

// //  find the occurrence of the each element of the array

// function occurrence(arr1) {
//   let obj1 = {};
//   for (const num of arr1) {
//     obj1[num] = (obj1[num] || 0) + 1;
//   }

//   return obj1;
// }
// console.log(occurrence(arr1));

// // find the maximum occurred element in the array
// // output = 4

// function findMaxOccurredElement(arr) {
//   let countmap = {};
//   for (const num of arr) {
//     countmap[num] = (countmap[num] || 0) + 1;
//   }
//   let maxOccurredElement;
//   let maxCount = 0;
//   for (let num in countmap) {
//     if (countmap[num] > maxCount) {
//       maxCount = countmap[num];
//       maxOccurredElement = num;
//     }
//   }
//   return maxOccurredElement;
// }

// // console.log(findMaxOccurredElement(arr1));

// let arr2 = [1, 1, 2, 2, 3, 5, 6, 5, 6, 7];

// //  firstnonrepeating = 3

// function FirstNonRepeating(arr) {
//   let obj1 = {};
//   for (const num of arr) {
//     obj1[num] = (obj1[num] || 0) + 1;
//   }
//   let nonrepeating = Object.entries(obj1).filter(([key, value]) => value == 1);
//   let firstnonrepeating = nonrepeating[0][0];
//   return firstnonrepeating;
// }
// // console.log(FirstNonRepeating(arr2));









// Output should be a number as 12490
// You cannot concat and then parse.

// // declare a variable let number;
// //  Function addingStr  passing str as argument 
// // looping the element using for loop less than str.length
// // inside that variable i will add the each element like this waay 


// let  str = [‘1’, ‘2’, ‘4’, ‘90’];
// let str = ['1', '2', '4', '90']
// len = str.length + 1;


// 124906756


// function stringbuilder(str) {
//     let number = 0;
//     let demo = 1; // Initialize with 1, not 0
//     for (let i = 0; i < str.length; i++) {
//         number = number * 10 + (+str[i] * demo); // Multiply by demo, not divide
//         demo = demo * 10; // Multiply by 10 to increase the factor
//     }
//     return number;
// }

// const str = '12490'; // Example input string
// console.log(stringbuilder(str)); // Output: 12490


// let  str = [‘1’, ‘2’, ‘4’, ‘90’];
// output = 12490

// output = 12490
// function stringbuilder(str){
    //     let number = 0;
    //     let demo =  1;
//     for (let i = str.length-1; i>=0; i--) {
//         number = number + (demo * +str[i]);
//         demo =  demo *10;

//     }
//     return number;
// }

// console.log(stringbuilder(str));

let str = ['1', '2', '4', '90', '70']
1249070
function stringbuilder(str) {
    let number = 0;
    // let demo = 0;
    let demo = 10000;
    for(let i = 0; i<str.length; i++)
    {  

        number = number +  (demo * +str[i]);
        demo = demo / 10;
        if (demo <=10) {
            demo = 1;
        }
    }
    return number;
}
console.log(stringbuilder(str));


// let a = '2';
// let b = +a;
// console.log(typeof b);
// output = 12490
// function stringbuilder(str)
// {
//     let output;
//     for (let i = 0; i < str.length; i++) {
//         output = output + str[i];
//     }
//     return output;
// }

// console.log(stringbuilder(str))













