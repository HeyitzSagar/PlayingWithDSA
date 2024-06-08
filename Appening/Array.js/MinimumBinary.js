//  find the minimum element using the binary search
//  minimum = -99


let array = [11, 43, 199, 74, -2, -99, 5];
array.sort((a, b) => a - b);
// console.log(array);
// [
//     -99, -2,   5, 11,
//      43, 74, 199
//   ]
function findMinimumElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left];
}

console.log(findMinimumElement(array)); // Output: -

