//  what is async ?
// Async is a keyword which is used before a function to make async function
// eg: async function sum ()
// {
//     return a+b;
// }

// const { reject } = require("async");

//  async functions  always returns a promise

// async function sum (a, b)
// {
//     return a+b;
// }
// const data = sum(10,20);  // promise {30}
// data.then((res) => console.log(res)); // 30

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved Value !!");
});

console.log(p);

//  async and await we used to handle promises but why do we need it
//  to handle promises

//  <---- Handling promises before async await ------->

function getData() {
  p.then((res) => {
    console.log(res);
  });
}
console.log(getData());

// <----------- Handelling the same promises using async and await -------------------------->

async function handlepromise() {
  const val = await p; // await is a keyword that can be only used inside the async functions

  console.log(val);
}
console.log(handlepromise());

// {
//  why this async await is special 
// why async await over .then() }

/**
 * 
const p1 = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve("Promise resolved Value !!");
   }, 10000);
  });

  function getData1(){
    p1.then((res) => {
        console.log(res);
    });
    console.log("Hey this is normal behaviour");
  }
  getData1()

  what we conclude we here that when we use the old methods for solving the promises then ".then"
   doesnt waits for the res and simply move ahead with the execution of the program
 */

   const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve("Promise resolved Value !!");
    }, 10000);
   });

async function handlepromise3() {
    const val = await p3; // await is a keyword that can be only used inside the async functions
  
    console.log(val);
    console.log("Value3");
  }

getData3();