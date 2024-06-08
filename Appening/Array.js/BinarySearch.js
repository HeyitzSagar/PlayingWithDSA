let arr = [10, 20, 30, 40, 50, 60, 70, 80, 900];

let target = 20;

function BinarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.ceil((low + high) / 2);
    const value = array[mid];
    if (value == target) {
      return mid + 1;
    } else if (target > value) {
      low = mid + 1;
    } else if (target < value) {
      high = mid - 1;
    }
  }
}
console.log(BinarySearch(arr, target));
