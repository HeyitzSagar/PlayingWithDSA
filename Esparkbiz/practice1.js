//  write a function to check whether the given number is prime or not

// function IsPrime(n)
// {
//     return n == 1 || n % 2 == 1 ? 'Prime Number' : 'Not Prime Number';
// }

// console.log(IsPrime(0));

//   write a function for the fibonaci series

//  eg  : 0, 1, 1, 2, 3, 5, 8

// function fibonaci(n) {
//     let arr = [];
//     arr[0] = 0;
//     arr[1] = 1;
//     for (let i = 2; i < n; i++) {

//     }
// }

//  factorial

// function factorial(n) {
//     return n==0 || n == 1 ? 1: n*factorial(n-1);
// }
// console.log(factorial(5));

// write a program to implement the Binary saearch

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 110]
// let target = 110;

// function BinarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length + 1;

//     while(low <= high)
//     {
//         const mid = Math.floor((low + high)/2);
//         const midvalue = arr[mid];
//         if (midvalue == target) {
//             return mid + 1;
//         }
//         else if(target > midvalue)
//         {
//             low = mid + 1;
//         }
//         else
//         {
//             high = mid -1;
//         }
//     }
//     return -1;
// }

// console.log(BinarySearch(arr, target))

//  move zeros to the right side of the array

let array = [10, 0, 22, 4, 0, 53, 0, 32, 0];
let output = [10, 22, 4, 53, 32, 0, 0, 0, 0];

// function moveszerotoright(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == 0) {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function movesZeroToLeft(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] == 0) {
//                 const temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(movesZeroToLeft(array));

//  find the second maximum value in the array

function secondMaximum(arr) {
    let first = arr[0];
    let second = arr[1];

    for (let i = 2; i < arr.length; i++) {
        const element = array[i];
        if (element > first) {
            second = first;
            first = element;
        }
        else if (element > second && element != first) {
            second = element;
        }
        
    }
    return second;
}


// let array1 = [10, 0, 22, 4, 0, 53, 0, 32, 0];
// console.log(secondMaximum(array1));

// count the vowels from a wordd


// function vowelcount(str) {
//     let vowel = "AEIOUaeiou";
//     let count  = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i])) {
//             count = count + 1;
//         }
//     }
//     return count;
// }
// let str = "SAgar";

// console.log(vowelcount(str));

//  Questions based on Hashmaps 


//  frequency of the each elements in the array

    // let array1 = [10, 10, 2, 2, 4, 4, 5, 6, 7, 8, 9, 22, 3, 44, 53, 34, 34, 3, 9];

    // function frequency(array1) {
    //     let obj1 = {};
    //     for(const num of array1)
    //     {
    //         obj1[num] = (obj1[num] || 0) + 1;
    //     }
    //     return obj1;
    // }
    // console.log(frequency(array1))



    //  check an array contains only the unique values

    // function uniqueelements(arr)
    // {
    //     let obj = {}
    //     for(const num of arr)
    //     {
    //         obj[num] = (obj[num] || 0) + 1;
    //     }

    //     let uniquelements = Object.entries(obj).filter(([key, values]) => values == 1);
    //     return uniquelements.flat();
    // }

    // let arr1  = [1, 2, 2, 4, 4, 5, 5, 6, 6];
    // console.log(uniqueelements(arr1))


//  find the most frequent elements in the array

    // function mostfrequent(arr) {
    //     let count = 1;
    //     let max = 0;
    //     let el;
    //     arr.sort((a, b) => a-b);
    //     for (let i = 1; i < arr.length; i++) {
    //         if (arr[i] === arr[i-1]) {
    //             count++;
    //         }
    //         else{
    //             count = 1;
    //         }
    //         if (count > max) {
    //             max = count;
    //             el = arr[i];
    //         }   
    //     }
    //     return el;
    // }
    // let arr1 = [1, 22, 22, 3, 3, 4, 5, 3];
    // console.log(mostfrequent(arr1))


    // const num1 = [10, 20, 30, 40, 50, 60]
    // const num2 = [70, 60,  80, 90, 100, 110]

    // let mergedarray = num1.concat(num2);
    // let uniqueelements = new Set(mergedarray);
    // console.log(Array.from(uniqueelements));

    let obj = {name: "Sagar"};

let greets = {
    greeting: function() {
        return `Hello ${this.name}`;
    }
};

console.log(greets.greeting.call(obj));
