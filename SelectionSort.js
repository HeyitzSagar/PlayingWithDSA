// sorting the array with the help of the selection sort

function selectionSort(array) {
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
let array = [-3, 10, 20, 4, 5];
console.log(selectionSort(array));
