//  scopes 



//  var  vs let vs const 

// var a = 5;  // var is functional scope 
// console.log(a);


//  difference  between var and let and const is that 

// {
//     var a = 10;
//     let b = 10;
//     const c = 10;
//     console.log(`inside the block ${a}`);
//     console.log(`inside the block ${b}`);
//     console.log(`inside the block ${c}`);
// }
// console.log(`outside the block ${a}`);
// console.log(`outside the block ${b}`);  // let and const are not accesible  outside the block 
// console.log(`outside the block ${c}`);

//  hoisting interview question 

// function abc() {
//     console.log(a);    // it gonna hoist the varialbe a and it will be undefined
//     var a  = 10;
// }
// abc();

// function abc() {
//     console.log(a, b, c);
//     var a = 10;     // as it starts with undefined
//     let b = 20;     // going to be in tdz
//     const c = 30;   // same going to be in tdz
// }
// abc();


//  map, filter and reduce

//  Question 1. Return only name of students in Capital letters

let students = [
    {name: "Piyush", rollNumber: 12, marks: 30},
    {name: "Sagar", rollNumber: 1, marks: 80},
    {name: "Sumit", rollNumber: 31, marks: 80},
    {name: "Akash", rollNumber: 31, marks: 80},
];

// let nameinCapital = students.map((index) => {
//     return index.name.toLocaleUpperCase();
// })
// console.log(nameinCapital)

// let name = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     name.push(element.toLocaleUpperCase());
// }
// console.log(name);

// filter 

//  return only  the result of those students whose marks gonna be
// greater than 60

// let studentwithgradeA = students.filter((item) => item.marks >60);
// console.log(studentwithgradeA);

//  return the result of those students whose marks > 60 and roll no > 15


// let markswithid = students.filter((item) => item.marks > 60).filter((item) => item.rollNumber > 15);
// console.log(markswithid)


//  reduce 

// let totalsum = students.reduce((acc, curr) => acc + curr.marks, 0 );
// console.log(totalsum);

// to return names of the students who scores more than 60

// let onlyname = students.filter((item) => item.marks > 60).map((item) => {
//     return item.name
// })

// console.log(onlyname);


//  functin declarations 

// const square = function (number) {
//     return number * number;
// }
// console.log(square(5));

//  first class functions 

// function square(n) {
//     return  n * n;
// }

// function displaySquare(fn) {
//     console.log(`Square is ` + fn(5));
// }
// console.log(displaySquare(square));


//  IIFE // immediately invoked functions Expression

// (function immediate() {
//     console.log("2")
// })()


//  closures
//  the abilitiy of the functions to access variables lexically out of his 
//  scope are called closures.

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// var x = 21;

// var fun = function () {
//     var x = 20;
//     console.log(x);  // the func will be undefined
// }
// fun();

//  params vs arguments

// function Square(number) {  // number is params
//     return number * number;
// }

// console.log(Square(5))// this is called as Arguments 

//  sperad vs rest operators

//  rest parameter must be the last parameters

// Callback functions

//  a callback function is a function is a function which passed to the another 
//  function as a arguments

//  normal vs arrow functions 

//  In normal function we defined the old syntax where as in arrow we give the 
//  or assign the value to the variable 

// In normal function we defined the implicit return keyword


// let user = {
//     username: "Sagar Gupta",
//     rc1: () => {
//         console.log(`Subscribe to ${this.username}`);
//     },
//     rc2() {
//         console.log(`Subscribe to ${this.username}`);
//     }
// }

// user.rc1();  // in arrow function when you bind the properties of the object it refers to global context
// user.rc2();  // in normal function when you bind the properties of the object it refers to that object

//  closures

//  function Subscribe() {
//     var name  = "Sagar";

//     function displayname() {
//         console.log(name);
//     }
//     displayname();
//  }
//  Subscribe();

// what will be the output 

// let count  = 0;
// (function printcount() {
//     if (count  == 0) {
//         let count = 1;  // shadowing
//         console.log(count); // 1
//     }
//     // count = 0
//     console.log(count);  // 0
// })();
// console.log(count);

//  Module.pattern in JavaScript

//  Curring 

//  implement sum(2)(3)(5)

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(2)(3)(4));


// JSon. stringify converts the objects as a string 

// const user = {
//     name: "Piyush", 
//     age: 24,
// };

// console.log(JSON.stringify(user));

//  parse -> convert it back to the objects


//  promises 

//  Synchronous and Asynchronous code 
// when your code is run line by line but when your code doesnt run line by line

//  callbacks -->  we passing a function inside a functiin as a arguements

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = false;
//         if (result) {
//             resolve("Subscribed to RoadSide Code");
//         }
//         else reject(new Error("Why arent you subscribed the roadsider coder"));
//     }, 2000);
// });

// sub.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

//  Async and await 

console.log("Start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
    reject(`error`);
})

promise1.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
console.log("end");