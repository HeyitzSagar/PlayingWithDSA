// Questions on Arrays

// Remove the duplicate elements from the array

let array = [1, 1, 2, 2, 3, 4];
// let output = [3, 4];

function removeDuplicate(array) {
  let obj = {};
  for (const num of array) {
    obj[num] = (obj[num] || 0) + 1;
  }
  let uniqueelement = Object.entries(obj).filter(([key, value]) => value == 1);
  const element = uniqueelement.map((item) => item[0]);
  return element;
}
// console.log(removeDuplicate(array))

// find pairs in arrays whose sum equals a given number

// method brute force approach

const arr = [1, 5, 7, -1, 5];
const targetSum = 6;

function findPairs(array, targetSum) 
{
    const pairs = [];
    const n = array.length;
    for(let i = 0; i<n; i++)
        {
            for (let j = i+1; j <n; j++) {
                if (array[i] + array[j] === targetSum) {
                    pairs.push([array[i], array[j]]);
                }
            }
        } 
        return pairs; 
}
// console.log(findPairs(arr, targetSum));

//move all zeros to the end of the array////

let arr2 = [1, 2, 0, 4, 0, 6, 0, 5, 9, 0, 11, 0, 12, 0, 13, 0];

let output = [1, 2, 4, 6, 5, 9, 0, 11, 12, 13]

function moveAllZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === 0) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// console.log(moveAllZeros(arr2))


// Array methods in js 

// let arraye = [1, 2, 3, 4, 5];
// arraye.pop();  // 1, 2, 3, 4
//  array.shift // basically removes the first element of the array

// array.unshift('apple'); // basically add on the 0th index




