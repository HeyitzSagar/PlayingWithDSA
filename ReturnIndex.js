//  return the index of the array element using javascript

let array = [10, 20, 40, 30, 43, 22, 44];

let target = 30; // index = 3;

function returnIndex(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return "element not found";
}


console.log(returnIndex(array, target));  // it will return 3 as a index