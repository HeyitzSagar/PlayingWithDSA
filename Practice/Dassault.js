// code to write function
// to find nearest number closest to 0

// let Input = [-4, 4, 2, 1,6]
// // output = 1
// function closesttozero(array) {
//   let newarr = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (array[i] < 0) {
//         array[i] = -(array[i]);
//     }
//     const diff = array[i] -0;
//     newarr.push(diff);
//   }
//   let sortedArray = newarr.sort((a, b) => a-b);
//   return sortedArray[0];
// }
// console.log(closesttozero(Input));

//  Medium level Leetcode 2177. Find Three Consecutive Integers That Sum to
//  a Given Number




// let num = 30;
// let output = [10, 11, 12]; // 10+11+12 = 33;

// function func2(num) {
    //   let arr = [];
    //   let emptyarray = [];
    //   for (let i = 0; i < num; i++) {
        //     arr.push(i);
        //   }
//   return arr;
// }
// console.log(func2(num));

// let arr = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   22, 23, 24, 25, 26, 27, 28, 29,
// ];

// function func(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i] + arr[i+1] + arr[i+2];
//         if (element == num) {
//             return `${arr[i]} and ${arr[i+1]} and ${arr[i+2]}`
//         }
//     }
//     return 'not found';
// }


//  the efficient way to solve the problem is 
//  num / 3  = x and then store x-1, x, x; please check x-1, x, x+1 !> num
// console.log(func(arr, 30));


function func1(num) {
    let x = Math.ceil(num/3);
    let arr1 = [];
    let emptyarray = [];
    let sum = 0;
    for(let i = -1; i<2; i++)
    {
        let number = (x + i);
        sum = sum + number;
        console.log(sum);
        if (number < num && sum <= num) {
            arr1.push(number);
        }
        if (sum > num) {
            return emptyarray;
        }
    }
    return arr1;
}

console.log(func1(4));