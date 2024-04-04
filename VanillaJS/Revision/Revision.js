//  var let and const
// Scope

// Global scope
//  everthing here is global scope

function functionscope() {
  //  this is our function scope
}

{
  //  this is our block scope
}

// var a  = 5;
//  var is accesible to everywhere whether it is defined globally or
// in a functional scope or in a block scope

// creating an example of var global scope accesing everwhere
// console.log(a);
// {
//     console.log(a);
// }

// function functionscop() {
//     return a;
// }
// console.log(functionscop());

// {
//     var a = 10;
// }
// console.log(a);    // declare inside the block scope but can be acccesible to the global scope
// function scopeaccess() {
//     return a;   // even if we can access it inside the functional scope
// }
// console.log(scopeaccess());

//  lets talk on the let

//  let is basically a block scope kind of a data type

// let a = 10;
// {
//     console.log(a);
//     function func1 ()
//     {
//         return a;
//     }

// }
// function func2()
// {
//     return a;
// }
// console.log(func1());
// console.log(func2());

// defining inside the block scope

// {
//   let a = 10;
//   function checkscope() {
//     a = 20;
//     return a; // value will get shadowed and will return 20;
//     // return a;  // it will access the value of a due to closure property
//   }
//   console.log(`checking value of ${a}`); //10 here the value wont get shadowed outer the functional scope
// }
// console.log(a);  // it will not be accesible because let is a functional scope

// console.log(checkscope()); // 20

// const a = 20;
// {
//      console.log(a);
//  a = 30;     you can access the value of const defined in global scope but you can not shadowed the value
//  function scopechain() {
//     return a*a;
//  }
//  }

// {
//     const a = 10;
// }
// console.log(a); once you defined the const inside the block scope  you can not access the value outside the block scope

//   hoisitng

// console.log(a);  // undefined
// console.log(b);   // reference error b is not defined
// var a = 10;
// let a = 10;
//  same will happen for the const

// let numbers = [1, 2, 3];

// numbers.forEach((num, index, arr) => {
//     arr[index] = num * 2;
// });

// console.log(numbers); // Output: [2, 4, 6]

// let arr = [2,4,5,6]
// let newarray = arr.map((item) =>{
//    return item * item
// })
// console.log(newarray);

// let arr = [2,4,5,6,7,8,9];

// let newarray = arr.filter((item, index) => item %2 == 0);
// console.log(newarray);
// [ 2, 4, 6, 8 ]

//  reduce

// let arr = [2, 4, 6, 10, 8, 12];

// let sum  = arr.reduce((acc, curr) => {
//    return acc = acc + curr;
// }, 0);
// console.log(sum);

// let sortedarray = arr.reduce((acc, curr) => {
//     return acc > curr ? acc : curr
// });  // finding the maximum
// let sortedarray = arr.reduce((acc, curr) => {
//     return acc < curr ? acc : curr
// });  // finding the minmum
// console.log(sortedarray);

// function changeValue(num) {
//     num = 10; // changing the parameter value
//     return num;
// }

// let x = 5;
// console.log(changeValue(x))  // value is 10
// console.log(x); // Output: 5 (unchanged) but the value on the memory location is 5

// function changeObject(obj) {
//     obj.prop = 'new value'; // changing the property of the object
//     return obj.prop
// }

// let obj = { prop: 'old value' };
// console.log(changeObject(obj)) // new value
// console.log(obj.prop); // Output: 'new value' (changed)

//  in pass by reference the value located at the memory location get changes
//  where as in pass by value the value of the memory location never change

// function closestToZero(nums) {
//   if (nums.length === 0) return undefined; // return undefined if array is empty

//   let closest = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (
//       Math.abs(nums[i]) < Math.abs(closest) ||
//       (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest)
//     ) {
//       closest = nums[i];
//     }
//   }

//   return closest;
// }

// Example usage:

// console.log("Number closest to zero:", closestToZero(nums)); // Output: 1

// let str = "Saagga";
// // output = "s"
// function uniqueletter(str) {
//   let object = {};
//   for (const i of str) {
//     object[i] = (object[i] || 0) + 1;
//   }
//   let uniqueelement = Object.entries(object).filter(
//     ([key, value]) => value == 1
//   );
//   return uniqueelement.flat();
// }

// console.log(uniqueletter(str));

// function rest(...rest) {
//     let sum = 0;
//     for (let i = 0; i < rest.length; i++) {
//         sum += rest[i];
//     }
//     return sum;
// }

// console.log(rest(2, 3, 4, 5)); // Output: 14 (2 + 3 + 4 + 5)



// <-------------------- Dassault Interview  ------------------------------------------>

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// var a = 1; 
// function test(){
// 	console.log(a);
// 	var a = 2;  // 
// }
// test();
// Find all 4 digit numbers divisible by 5 and 7 and unit place must be zero


// function  allfourdigit()
// {
//     let start = 1050;
//     let end = 9999;
//     let arr = [];
//   for(let i = start; i<= end; i = i + 70)
//   {
//      arr.push(i);
//   }
//   return arr;
// }
// console.log(allfourdigit());

// for(var i = 1; i <= 5; i++) {
//   setTimeout(function() {
//       console.log('Value of i : ' + i); 
//   },100);
// }
// for(let i = 1; i <= 5; i++) {
//   setTimeout(function() {
//       console.log('Value of i using let  : ' + i); 
//   },100);
// }

// const person = { age: 20, name: 'Ben' };
// const peopleArray = [person, person, person];
// peopleArray[1].name = 'Joe'; 
// console.log(peopleArray[0].name);  // Ben

// const person = { age: 20, name: 'Ben' };
// const peopleArray = [person, person, person];
// peopleArray[1].name = 'Joe'; 
// console.log(peopleArray[2].name);  
// console.log(person);

// var a = null;
// var b = undefined;

// console.log(typeof a);
// console.log(typeof b);