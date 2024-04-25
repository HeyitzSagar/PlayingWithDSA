// function outer(){ 
//     function inner(){
//       console.log(a);
//     }
//     let a =10; // let instead of var
//     return inner;
//   }
  
//   var close = outer(); // this will give you outer function
//   close();


// function x()
// {
//     var a = 6;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function closure() {
//     var a = 10;
//     function closureb() {
//         console.log(a);
//     }
//     closureb();
// }
// closure();

// function outer() {
//     let outerVar = 'I am from outer scope';
//     function inner() {
//         console.log(outerVar);
//     }
//     return inner;
// }
// const innerFn = outer();
// innerFn();  // I am from outer scope

// undefined vs notdefined 

// in undefined a variable is intialized 
// but has not been assign a value
// in not defined a variable is intialized as well as assigned but can not be accesible


// console.log(typeof null);  // Object
// console.log(typeof undefined);  // undefined

// const value = null;

// if (value === null) {
//     console.log("The value is null.");
// } else {
//     console.log("The value is not null.");
// }

// for (let i = 0; i <=5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);   
// };

// for (var i = 0; i <=5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);   
// };




const employeewithtotalsalary = [
    {
      name: "Sagar",
      salary: 19294,
    },
    {
      name: "Sagar",
      salary: 32433,
    },
    {
      name: "Shailesh",
      salary: 19294,
    },
    {
      name: "Shailesh",
      salary: 19294,
    },
  ];
  
  let output = {};
  
  employeewithtotalsalary.forEach((item) => {
      if (!output[item.name]) {
          output[item.name] = 0;
      }
      output[item.name] += item.salary;
  });
  
  console.log(output);
  