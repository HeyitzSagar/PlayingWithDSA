// this is for the hoisting related stuff revision

//  let and const are hoisted in temporal deadzone where as var is not hoisted and hence all three is not hoisted

// console.log(a);   // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // ReferenceError: Cannot access 'a' before initialization
// console.log(c);    // undefined


// let a  = 0;
// const b = 1;
// var  c = 30;

// Abc(); 

// function Abc() {
//     // let a  = 0;   
 
// }
// console.log(a);  // a is not defined 

// cbd();
// function cbd() {
//     // a = 20;   // when a variable is defined a value without using a let const and var it becomes a global variable
// }
// console.log(a);  // 20

// {
//     let a = 10;
//     const b = 20;
//     var  c = 30;
//     d = 40;
// }

// console.log(a);   // not defined due to block scope
// console.log(b);  // not defined due to block scope
// console.log(c);   // accessible because var is functional scope as well as global scope
// console.log(d);   // accesible because when a variable is defined with a value without using let const and var it becomes a global variable

// Abc();

// function Abc() {
//     var a = 20;   
// }
// console.log(a);   here a will not be accessible;

// var a = 30;
// function Abc() {
//     console.log(`Before shadowing ${a}`);      // here the value of a will be undefined because it will check the value within the function scope due to hoisiting
//     var a = 20;   
//     console.log(`After shadowing ${a}`);   // it will be 20 as we are overriding the value of a known as shadowing 
// }
// Abc();
// console.log(a);  // here the value will be 30 as overriden value wont override out of the scope 


// var a = 30;
// function Abc() {
//     console.log(`Before shadowing ${a}`);     // here the value will be 30
//      a = 20;     // since we have not defined the type of the variable so it will acts as another vairable
//     console.log(`After shadowing ${a}`);   // it will be 20 as we are overriding the value of a known as shadowing 
// }
// Abc();


// var a = 30;
// function Abc() {
//     console.log(`Before shadowing ${a}`);
//     var a = 20;
//     console.log(`After shadowing ${a}`);
// }
// Abc();
// console.log(a);

// var a = 30;
// function Abc() {
//     console.log(`Before shadowing ${a}`);
//      a = 20;
//     console.log(`After shadowing ${a}`);
// }
// Abc();
// console.log(a);

// var a = 30;
// function Abc() {
//     var c = 40;
//     return c;
// }

// const v = Abc();
// console.log(v);

// console.log(`hositing the variable y here : ${y}`);   reference error  y is not defined
// y= 1;

// console.log(`hositing the variable y here : ${J}`); j is not defined 
// {
//     j = 2;
// } 
// console.log(`Accessing the variable j here ${J}`);  // j is not defined 

// console.log(j);   // j is not defined 
// function Abc() {
//     j = 20;
// }
// Abc();
// console.log(j);



// Abc();
// console.log(j);
// function Abc() {
//     j = 20;
// }
// console.log(j);

// y = 3;
// console.log(y);

// Abc();
// console.log(y);
// function Abc() {
//     y = 4;
// }


// function hositing() {
//     console.log(`Value in a local scope ${a}`)
// }
// console.log(`Value in a global scope ${a}`);
// var a = 1;
// hositing();


// a = 2;
// var a ;
// console.log(a);

// console.log(a);
// var a = 2;


// b = function a(){};
// var a = b = 6;
// a = function b(){};
// function b() {};
// function a() {};
// console.log(a,b);


// var a = 10;
// console.log("line number 2", a);  // 10

// function fn() {
//   console.log("line number 4", a);  // undefined
//   var a = 20;
//   a++;
//   console.log("line number 7", a);  // 21
//   if (a) {
//     var a = 30;
//     a++;
//     console.log("line number 11", a);  //31
//   }
//   console.log("line number 13", a); // 31
// }
// fn();
// console.log("line number 2", a); // 10


// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
  
//   foo();
//   console.log(typeof a);
//   console.log(typeof b);


