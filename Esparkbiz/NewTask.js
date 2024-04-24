// let a = [2,3,4]
// let b = [2,3,4]
// console.log(a.filter(e=>e*2));
// console.log(b.map(e=>e*2));

// console.log(typeof null);
// console.log(typeof undefined);


// if({})
// {
//     console.log("True");
// }
// else
// {
//     console.log('false');
// }



// let a = [2,3,4]
// let b = [2,3,4]
// console.log(a.filter(e=>e*2));
// console.log(b.map(e=>e*2));
// myfunc();
// function myfunc() {
//     d = 20;
// }
// console.log(d)

// function varttest() {
//     let a  =
// }

// sum()
// function sum () 
// {
//     b =  25;   
// }
// function sub()
// {
//     c = 22
// }
// console.log(b)
// console.log(c)

// const arr1 = [
// 	{ name: 'A', parent: 1 },
// 	{ name: 'B', parent: 1 },
// 	{ name: 'C', parent: 1 },
// 	{ name: 'Aa', parent: 2 },
// 	{ name: 'Bb', parent: 2 },
// 	{ name: 'Abc', parent: 3 },
// ]

// const groupedByParent = arr1.reduce((acc, obj) => {
//     const { parent, name } = obj;
//     acc[parent] = acc[parent] || [];
//     acc[parent].push(name);
//     return acc;
// }, {});

// console.log(groupedByParent);

// output: {
// 	1: ['A', 'B', C],
// 	2: ['Aa', 'Bb'],
// 	3: ['Abc'],
// }

// let output = {};

// arr1.forEach((item) => {
//     if (!output[item.parent]) {
//         output[item.parent] = [];
//     }
//     output[item.parent].push(item.name);
// })
// console.log(output)

// let empsal = [
//     {name: 'Sagar', salary: 60000},
//     {name: 'Sagar', salary: 60000},
//     {name: 'Sumit', salary: 70000},
//     {name: 'Sumit', salary: 70000},
//     {name: 'Sandhya', salary: 80000},
//     {name: 'Sandhya', salary: 80000},
// ]


// let empsalgrouped = empsal.reduce((acc, obj) => {
//     const {name, salary}  = obj;
//     acc[name] = acc[name] || 0;
//     acc[name] += salary;
//     return acc;
// }, {})  
// console.log(empsalgrouped);

// Abc();
// function Abc() {
//     a = 20;
// }
// console.log(a);