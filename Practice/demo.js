// const course = {
//     lecture: 10,
//     section: 2,
//     title: 'JavaScript',
//     notes:{
//         introduction: 'Welcome to JS Course'
//     },
//     enroll(){
//         console.log('You are successfully Enrolled');
//     }
// }

// course.price = 999;
// course.enroll()
// console.log(course);

// const obj1  = [
//     {name:"Prathi", age: 32, place: "Pune"},
//     {name:"Prathi", age: 22, place: "Pune"},
//     {name:"Prathi", age: 12, place: "Pune"},
// ]

// let output = obj1.map(el => {
//     return el.age;
// }).sort((a,b) => a-b);
// console.log(output);

// const input = [2,7,11,4,-2];
// const output = [20, 15, 11, 18, 24];

// function returnoutarray(array) {
//     let output = [];
//     for (let index = 0; index < array.length; index++) {
//         let sum = 0;
//         for (let j = 0; j < array.length; j++) {

//             if (j !== index) {
//                 sum += input[j];
//             }
//         }
//         output.push(sum);
//     }
//     return output;
// }
// console.log(returnoutarray(input));

// const arr = [4, 1, 2, 3];
// // const output = [3, 0, 2, 1];

// function editedarray(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         count++;
//       }
//     }
//     output.push(count);
//   }
//   return output;
// }

// console.log(editedarray(arr));

// const arr = [4, 1, 2, 3]

// const input = [2, 7, 11, 4, -2];
// const output = [20, 15, 11, 18, 24];

// function create(array) {
//   let newarray = [];
//   for (let i = 0; i < array.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         sum = sum + array[j];
//       }
//     }
//     newarray.push(sum);
//   }
//   return newarray;
// }

// console.log(create(input));

// const input1  = { a: 1, b:2, c:3, d:10, e:12}
// const input2  = {a:2, e:12, f:6, d:10}

// const output  = {d:10, e:12} // order is not important

// function func(input1, input2)
// {
//     let obj = {};
//     for(let i in input1)
//     {
//         if (input1[i] == input2[i]) {
//             obj[i] = input1[i];
//         }
//     }
//     return obj;
// }

// console.log(func(input1, input2))

// const input = [1,2,-2,11,7,1]
// const output = 7;

const input1 = [1, 4, 7, 2, 4, 7];
// const output = 4;

// function secondlargestnumber(array)
// {
//     let firstMax = array[0];
//     let secondMax = array[1];
//     for (let i = 2; i < array.length; i++) {
//         const element = array[i];
//         if (element>firstMax) {
//             secondMax = firstMax;
//             firstMax = element;
//         }
//         else if(element > secondMax && element !== firstMax)
//         {
//             secondMax = element;
//         }
//     }
//     return secondMax;
// }
// console.log(secondlargestnumber(input1));

// const input = [2, 7, 11, 4, -2];
// const output = [11, 4, -2, 2, 7];

//  rotate the array by 2 left places

// function rotatearray(input, k) {
//   for (let i = 0; i < k; i++) {
//     const element = input[i];
//     for (let i = 0; i < input.length - 1; i++) {
//       input[i] = input[i + 1];
//     }
//     input[input.length - 1] = element;
//   }
//   return input;
// }
// console.log(rotatearray(input, 2));

//  find the missing odd number

// const input = [5,7, 9, 11, 15, 17];

// function missingitem(array)
// {
//     let first = input[0];
//     let second = input[1];
//     let diff = (second-first);
//     // for (let i = 0; i < array.length; i++) {
//     //     const element = array[i];
//     //     let next
//     // }
//     return diff;
// }
// console.log(missingitem(input));
// function findmissingodd(array)
// {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let next = element + 2;

//         if(next !== array[i+1])
//         {
//             return next;
//         }
//     }
// }
// console.log(findmissingodd(input));
// function missingodd(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let next = element + 2;
//     if (next !== array[i + 1]) {
//       return next;
//     }
//   }
//   return -1;
// }

// console.log(missingodd(input));

// const input = "This is Sagar";
// const ouput = "sihT si ragaS";
// function reverseWords(input) {
//   return input
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }
// console.log(reverseWords(input));

// let word = input.split(" ").map((word) => word.split("").reverse().join(" "));
// console.log(word);


//  let write a code for the factorial using recursion

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } 
//     else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));

//  implement currying of the sum of sum(a)(b)

// function sum(a)
// {
//     return function (b) {
//         return a * b;
//     }
// }
// console.log(sum(10)(20));

// Code to write function to find nearest number closest to 0;   will add it later on

