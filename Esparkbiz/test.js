// console.log(sum(5, 6));

// let a = 10;
// var b = 20;
// const c = 30;

// function sum(a, b) {
//     return a+b;
// }

// let sum  = (a, b) => {
//     return a+b;
// }

// function func1() {
//     var a = 10;
//     function func2() {
//         console.log(a);
//     }
//     func2();
// }

// const arr1 = [
// 	{ name: 'A', parent: 1 },
// 	{ name: 'B', parent: 1 },
// 	{ name: 'C', parent: 1 },
// 	{ name: 'Aa', parent: 2 },
// 	{ name: 'Bb', parent: 2 },
// 	{ name: 'Abc', parent: 3 },
// ]

// output: {
// 	1: ['A', 'B', C],
// 	2: ['Aa', 'Bb'],
// 	3: ['Abc'],
// }

// function output(arr1) {
//     let obj1 = {};
//     for(const num of arr1)
//     {
//         arr1[parent] = (arr1[parent] || 0) + 1
//     }
//     return obj1;
// }
// console.log(output(arr1))

// let solution = arr1.reduce(() => {
//     if (arr1[parent]) {
//         arr1[parent] += name;
//     }
// })
// console.log(solution);

// const sentence = "Next time there won't be a next time.";
// const replacedSentence = replaceWord(sentence, 'time', 'life');
// console.log(replacedSentence);

// Output: "Next life there won't be a next life."
// let splits = sentence.split(' ');

// console.log(splits);
// function replace(sentence, a, b) {

//     let newarra

// }

// Select * from Product
//  Select product_name, product_id  from Product
// Select COOUNT(records) from Product

//  Select * from Prodcut
// where  max

// const [count, setCount] = useState(0);

// useEffect(() => {
//   setCount(count + 1);
//   setCount(count + 1);
//   setCount(count + 1);
//   setCount(count + 1);
// }, [count]);

// console.log(count);


// const arr1 = [
// 	{ name: 'A', parent: 1 },
// 	{ name: 'B', parent: 1 },
// 	{ name: 'C', parent: 1 },
// 	{ name: 'Aa', parent: 2 },
// 	{ name: 'Bb', parent: 2 },
// 	{ name: 'Abc', parent: 3 },
// ]

// // output: {
// // 	1: ['A', 'B', C],
// // 	2: ['Aa', 'Bb'],
// // 	3: ['Abc'],
// // }

// let output = {};

// arr1.forEach((item) => {
//     if (!output[item.parent]) {
//         output[item.parent] = [];
//     }
//     output[item.parent].push(item.name);
// })

// console.log(output)