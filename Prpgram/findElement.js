// find the element of the given index

let index = 4;

function IndexElement(array, index) {
  let element = array[index];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] = element)) {
      return element;
    }
  }
}

let array = [10, 3, 4, 6, 7, 43, 55, 32, 44, 23];

console.log(IndexElement(array, index-1));