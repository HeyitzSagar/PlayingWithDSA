//  given an array rotate the array by k steps

//  rotate the array by 2 steps

const input = [2, 7, 11, 4, -2];
const output = [11, 4, -2, 2, 7];

// //  rotate the array by 2 left places

// function rotatearray(input, k) {
//   for (let i = 0; i < k; i++) {
//     const element = input[i];
//     for (let i = 0; i < input.length - 1; i++) {
//       input[i] = input[i + 1];
//     }
//     input[input.length - 1] = element;
//   }
//   return input;
// }
// console.log(rotatearray(input, 2));

function rotatearray(array, k) {
  for (let i = 0; i < k; i++) {
    const element = array[i];
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i + 1];
    }
    array[array.length - 1] = element;
  }
  return array;
}
console.log(rotatearray(input, 2));
