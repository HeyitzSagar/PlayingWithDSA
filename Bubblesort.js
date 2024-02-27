// this program is for sorting the array through bubble sort using javascript

let array = [10, 3, 6, 7, 11, 44, 56, 33, 55, -3];

// defining a function which takes an array return the array in a sorted manner

function sortedArray(array) {
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
 
const calculate  = () => {
  return 
}
console.log(sortedArray(array));

//  [
//   -3,  3,  6,  7, 10,
//   11, 33, 44, 55, 56
// ]
