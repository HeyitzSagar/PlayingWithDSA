// let fruits = ['banana', 'orange'];
// fruits.unshift('apple');
// console.log(fruits);

// let array1 =  [1,2,3,4,5,6,7,8,9];
// let array2 =  [1,12,13,14,15,16,17,18,19];


// let mergedarray = array1.concat(array2);
// let uniqueElement = new Set(mergedarray);
// console.log(Array.from(uniqueElement));

// if everyone wants a job then who will create the jobs ----->>>> we 

// Write a function that takes in a string and returns the
//  number of unique vowels in that string. For example, for the input "meeting", the output should be 2 ("e", "i").

// function uniquevowels(string)
// {
//     let string1 = string;
//     let vowels = "aeiouAEIOU";
//     let uniquevowels = new Set();

//     for (let i = 0; i < string1.length; i++) {
//         const element = string1[i];
//         if (vowels.includes(element)) {
//             uniquevowels.add(element);
//         }
//     }
//     return  `${Array.from(uniquevowels).length} (${[...uniquevowels]})`;
// }

// console.log(uniquevowels("Suresh Kumar"));

function findRepeatedElements(arr, k) {
    const occurrences = {};
    const result = [];

    for (const num of arr) {
        occurrences[num] = (occurrences[num] || 0) + 1;
        // console.log(occurrences[num]);
        if (occurrences[num] === k) {
            result.push(num);
        }
    }

    return result.length > 0 ? result : -1;
}

// function findRepeatedElements(num, k) {
//     const occurrences = {};
//     const result = [];

//     for(const nums of num)
//     {
//        occurrences[num] = (occurrences[num] || 0) + 1;
//        if (occurrences[num] == k) {
//             result.push(num);
//        }
//     }
//     return result;
// }

let number = [2, 2, 4, 4, 4, 2, 6, 7, 8, 9, 10, 11, 13, 15, 16];
let k = 2;

console.log(findRepeatedElements(number, k));



