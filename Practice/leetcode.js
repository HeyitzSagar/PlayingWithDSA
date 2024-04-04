{/**
    console.log(`Hello to leetcode buddy !`)
*/}

// Problem - given an array with multiple elements, array can contain duplicate values.
//  You'll have to remove the duplicate values from the array and return array of unique elements.
// 1. Input - Length of array, Array itself


// let arr = [2, 2, 4, 4, 5, 5, 5, 6, 6];
// function nonrepeatable(arr) {
//   let object = {};
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     object[element] = (object[element] || 0) + 1;
//     if (object[element] <= 1) {
//       arr1.push(element);
//     }
//   }
//   return arr1;
// }

// console.log(nonrepeatable(arr));   // [ 2, 4, 5, 6 ]  here i am giving the unique elements 

//  but here i will be printing the elements whose occurrence is 1 


let arr = [1,2,3,4,5,1,2,3,4,5,12];

// output: 12
// function whooccurrenceisone(arr) {
//     let obj = {};
//     for(const i of arr)
//     {
//         obj[i] = (obj[i] || 0) + 1
//     }
//     let unique = Object.entries(obj).filter(([key, value]) => value == 1);
//     let number = unique[0][0];
//     return number;
// }

// console.log(whooccurrenceisone(arr));


//  

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 solved");
    }, 3000);
})

p1.then((res) => {
    console.log(`Hello1`);
    console.log(`res1 : ${res}`);
})


async function myFunction() {
    try {
        const res = await p1;
        console.log(`Hello 2`);
        console.log(`res2: ${res}`);
    } catch (error) {
        console.error(error);
    }
}

myFunction();
