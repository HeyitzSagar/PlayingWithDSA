// practicing some questions upon arrays, string, objects and array of objects

const { createDiffieHellmanGroup } = require("crypto");

// let objects = [
//     {name: 'Sagar', Salary: 72000},
//     {name: 'Sagar', Salary: 72000},
//     {name: 'Sagar', Salary: 72000},
//     {name: 'Sumit', Salary: 45000},
// ];


//  wap to find largest two numbers in a array

// function largesttwonumber(array) {
//     let firstnum = 0;
//     let secondnum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > firstnum)
//             {
//                 secondnum = firstnum;
//                 firstnum = array[i];
//             }
//             else if (array[i] > secondnum && array[i] < firstnum) {
//                 secondnum = array[i];
//             }
        
//     }
//     return secondnum;
// }
// let array = [11, 14, 6, 2, 26, 4]
// console.log(largesttwonumber(array));

let array = [10, 5, 6, 7];
let output = [18, 23, 22, 21] 

// function  pattern(array)
// {
//     let output = [];
//     let sum = array.reduce((acc, curr) => acc + curr);
//     for (let i = 0; i < array.length; i++) {
//         output.push(sum - array[i])
        
//     }
//     return output;
// }
// console.log(pattern(array));



// let obj = {};

// for(const num of objects)
//     {   
//         obj[num.name] = (obj[num.name] || 0) + num.Salary;
//     }
//     console.log(obj);

// let total = 0;
// for(const num of objects)
//     {
//         total += num.Salary
//     }
//     console.log(total);
//  calculate the total salary

// function calculatesalay(objects)
// {
//     let totalsalary = 0;
//     for(const i of )
// }

//  sort the array

function sortarray(array)
{
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                const temp = array[i];
                array[i] = array[j] ;
                array[j] = temp; 
            }
            
        }   
    }
    return array;
}
// let array1 = [10, 2, 8, 12, 90, 55]
// console.log(sortarray(array1))


// count occurrence of all the elements

// function occurrence(array)
// {
//     let obj = {};
//     for(const num of array)
//         {
//             obj[num] = (obj[num] || 0) + 1;
//         }
//         return obj;
// }
// let array10 = [1, 1, 2, 2, 4, 4, 5, 5, 6, 6, 7, 8];
// console.log(occurrence(array10));

//  find the largest most occurred element inside the array 

    // const arrs = [1, 2, 43, 45, 45, 3, 3, 2, 1, 4, 5]
    // // output : 45

    // function greatestMostFrequentElement(array) {
    //     let obj = {};
    //     let maxFrequency = 0;
    //     let mostFrequentElement;
    //     // Count frequencies of each element in the array
    //     for (const num of array) {
    //         obj[num] = (obj[num] || 0) + 1;
    //         if (obj[num] > maxFrequency || (obj[num] === maxFrequency && num > mostFrequentElement)) {
    //             maxFrequency = obj[num];
    //             mostFrequentElement = num;
    //         }
    //     }
    //     return mostFrequentElement;
    // }
    

    // console.log(greatestMostFrequentElement(arrs));


    // function greatestMostFrequentElement(arrs) {
    //     let maxFrequency = 0;
    //     let maxFrequencyelement;
    //     let obj = {};

    //     for(const num of arrs)
    //         {
    //             obj[num] = (obj[num] || 0) + 1;
    //             if (obj[num] > maxFrequency || (obj[num] === maxFrequency && num > maxFrequencyelement) ) {
    //                 maxFrequency = obj[num];
    //                 maxFrequencyelement = num;
    //             }
    //         }
    //         return maxFrequencyelement;
    // }

    // console.log(greatestMostFrequentElement(arrs));


    