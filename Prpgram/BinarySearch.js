//  write a program to implement Binary search

let array = [10, 20, 40, 50, 60, 70, 80, 90];
let target = 90;
function BinarySearch(array, target) {
  let low = 0;
  let high = array.length + 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midvalue = array[mid];
    if (midvalue == target) {
      return mid + 1;
    } else if (target > midvalue) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(BinarySearch(array, target));


