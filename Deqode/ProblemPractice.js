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

const arr1 = [
	{ name: 'A', parent: 1 },
	{ name: 'B', parent: 1 },
	{ name: 'C', parent: 1 },
	{ name: 'Aa', parent: 2 },
	{ name: 'Bb', parent: 2 },
	{ name: 'Abc', parent: 3 },
]

// // output: {
// // 	1: ['A', 'B', C],
// // 	2: ['Aa', 'Bb'],
// // 	3: ['Abc'],
// // }

let output = {};

arr1.forEach((item) => {
    if (!output[item.parent]) {
        output[item.parent] = [];
    }
    output[item.parent].push(item.name);
})

console.log(output)
